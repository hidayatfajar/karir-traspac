// composables/useAppMode.ts
import { isSlicingMode, isProductionMode, logAppMode, type AppMode } from '~/config/app-mode';

/**
 * Composable untuk mengelola app mode
 */
export const useAppMode = () => {
  /**
   * Mock authenticated state untuk slicing mode
   */
  const mockAuthenticatedUser = () => {
    return {
      id: 1,
      name: 'John Doe',
      email: 'john@example.com',
      user_group_id: '03', // Pelamar
      avatar: null,
    };
  };

  /**
   * Get authenticated state berdasarkan mode
   */
  const getAuthState = () => {
    if (isSlicingMode()) {
      // Di slicing mode, ambil dari localStorage jika ada, atau fallback ke mock
      const { getCurrentMockUser, hasMockToken } = useMockAuth();
      const mockUser = getCurrentMockUser();
      
      if (mockUser && hasMockToken()) {
        return {
          isAuthenticated: true,
          user: mockUser,
        };
      }
      
      // Fallback ke mock user default
      return {
        isAuthenticated: true,
        user: mockAuthenticatedUser(),
      };
    }
    
    // Di production mode, tetap gunakan mock untuk sekarang (untuk demo)
    // Nanti bisa diganti ke real auth store
    const { getCurrentMockUser, hasMockToken } = useMockAuth();
    const mockUser = getCurrentMockUser();
    
    if (mockUser && hasMockToken()) {
      return {
        isAuthenticated: true,
        user: mockUser,
      };
    }
    
    // Fallback ke auth store yang sebenarnya
    const authStore = useAuthStore();
    return {
      isAuthenticated: authStore.isAuthenticated,
      user: authStore.user,
    };
  };

  /**
   * Handle action yang memerlukan auth
   * Di slicing mode, hanya log action tanpa melakukan apa-apa
   */
  const handleAuthAction = (action: string, callback?: () => void) => {
    if (isSlicingMode()) {
      console.log(`🎨 [SLICING MODE] Mock action: ${action}`);
      return;
    }
    
    if (callback) {
      callback();
    }
  };

  /**
   * Navigate dengan considerasi mode
   */
  const navigateWithMode = (path: string) => {
    if (isSlicingMode()) {
      console.log(`🎨 [SLICING MODE] Mock navigation to: ${path}`);
      return navigateTo(path);
    }
    
    return navigateTo(path);
  };

  return {
    isSlicingMode: isSlicingMode(),
    isProductionMode: isProductionMode(),
    logAppMode,
    getAuthState,
    handleAuthAction,
    navigateWithMode,
    mockUser: mockAuthenticatedUser(),
  };
};
