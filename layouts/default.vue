<template>
  <v-app dark>
    <v-app-bar class="nav-bar" app>
      <v-row class="ml-10">
        <v-btn
          text
          v-for="item in items"
          :key="item.id"
          @click="redirect(item.location)"
        >
          {{ item.title }}
        </v-btn>
        <search-form
          v-if="currentPath === '/'"
          v-on:search="searchValueHandler"
          :searchValueArray="searchValueArray"
        />
      </v-row>
    </v-app-bar>
    <v-main>
      <v-container>
        <nuxt-child :searchedCardList="filterCardList" />
      </v-container>
    </v-main>
    <v-footer app>
      <span>&copy; {{ new Date().getFullYear() }}</span>
    </v-footer>
  </v-app>
</template>

<script>
import SearchForm from "../components/L2_Molecule/L2_02_SearchForm/SearchForm.vue";
import ListDataItem from "../constants/ItemListData";

export default {
  components: {
    SearchForm,
  },
  setup() {
    let searchValueArray = ref([]);
    let searchedCardList = ref(ListDataItem);
    let searchValue = ref("");

    try {
      searchValueArray = localStorage.getItem("searchValueArray")
        ? ref(JSON.parse(localStorage.getItem("searchValueArray")).value)
        : ref([]);

      if (searchValueArray.length == 0) {
        localStorage.setItem("searchValueArray", JSON.stringify([]));
      }
    } catch (e) {
      console.log(e);
    }

    const router = useRouter();
    const route = useRoute();
    const currentPath = computed(() => route.fullPath);

    const filterCardList = computed(() => {
      if (!searchValue) return ListDataItem;
      else {
        return ListDataItem.filter((item) =>
          item.title
            .toUpperCase()
            .includes(searchValue.value.toUpperCase().trim())
        );
      }
    });

    const searchValueHandler = (value) => {
      searchValue.value = value;
      if (value && searchValueArray.value[0] !== value) {
        searchValueArray.value.unshift(value);
      }
      localStorage.setItem(
        "searchValueArray",
        JSON.stringify(searchValueArray)
      );
    };

    const redirect = (pathName) => {
      router.push(pathName);
    };

    let items = ref([
      {
        icon: "mdi-apps",
        title: "Home",
        location: "/",
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
      searchedCardList,
      searchValueArray,
      searchValueHandler,
      filterCardList,
      searchValue,
      currentPath,
    };
  },
};
</script>

<style lang="scss">
.nav-bar {
  background-color: #ed247f !important;
}
</style>
