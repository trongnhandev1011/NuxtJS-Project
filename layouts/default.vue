<template>
  <v-app dark>
    <v-app-bar :clipped-left="clipped" fixed app>
      <v-btn
        text
        v-for="item in items"
        v-bind:key="item.id"
        @click="redirect(item.location)"
      >
        {{ item.title }}
      </v-btn>
      <v-btn text>Search</v-btn>
    </v-app-bar>
    <v-main>
      <v-container>
        <Nuxt />
      </v-container>
    </v-main>
    <v-footer :absolute="!fixed" app>
      <span>&copy; {{ new Date().getFullYear() }}</span>
    </v-footer>
  </v-app>
</template>

<script>
import { ref } from "vue";

export default {
  setup() {
    const router = useRouter();

    const redirect = (location) => {
      router.push(location);
    };

    let items = ref([
      {
        icon: "mdi-apps",
        title: "Home",
        location: "/",
      },
      {
        icon: "mdi-chart-bubble",
        title: "Detail",
        location: "/detail",
      },
      {
        icon: "mdi-chart-bubble",
        title: "Contact",
        location: "/contact",
      },
    ]);

    return {
      items,
      redirect,
    };
  },
};
</script>
