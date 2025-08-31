import { defineNuxtConfig } from "nuxt/config";

const ONE_DAY = 60 * 60 * 24 * 1000;
const ONE_WEEK = ONE_DAY * 7;
const MAX_PHOTO_SIZE = 1024 * 1024 * 5; // 5MB
const MAX_FILE_SIZE = 1024 * 1024 * 30; // 30MB
const DEFAULT_COOKIE_NAME = "lms_sttal";
const DEFAULT_COOKIE_SECRET = "TR45P4C31713u4Tu1771241-STTAL123";
const DEFAULT_COOKIE_IV = "BAHAFRAZADBRND69";

export default defineNuxtConfig({
  compatibilityDate: "2025-05-15",
  devtools: { enabled: true },
  app: {
    pageTransition: { name: "page", mode: "out-in" },
    layoutTransition: { name: "layout", mode: "out-in" },
    head: {
      title: "Karir Traspac",
      titleTemplate: "%s - Karir Traspac",
      htmlAttrs: {
        lang: "en",
      },
      meta: [
        { charset: "utf-8" },
        { name: "viewport", content: "width=device-width, initial-scale=1" },
        {
          name: "description",
          content: "Temukan pekerjaan impianmu di Karir Traspac"
        },
        { name: "format-detection", content: "telephone=no" },
      ],
      link: [
        {
          rel: "icon",
          href: "/favicon.ico",
        },
      ],
    },
  },
  ssr: true,
  
  // Experimental features untuk mengatasi masalah navigation
  experimental: {
    payloadExtraction: false,
  },
  
  devServer: {
    port: 3001,
  },
  runtimeConfig: {
    cookieSecret: process.env.NUXT_COOKIE_SECRET || DEFAULT_COOKIE_SECRET,
    cookieIv: process.env.NUXT_COOKIE_IV || DEFAULT_COOKIE_IV,
    cookieName: process.env.NUXT_COOKIE_NAME || DEFAULT_COOKIE_NAME,
    cookieExpires: parseInt(
      process.env.COOKIE_EXPIRES || ONE_DAY.toString(),
      10
    ), // 1 day
    cookieRememberMeExpires: parseInt(
      process.env.COOKIE_REMEMBER_ME_EXPIRES || ONE_WEEK.toString(),
      10
    ), // 7 days

    public: {
      baseUrlApi: process.env.VITE_APP_BASE_API,
      maxPhotoSize: parseInt(
        process.env.MAX_PHOTO_SIZE || MAX_PHOTO_SIZE.toString()
      ),
      maxVideoSize: parseInt(
        process.env.MAX_VIDEO_SIZE || MAX_FILE_SIZE.toString()
      ),
    },
  },
  typescript: {
    strict: false,
  },
  nitro: {
    esbuild: {
      options: {
        // drop: ["console"],
      },
    },
    storage: {
      redis: {
        driver: 'memory'
      }
    },
    experimental: {
      wasm: true
    }
  },
  vite: {
    optimizeDeps: {
      // include: ["@iconify/iconify", "@iconify/vue"],
      include: [],
      exclude: ["axios", "form-data"],
    },
    ssr: { noExternal: true },
    server: {
      watch: {
        ignored: ["**/node_modules/**", "**/.git/**", "**/dist/**"], // Ignore unnecessary directories
      },
      headers: {
        // "Access-Control-Allow-Origin": "*",
      },
    },
    cacheDir: ".vite-cache",
    build: {
      minify: process.env.NODE_ENV === "development" ? false : "terser",
      terserOptions: {
        compress: {
          // drop_console: true,
        },
      },
    },
    plugins: [],
  },
  srcDir: "src",
  imports: {
    dirs: ["./store/**"],
  },
  plugins: ["~/plugins/component.client.ts"],
  css: ["~/assets/css/main.css", "~/assets/css/animation.css"],
  modules: ["@pinia/nuxt", "@nuxt/ui", "@nuxt/fonts", "@nuxt/eslint"],
  components: {
    dirs: [
      {
        path: "~/components/ui",
        pathPrefix: false,
        global: true,
      },
      {
        path: "~/components/common",
        pathPrefix: false,
        global: true,
      },
    ],
  },
  pinia: {
    storesDirs: ["./store/**", "./custom-folder/stores/**"],
  },
  colorMode: {
    preference: "light", // force default
    fallback: "light",
    dataValue: "light", // value to use in data-theme
    classSuffix: "", // use class="light" not "light-mode"
    storageKey: "color-mode", // (optional) override key name
    disableTransition: true, // smoother on first load
  },
  //@ts-ignore
  fonts: {
    families: [
      { name: "Inter", provider: "google" },
      // { name: 'MyCustomFont', src: '/fonts/my-custom-font.woff2' } --> // contoh untuk menggunakan font lokal
    ],
  },
  eslint: {
    config: {
      stylistic: {
        commaDangle: "never",
        braceStyle: "1tbs",
      },
    },
  },
});

function getBaseUrl(url: string) {
  try {
    if (!url || url === "-") {
      return null;
    }

    const parsedUrl = new URL(url);
    return `${parsedUrl?.protocol}//${parsedUrl?.host}`;
  } catch (error) {
    console.error("FAIL getBaseUrl -> Invalid URL:", error);

    return null;
  }
}
