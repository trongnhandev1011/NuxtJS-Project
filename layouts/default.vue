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

      <search-form
        v-if="currentTab === '/'"
        v-on:search="searchValueHandler"
        :searchValueArray="searchValueArray"
      />
    </v-app-bar>
    <v-main>
      <v-container>
        <nuxt-child :searchedCardList="searchedCardList" />
      </v-container>
    </v-main>
    <v-footer :absolute="!fixed" app>
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

    const currentTab = ref("/");

    const setCurrentTab = (tab) => {
      currentTab.value = tab;
    };

    const searchValueHandler = (value) => {
      if (value) {
        searchValueArray.value.push(value);
      }
      localStorage.setItem(
        "searchValueArray",
        JSON.stringify(searchValueArray)
      );
      searchedCardList = ListDataItem.filter((item) =>
        item.title.toUpperCase().includes(value.toUpperCase().trim())
      );
      console.log(searchedCardList);
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
      searchedCardList,
      searchValueArray,
      searchValueHandler,
    };
  },
};
</script>
