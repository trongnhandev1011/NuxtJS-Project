<template>
  <card-list :itemList="itemListData" />
</template>

<script>
import CardList from "../../L3_Organism/L3_01_CardList/CardList";
import { ref } from "vue";
import ListDataItem from "../../../constants/ItemListData";
export default {
  name: "HomePageTemplate",
  setup() {
    const itemListData = ref(ListDataItem);

    // console.log(ListDataItem);
    return {
      itemListData,
    };
  },
  components: {
    CardList,
  },
};
</script>
