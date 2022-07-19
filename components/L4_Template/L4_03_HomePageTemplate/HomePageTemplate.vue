<template>
  <card-list :searchedCardList="searchedCardList" />
</template>

<script>
import CardList from "../../L3_Organism/L3_01_CardList/CardList";
export default {
  name: "HomePageTemplate",
  props: {
    searchedCardList: Array,
  },
  setup(props) {
    // let searchedCardList = ref(props.searchedCard);
    // return {
    //   searchedCardList,
    // };
  },
  components: {
    CardList,
  },
};
</script>
