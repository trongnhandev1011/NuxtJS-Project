<template>
  <div>
    <v-row class="card-list-container">
      <v-col
        v-for="item in itemList"
        v-bind:key="item.id"
        cols="3"
        class="card-list-row"
      >
        <card :cardContent="item" />
      </v-col>
    </v-row>
  </div>
</template>

<script>
import Card from "../../L2_Molecule/L2_01_Card/Card";
export default {
  name: "CardList",
  props: {
    itemList: Array,
  },
  components: {
    Card,
  },
  setup(props) {
    let itemList = props.itemList;

    return {
      itemList,
    };
  },
};
</script>

<style lang="scss">
.card-list-container {
  margin-top: 50px;

  .card-list-row {
    margin-bottom: 10px;
  }
}
</style>
