<template>
  <div class="text-center language-menu">
    <v-menu offset-y>
      <template v-slot:activator="{ on, attrs }">
        <v-btn color="primary" dark v-bind="attrs" v-on="on"
          ><v-icon aria-hidden="false"> mdi-web</v-icon>
        </v-btn>
      </template>
      <v-list>
        <v-list-item
          style="cursor: pointer"
          v-for="(language, index) in languages"
          :key="index"
          @click="changeLanguage(language)"
        >
          <v-list-item-title>{{ language.title }}</v-list-item-title>
        </v-list-item>
      </v-list>
    </v-menu>
  </div>
</template>

<script>
import { localize } from "vee-validate";
export default {
  name: "LanguageMenu",
  //   setup() {
  //     let languages = ref([
  //       { title: "English" },
  //       { title: "Japan" },
  //       { title: "Korean" },
  //     ]);

  //     const changeLanguage = (language) => {
  //       $vuetify.lang.current = language;
  //       localize(language);
  //     };

  //     return {
  //       languages,
  //       changeLanguage,
  //     };
  //   },
  data() {
    return {
      languages: [
        { title: "English" },
        { title: "Japan" },
        { title: "Korean" },
      ],
    };
  },
  methods: {
    changeLanguage(language) {
      this.$vuetify.lang.current = language;
      localize(language);
    },
  },
};
</script>

<style style="scss">
.language-menu {
  position: absolute;
  right: 40px;
}
</style>
