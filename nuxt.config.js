import colors from "vuetify/es5/util/colors";
import { defineNuxtConfig } from "@nuxt/bridge";

import en from "./i18n/en";
import ja from "./i18n/ja";
import ko from "./i18n/ko";

export default defineNuxtConfig({
  ssr: false,
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    titleTemplate: "%s - demo-project",
    title: "demo-project",
    htmlAttrs: {
      lang: "en",
    },
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { hid: "description", name: "description", content: "" },
      { name: "format-detection", content: "telephone=no" },
    ],
    link: [{ rel: "icon", type: "image/x-icon", href: "/favicon.ico" }],
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins

  // Auto import components: https://go.nuxtjs.dev/config-components
  // components: {
  //   dirs: [
  //     "~/components",
  //     "~/components/L1_Atom",
  //     "~/components/L2_Molecule",
  //     "~/components/L3_Organism",
  //     "~/components/L4_Template/L4_01_HomePageTemplate",
  //   ],
  // },
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/vuetify
    "@nuxtjs/vuetify",
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [],

  // Vuetify module configuration: https://go.nuxtjs.dev/config-vuetify
  vuetify: {
    customVariables: ["~/assets/variables.scss"],
    lang: {
      locales: { en, ja, ko },
      current: "en",
    },
    theme: {
      dark: true,
      themes: {
        dark: {
          primary: "#ed247f",
          accent: colors.grey.darken3,
          secondary: colors.amber.darken3,
          info: colors.teal.lighten1,
          warning: colors.amber.base,
          error: colors.deepOrange.accent4,
          success: colors.green.accent3,
        },
      },
    },
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
    extend(config, ctx) {},
    babel: { compact: true },
  },
});
