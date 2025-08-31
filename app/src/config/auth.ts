// config/auth.ts

/**
 * Definisikan path redirect default berdasarkan user_group_id.
 * Ini akan menjadi satu-satunya tempat Anda mengubah aturan redirect.
 */
export const groupRedirects: Record<string, string> = {
  "01": "/human-resources",
  "02": "/interviewers",
  "03": "/pelamar",
};

/**
 * Definisikan path yang menjadi "akar" atau "prefix" untuk setiap grup.
 * Ini digunakan untuk memeriksa apakah pengguna mencoba mengakses area yang bukan haknya.
 * Contoh: User grup '05' (siswa) tidak boleh mengakses path yang berawalan '/admin'.
 */
export const groupPathPrefixes: Record<string, string> = {
  "01": "/human-resources",
  "02": "/interviewers",
  "03": "/pelamar",
};

/**
 * Halaman default jika pengguna sudah login tapi grupnya tidak terdaftar.
 */
export const defaultRedirectPath = "/auth/login";

/**
 * Daftar halaman publik yang tidak memerlukan login.
 */
export const publicPages = [
  "/auth/login",
  "/auth/register",
  "/auth/forget-password",
  "/",
  "/lowongan",
  "/lowongan/:id", // Pattern untuk dynamic route
  "/profile",
  '/interviewers',
  // Chrome DevTools dan browser requests
  "/.well-known/appspecific/com.chrome.devtools.json",
  "/favicon.ico",
];

/**
 * Path yang harus di-skip dari middleware auth
 */
export const skipPaths = [
  "/.well-known/",
  "/favicon.ico",
  "/_nuxt/",
  "/api/",
  "/_",
];

/**
 * Function untuk check apakah path harus di-skip
 */
export function shouldSkipAuth(path: string): boolean {
  return skipPaths.some(skipPath => path.includes(skipPath)) ||
         (process.server && path.includes('.json'));
}

/**
 * Function untuk check apakah path adalah halaman publik
 * Mendukung dynamic routes dengan parameter
 */
export function isPublicPage(path: string): boolean {
  // Check exact match dulu
  if (publicPages.includes(path)) {
    return true;
  }
  
  // Check pattern matching untuk dynamic routes
  for (const publicPath of publicPages) {
    if (publicPath.includes(':')) {
      // Convert pattern ke regex
      // Contoh: "/lowongan/:id" jadi "/lowongan/[^/]+"
      const regexPattern = publicPath
        .replace(/:[^/]+/g, '[^/]+') // Replace :id dengan [^/]+
        .replace(/\//g, '\\/'); // Escape forward slashes
      
      const regex = new RegExp(`^${regexPattern}$`);
      if (regex.test(path)) {
        return true;
      }
    }
  }
  
  return false;
}
