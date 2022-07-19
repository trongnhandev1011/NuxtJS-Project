<template>
  <div>
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
        <v-row class="item-sub-description">
          Ex incididunt incididunt ullamco officia.
        </v-row>
        <v-row>
          <v-icon class="start-icon" aria-hidden="false">
            mdi-arrow-right-drop-circle
          </v-icon>
        </v-row>
      </v-col>
      <img
        class="deco-img-circle"
        src="https://momo.careers/wp-content/themes/momo/assets/images/svg/circle.svg"
        alt="img"
      />
      <img
        class="deco-img-line"
        src="https://momo.careers/wp-content/themes/momo/assets/images/svg/wave.svg"
        alt="img"
      />
    </v-row>
    <v-row class="mt-16">
      <v-col cols="1">
        <v-progress-circular
          :size="50"
          color="primary"
          indeterminate
        ></v-progress-circular>
      </v-col>
      <v-col cols="11">
        {{ currentItem.description }}
      </v-col>
    </v-row>
    <v-divider class="mt-10"></v-divider>
    <v-row class="mt-5" style="font-size: 1.5rem; font-weight: 600">
      Request Information
    </v-row>
    <v-row class="mt-10">
      <v-col class="ml-5" cols="1" align-self="center"
        ><v-progress-circular
          :size="50"
          color="primary"
          indeterminate
        ></v-progress-circular
      ></v-col>
      <v-col cols="5" align-self="center">
        <v-row
          >Laboris ut do nostrud dolor cupidatat esse aliqua proident.</v-row
        >
        <v-row>Mrs. Johnnie McKenzie</v-row>
      </v-col>
      <v-col cols="3" align-self="center">Requested intrusmental track</v-col>
      <v-col cols="2" align-self="center">Country</v-col>

      <v-col align-self="center"
        ><v-icon class="start-icon" aria-hidden="false">
          mdi-microphone
        </v-icon></v-col
      >
    </v-row>
  </div>
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

.item-author {
  font-size: 1.2rem;
}

.item-sub-description {
  font-weight: 300;
}

.mdi-arrow-right-drop-circle::before {
  font-size: 4rem;
  margin-top: 15px;
  cursor: pointer;
}

.deco-img-line {
  width: 300px;
  position: absolute;
  right: 70px;
  top: 60px;
}

.deco-img-circle {
  width: 300px;
  position: absolute;
  right: 100px;
  top: 100px;
  offset-path: path("M20,20 C20,100 200,0 200,100");
  animation: move 3000ms infinite alternate ease-in-out;
}

@keyframes move {
  0% {
    offset-distance: 0%;
  }
  100% {
    offset-distance: 100%;
  }
}
</style>
