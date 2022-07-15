<template>
  <v-app dark>
    <v-app-bar :clipped-left="clipped" fixed app>
      <v-btn
        text
        v-for="item in items"
        :key="item.id"
        @click="redirect(item.location)"
      >
        {{ item.title }}
      </v-btn>

      <search-form v-if="currentTab === '/'" />
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
import { watch, ref } from "vue";
import SearchForm from "../components/L2_Molecule/L2_02_SearchForm/SearchForm.vue";

export default {
  components: {
    SearchForm,
  },
  setup() {
    const router = useRouter();

    const currentTab = ref("/");

    // const setterCurrentTab = computed

    const setCurrentTab = (tab) => {
      currentTab.value = tab;
    };

    const redirect = (pathName) => {
      router.push(pathName);
      setCurrentTab(pathName);
    };

    watchEffect(() => console.log(currentTab));

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
      currentTab,
      setCurrentTab,
    };
  },
};
</script>
