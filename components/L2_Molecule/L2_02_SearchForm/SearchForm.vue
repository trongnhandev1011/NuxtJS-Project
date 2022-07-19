<template>
  <v-row justify="center">
    <v-dialog transition="dialog-top-transition">
      <template v-slot:activator="{ on, attrs }">
        <v-btn color="primary" dark v-bind="attrs" v-on="on"> Search </v-btn>
      </template>
      <v-card class="search-form">
        <v-row>
          <v-col
            class="ml-6 d-flex justify-center align-center search-form-container"
          >
            <v-text-field
              class="search-field"
              label="Enter your search value"
              prepend-icon="mdi-magnify"
              v-model="searchValue"
            ></v-text-field>
            <v-btn
              text
              class="d-flex align-center ml-2"
              @click="searchValueHandler(searchValue)"
              >Search</v-btn
            >
          </v-col>
        </v-row>
        <v-divider> </v-divider>
        <div class="ml-5">Recently search:</div>
        <v-btn
          class="ma-5"
          style="text-transform: none"
          v-for="value in searchValueArray.filter((item, index) => index < 20)"
          :key="value.id"
          @click="recentSearchValueClickHandler(value)"
        >
          {{ value }}
        </v-btn>
      </v-card>
    </v-dialog>
  </v-row>
</template>

<script>
export default {
  name: "SearchForm",
  emits: ["search"],
  props: {
    searchValueArray: Array,
  },
  setup(props, context) {
    let searchValueArray = props.searchValueArray;
    let searchValue = ref("");
    const searchValueHandler = function (searchValue) {
      context.emit("search", searchValue);
    };

    const recentSearchValueClickHandler = (value) => {
      searchValue.value = value;
      searchValueHandler(value);
    };

    return {
      searchValue,
      searchValueHandler,
      searchValueArray,
      recentSearchValueClickHandler,
    };
  },
};
</script>

<style lang="scss">
.search-form {
  min-height: initial !important;
  opacity: 0.8;
  position: absolute;
  //   top: 56px !important;
  left: 0px;
  top: 56px;

  .search-field {
    width: 500px !important;
  }

  .search-form-container {
    .v-input {
      flex: initial !important;
    }
  }
}
</style>
