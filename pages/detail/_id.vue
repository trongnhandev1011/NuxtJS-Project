<template>
  <v-row>
    <v-col cols="3">
      <v-img class="img-detail" :src="currentItem.image"></v-img>
    </v-col>
    <v-col cols="9" align-self="center">
      <v-row class="item-title">
        {{ currentItem.title }}
      </v-row>
      <v-row class="item-author">
        {{ currentItem.author }}
      </v-row>
      <v-row class="icon"> </v-row>
    </v-col>
  </v-row>
</template>

<script>
import ListDataItem from "../../constants/ItemListData";
export default {
  name: "InspirePage",
  setup() {
    const route = useRoute();
    const id = computed(() => route.params.id);
    const currentItem = ListDataItem.find((item) => item.id == id.value);
    console.log(currentItem);

    return {
      currentItem,
    };
  },
};
</script>

<style lang="scss">
.img-detail {
  width: 300px;
  height: 300px;
}

.item-title {
  font-size: 3rem;
  font-weight: 700;
}
</style>
