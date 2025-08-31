import { useAuthStore } from '~/store';
import { storeToRefs } from 'pinia';
import { groupRedirects, groupPathPrefixes, defaultRedirectPath, isPublicPage, shouldSkipAuth } from '~/config/auth';

export default defineNuxtRouteMiddleware(async (to, from) => {
  // Skip middleware untuk Chrome DevTools dan browser requests
  if (shouldSkipAuth(to.path)) {
    console.log('Skipping auth for:', to.path);
    return;
  }

  const store = useAuthStore();
  const { isAuthenticated, user, sessionChecked } = storeToRefs(store);

  // Hanya check session sekali di client
  if (process.client && !sessionChecked.value) {
    try {
      await store.fetchUser();
    } catch (error) {
      console.warn('Session check failed:', error);
    }
  }

  const userGroupId = user.value?.user_group_id?.toString();

  console.log('userLogin:', user.value);
  console.log('isAuthenticated:', isAuthenticated.value);

  if (!isAuthenticated.value) {
    if (!isPublicPage(to.path)) {
      console.log('User not authenticated, redirecting to login. Path:', to.path);
      return navigateTo('/auth/login');
    }
    console.log('Allowing access to public page:', to.path);
    return;
  }

  if (isAuthenticated.value) {
    if (to.path === '/auth/login') {
      const redirectPath = groupRedirects[userGroupId] || defaultRedirectPath;
      console.log(`User already logged in, redirecting from login to ${redirectPath}`);
      return navigateTo(redirectPath);
    }

    if (isPublicPage(to.path)) {
      console.log('Allowing authenticated user access to public page:', to.path);
      return;
    }

    const allowedPrefix = groupPathPrefixes[userGroupId];
    if (allowedPrefix && !to.path.startsWith(allowedPrefix)) {
      console.warn(`Authorization failed: User with group ${userGroupId} cannot access ${to.path}.`);
      const redirectPath = groupRedirects[userGroupId] || defaultRedirectPath;
      return navigateTo(redirectPath);
    }
  }
});