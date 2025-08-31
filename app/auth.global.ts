// import { useAuthStore } from "~/store";

// export default defineNuxtRouteMiddleware(async (to) => {
//   const authStore = useAuthStore();
//   const { isAuthenticated, sessionChecked } = storeToRefs(authStore);

//   // if (!sessionChecked.value) {
//   //   await authStore.fetchUser();
//   // }

//   // 2. Definisi Aturan Halaman
//   const isPublicPage = to.meta.public === true;
//   const isAuthOnlyPage = to.meta.authOnly === true;

//   // 3. Logika untuk Pengguna yang Sudah Login
//   if (isAuthOnlyPage && isAuthenticated.value) {
//     // Jika user sudah login dan mencoba ke halaman login, arahkan ke halaman utama.
//     const user_group = authStore.user?.user_group_id;

//     return useBaseNavigate(user_group);
//   }

//   // 4. Logika untuk Pengguna yang Belum Login (Tamu)
//   if (!isPublicPage && !isAuthenticated.value) {
//     // Dapatkan instance router untuk memeriksa rute
//     const router = useRouter();

//     // Cek apakah rute yang dituju benar-benar ada di aplikasi
//     if (router.resolve(to).matched.length > 0) {
//       // JIKA RUTE ADA: Redirect ke halaman login dengan parameter redirect
//       const origin = useRequestURL().origin;
//       const redirectUrl = origin + to.fullPath;
//       return $router.push(
//         `/auth/login?redirect=${encodeURIComponent(redirectUrl)}`,
//         { replace: true }
//       );
//     } else {
//       // JIKA RUTE TIDAK ADA: Lempar error 404 secara eksplisit
//       throw createError({
//         statusCode: 404,
//         statusMessage: "Halaman tidak ditemukan",
//       });
//     }
//   }

//   // Jika semua kondisi lolos, izinkan navigasi
//   return;
// });


// // import { useAuthStore } from "~/store";

// // export default defineNuxtRouteMiddleware(async (to) => {
// //   console.log("to:", to);
// //   const authStore = useAuthStore();
// //   const { isAuthenticated, sessionChecked } = storeToRefs(authStore);

// //   // 1. Jika verifikasi sesi dari cookie belum pernah dilakukan, lakukan sekarang.
// //   // 'await' akan menjeda navigasi sampai fetchUser selesai.
// //   // if (!sessionChecked.value) {
// //   //   await authStore.fetchUser();
// //   // }

// //   // 2. Sekarang, 'isAuthenticated' sudah memiliki nilai yang akurat.
// //   // Jalankan logika perlindungan rute seperti biasa.

// //   const isPublicPage = to.meta.public === true;
// //   const isAuthOnlyPage = to.meta.authOnly === true;

// //   if (isAuthOnlyPage && isAuthenticated.value) {
// //     // Jika user sudah login dan mencoba ke halaman login, arahkan ke halaman utama.
// //     return $router.push("/", { replace: true });
// //   }

// //   if (!isPublicPage && !isAuthenticated.value) {
// //     // 1. Dapatkan origin (misal: http://localhost:3000)
// //     const origin = useRequestURL().origin;

// //     // 2. Gabungkan origin dengan path tujuan untuk mendapatkan URL lengkap
// //     const redirectUrl = origin + to.fullPath;

// //     // 3. Gunakan URL yang sudah lengkap dan encode untuk keamanan
// //     return $router.push(`/auth/login?redirect=${encodeURIComponent(redirectUrl)}`, {
// //       replace: true,
// //     });
// //   }
// // });
