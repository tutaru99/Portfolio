<template>
  <v-col
    data-aos="fade-in"
    data-aos-offset="1"
    data-aos-delay="50"
    data-aos-duration="600"
    data-aos-easing="ease-in-out"
    data-aos-once="false"
    cols="11"
    md="11"
    sm="12"
  >
    <div id="container" class="offset-md-1">
      <div class="d-flex justify-center">
        <expandable-image
          close-on-background-click
          class="hvr-glow mr-2"
          :src="project.imageLink"
        />
        <expandable-image
          close-on-background-click
          class="hvr-glow ml-2"
          :src="project.imageLink2"
        />
      </div>
      <h1 class="mt-15">
        <span>{{ project.title }}</span>
      </h1>
      <p id="date">{{ project.date }}</p>
      <p class="mt-9">{{ project.description }}</p>
    </div>
    <div class="mt-7 d-flex offset-md-1">
      <a class="hvr-glow mr-9"  v-show="project.behanceLink" v-bind:href="project.behanceLink" target="_blank"
        >Behance</a
      >
      <a
        class="hvr-glow"
        v-show="project.githubLink"
        v-bind:href="project.githubLink"
        target="_blank"
        >Github</a
      >
    </div>
  </v-col>
</template>

<script>
import VueExpandableImage from "vue-expandable-image";
import cases from "../components/cases";

export default {
  props: ["project"],
  components: {
    cases,
  },
  data() {
    return {};
  },
};
</script>

<style scoped>
* {
  color: white;
}
p {
  font-size: 17px;
  letter-spacing: 1px;
}
h1 {
  font-weight: 500;
  cursor: default;
  font-size: 37px;
}

a {
  text-decoration: none;
  color: #536dfe !important;
  letter-spacing: 1px;
  border: #536dfe solid 1px;
  padding: 1px 10px;
  line-height: 2;
  opacity: 0.7;
}
a:hover {
  opacity: 1;
  border-bottom: #536dfe solid 1px;
}
span {
  box-shadow: inset 0 -15px 0 #536dfe69;
}
#date {
  font-size: 15px;
}
</style>
