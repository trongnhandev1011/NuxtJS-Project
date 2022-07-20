<template>
  <validation-observer ref="observer">
    <form @submit.prevent="submit">
      <v-row justify="center mt-5">
        <v-col cols="5">
          <validation-provider
            v-slot="{ errors }"
            name="first name"
            rules="required"
          >
            <v-text-field
              v-model="firstName"
              :counter="10"
              :error-messages="errors"
              label="First Name"
              required
            ></v-text-field>
          </validation-provider>
        </v-col>
        <v-col cols="5">
          <validation-provider
            v-slot="{ errors }"
            name="last name"
            rules="required|max:10"
          >
            <v-text-field
              v-model="lastName"
              :counter="10"
              :error-messages="errors"
              label="Last Name"
              required
            ></v-text-field>
          </validation-provider>
        </v-col>
      </v-row>
      <v-row justify="center">
        <v-col cols="5">
          <validation-provider
            v-slot="{ errors }"
            name="phoneNumber"
            :rules="{
              required: true,
              regex: '^(09)\\d{8}$',
            }"
          >
            <v-text-field
              v-model="phoneNumber"
              :error-messages="errors"
              label="Phone Number"
              required
            ></v-text-field>
          </validation-provider>
        </v-col>
        <v-col cols="5">
          <validation-provider
            v-slot="{ errors }"
            name="email"
            rules="required|email"
          >
            <v-text-field
              v-model="email"
              :error-messages="errors"
              label="E-mail"
              required
            ></v-text-field>
          </validation-provider>
        </v-col>
      </v-row>
      <v-row justify="center mt-15">
        <v-btn class="mr-4 submit-btn" type="submit" @click="submit">
          submit
        </v-btn>
        <v-btn @click="clear"> clear </v-btn>
      </v-row>
    </form>
  </validation-observer>
</template>

<script>
import { required, digits, email, max, regex } from "vee-validate/dist/rules";
import {
  extend,
  ValidationObserver,
  ValidationProvider,
  setInteractionMode,
} from "vee-validate";

setInteractionMode("eager");

extend("digits", {
  ...digits,
  message: "{_field_} needs to be {length} digits. ({_value_})",
});

extend("required", {
  ...required,
  message: "{_field_} can not be empty",
});

extend("max", {
  ...max,
  message: "{_field_} may not be greater than {length} characters",
});

extend("regex", {
  ...regex,
  message: "{_field_} {_value_} does not match {regex}",
});

extend("email", {
  ...email,
  message: "Email must be valid",
});
export default {
  name: "ContactForm",
  components: {
    ValidationProvider,
    ValidationObserver,
  },
  data: () => ({
    firstName: "",
    lastName: "",
    phoneNumber: "",
    email: "",
  }),

  methods: {
    submit() {
      this.$refs.observer.validate().then((success) => {
        if (!success) {
          return;
        }
        alert("Form has been submitted!");
      });
    },
    clear() {
      this.firstName = "";
      this.lastName = "";
      this.phoneNumber = "";
      this.email = "";
      this.$refs.observer.reset();
    },
  },
};
</script>

<style lang="scss">
.submit-btn {
  background-color: #ed247f !important;
  span {
    color: white;
  }
}
</style>
