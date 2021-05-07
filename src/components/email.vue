<template>
  <v-container
    data-aos="fade-in"
    data-aos-offset="1"
    data-aos-delay="50"
    data-aos-duration="600"
    data-aos-easing="ease-in-out"
    data-aos-once="true"
  >
    <div class="mt-5 d-flex justify-center">
      <v-col cols="12" md="4" sm="12">
        <form
          target="_blank"
          action="https://formsubmit.co/simas.raudonis@gmail.com"
          method="POST"
        >
          <div class="form-group">
            <div class="form-row">
              <v-text-field
                name="name"
                label="Name"
                filled
                background-color="#202022"
                color="#536DFE"
                dense
                outlined
                flat
                dark
                required
              ></v-text-field>
              <v-text-field
                type="email"
                name="email"
                label="Email Address"
                filled
                background-color="#202022"
                color="#536DFE"
                dense
                flat
                dark
                outlined
                required
              ></v-text-field>
            </div>
          </div>
          <div class="form-group">
            <validation-provider rules="required" v-slot="{ errors }">
              <v-textarea
                v-model="value"
                dark
                background-color="#202022"
                label="Message"
                name="message"
                filled
                required
                color="#536DFE"
                dense
                flat
              >
              </v-textarea>
              <span id="errorMsg" class="d-flex justify-left">{{
                errors[0]
              }}</span>
            </validation-provider>
          </div>
          <v-btn
            id="buttonMain"
            type="submit"
            class="hvr-glow activeState pa-2 px-16 mt-10"
            target="_blank"
            outlined
            ripple
            color="indigo accent-2"
            >Send Message</v-btn
          >
        </form>
      </v-col>
    </div>
  </v-container>
</template>

<script>
import { ValidationProvider, extend } from "vee-validate";
import { required } from "vee-validate/dist/rules";
export default {
  name: "App",
  components: {
    ValidationProvider,
  },
  data: () => ({
    value: ""
  }),
};
</script>

<style scoped>
textarea {
  padding: 4px 20px;
}
form {
  /*   border: #202022 solid 2px; */
  padding: 10px 10px 30px 10px;
  height: auto;
  border: #202022 solid 3px;
}
textarea:focus,
input:focus {
  outline: none;
}
#errorMsg {
  color: #d32f2f;
  font-size: 13px;
}
.activeState:active {
  transform: translateY(2px);
}
.theme--light.v-text-field--outline:not(.v-input--is-focused):not(.v-input--has-state)
  > .v-input__control
  > .v-input__slot:hover {
  border-width: 1px;
  border-style: solid;
  border-color: #6fbd44;
}
</style>
