<template>
  <v-hover v-slot="{ hover }">
    <v-card
      class="mx-auto"
      :elevation="hover ? 12 : 2"
      :class="{ 'on-hover': hover }"
    >
      <v-img :src="cardContent.image"></v-img>

      <v-card-title :class="{ 'show-btns': hover }"
        >{{ cardContent.title }}
      </v-card-title>

      <v-card-subtitle :class="{ 'show-btns': hover }">
        <div>{{ cardContent.tag }}</div>
      </v-card-subtitle>

      <v-card-actions>
        <!-- <v-dialog width="500">
        <template v-slot:activator="{ on, attrs }">
          <v-btn
            color="red lighten-2"
            dark
            v-bind="attrs"
            v-on="on"
            @click="redirectToDetailPage(cardContent)"
          >
            Click Me
          </v-btn>
        </template>
        <card-dialog :cardContent="cardContent" />
      </v-dialog> -->
        <!-- <v-btn
        color="red lighten-2"
        dark
        @click="redirectToDetailPage(cardContent)"
      >
        Click Me
      </v-btn> -->
      </v-card-actions>
    </v-card>
  </v-hover>
</template>

<script>
// import CardDialog from "../../L1_Atom/L1_04_Dialogs/CardDialog";

export default {
  name: "Card",
  data() {
    return {
      dialog: false,
    };
  },
  props: {
    cardContent: Object,
  },
  components: {
    // CardDialog,
  },
  methods: {
    // redirectToDetailPage(card) {
    //   //   window.location.href = `/news/${card.id}`;
    //   this.$router.push(`/news/${card.id}`);
    // },
  },
};
</script>

<style scoped>
.v-card {
  transition: opacity 0.4s ease-in-out;
  cursor: pointer;
}

.v-card:not(.on-hover) {
  opacity: 0.8;
}

.show-btns {
  color: rgba(255, 255, 255, 1) !important;
}
</style>
