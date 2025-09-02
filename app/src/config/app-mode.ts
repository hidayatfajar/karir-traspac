// config/app-mode.ts
/**
 * Mode aplikasi untuk development
 * - DEVELOPMENT: Mode slicing, semua halaman public (tidak perlu auth)
 * - PRODUCTION: Mode normal dengan authentication
 */
export type AppMode = 'DEVELOPMENT' | 'PRODUCTION';

/**
 * Switch mode aplikasi
 * Ubah ke 'PRODUCTION' ketika siap implementasi API
 */
export const APP_MODE: AppMode = 'DEVELOPMENT' as AppMode;

/**
 * Cek apakah app dalam mode development (slicing mode)
 */
export const isSlicingMode = (): boolean => {
  return APP_MODE === 'DEVELOPMENT';
};

/**
 * Cek apakah app dalam mode production (dengan auth)
 */
export const isProductionMode = (): boolean => {
  return APP_MODE === 'PRODUCTION';
};

/**
 * Log mode aplikasi saat startup
 */
export const logAppMode = (): void => {
  if (process.client) {
    const mode = isSlicingMode() ? '🎨 SLICING MODE' : '🔒 PRODUCTION MODE';
    console.log(`%c[APP MODE] ${mode}`, 'color: #10B981; font-weight: bold; font-size: 14px;');
    
    if (isSlicingMode()) {
      console.log('%c[INFO] Authentication disabled for easier slicing', 'color: #F59E0B;');
    }
  }
};
