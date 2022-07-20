<template>
  <div>
    <div class="mt-10">
      <div style="font-size: 3rem; display: flex; justify-content: center">
        Contact Us
      </div>
      <div
        style="
          font-size: 1.5rem;
          display: flex;
          justify-content: center;
          font-weight: 300;
        "
      >
        Any question or remarks? Just write us a message!
      </div>
    </div>
    <div style="display: flex; justify-content: center">
      <v-row class="form-container">
        <v-col cols="3" class="form-image">
          <div style="font-size: 1.5rem" class="mb-1 ml-2 mt-4">
            Contact Information
          </div>
          <div style="font-size: 0.8rem" class="ml-2">
            Fill up the form and our staffs will support you within 24h
          </div>
          <div class="mt-8 ml-2">
            <v-icon aria-hidden="false"> mdi-phone</v-icon>
            <span class="ml-2">0942734768</span>
          </div>
          <div class="mt-8 ml-2">
            <v-icon aria-hidden="false"> mdi-email </v-icon>
            <span class="ml-2">hello@salto.vn</span>
          </div>
          <div class="mt-8 ml-2">
            <v-icon aria-hidden="false"> mdi-map-marker </v-icon>
            <span class="ml-2">District 1, Ho Chi Minh</span>
          </div>
        </v-col>
        <v-col cols="9" class="form">
          <contact-form />
        </v-col>
      </v-row>
    </div>
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
  border-radius: 20px;
  font-size: 0.9rem;
  width: 70%;
  flex: none;

  .theme--dark.v-text-field > .v-input__control > .v-input__slot:before {
    background-color: black !important;
  }

  .theme--dark.v-text-field > .v-input__control > .v-input__slot:after {
    background-color: black !important;
  }

  .primary--text {
    color: #ed247f !important;
    caret-color: #ed247f !important;
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
    border-radius: 0px 20px 20px 0;
  }

  .form-image {
    background-image: url("../../../assets/images/form.png");
    border-radius: 20px 0px 0px 20px;
  }
}
</style>
