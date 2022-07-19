<template>
  <div>
    <div>
      <div>Contact Us</div>
      <div>Any question or remarks? Just write us a message!</div>
    </div>
    <v-row class="form-container">
      <v-col cols="3" class="form-image">
        <div>Contact Information</div>
        <div>Fill up the form and our staffs will support you within 24h</div>
      </v-col>
      <v-col cols="9" class="form">
        <contact-form />
      </v-col>
    </v-row>
  </div>
</template>

<script>
import ContactForm from "../../L3_Organism/L3_02_ContactForm/ContactForm.vue";

export default {
  name: "ContactPageTemplate",
  components: {
    ContactForm,
  },
};
</script>

<style lang="scss">
.form-container {
  margin-top: 30px;
  height: 400px;

  .theme--dark.v-text-field > .v-input__control > .v-input__slot:before {
    background-color: black !important;
  }

  .theme--dark.v-text-field > .v-input__control > .v-input__slot:after {
    background-color: black !important;
  }

  label {
    color: #b2b2b2 !important;
  }

  input {
    color: black !important;
  }

  span {
    width: 100%;
  }

  .form {
    background-color: white;
  }

  .form-image {
    background-image: url("../../../assets/images/form.png");
  }
}
</style>
