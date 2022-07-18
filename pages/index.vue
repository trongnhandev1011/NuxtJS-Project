<template>
  <home-page-template :searchedCardList="searchedCardList" />
</template>

<script>
import HomePageTemplate from "../components/L4_Template/L4_03_HomePageTemplate/HomePageTemplate.vue";
export default {
  name: "HomePage",
  props: {
    searchedCardList: Array,
  },
  setup(props) {
    let searchedCardList = props.searchedCardList;
    return {
      searchedCardList,
    };
  },
  components: { HomePageTemplate },
};
</script>
