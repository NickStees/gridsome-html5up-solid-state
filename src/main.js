// This is the main.js file. Import global CSS and scripts here.
// The Client API can be used here. Learn more: gridsome.org/docs/client-api

import DefaultLayout from "~/layouts/Default.vue";
import Hero from "~/components/Hero.vue";

// global styles
import "~/assets/scss/main.scss";

export default function(Vue, { router, head, isClient }) {
  // Add fontawesome globally
  head.link.push({
    rel: "stylesheet",
    href:
      "https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css",
  });

  // Set default layout as a global component
  Vue.component("Layout", DefaultLayout);
  Vue.component("Hero", Hero);
}
