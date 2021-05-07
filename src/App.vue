<template>
  <v-app id="mainContainer">
    <div>
      <HelloWorld />
      <about />
      <skills />
      <acomplishments />
      <cases />
      <contact />

      <p id="credits" class="scroll-to text-center mt-15">
        © {{ new Date().getFullYear() }}
        <span id="highlight">Simas <span id="mrRed">R</span>audonis</span>. All
        rights reserved.
      </p>
    </div>
  </v-app>
</template>

<script>
import HelloWorld from "@/components/HelloWorld";
import about from "@/components/about";
import skills from "@/components/skills";
import acomplishments from "@/components/acomplishments";
import cases from "@/components/cases";
import project from "@/components/project";
import contact from "@/components/contact";
import email from "@/components/email";

export default {
  name: "App",

  components: {
    HelloWorld,
    about,
    skills,
    acomplishments,
    cases,
    contact,
    email,
    project,
  },
};
</script>

<style>
* {
  padding: 0;
  margin: 0;
  font-family: "PT Sans", sans-serif;
}

#mainContainer {
  background-color: #000004;
}
#credits {
  color: #fff;
  font-size: 13px;
  cursor: default;
}
#highlight {
  box-shadow: inset 0 -1px 0 0 #536dfe;
  padding-bottom: 3px;
  -webkit-transition: 0.9s ease-in-out;
  transition: 0.4s ease-in-out;
}
#highlight:hover {
  box-shadow: inset 0 -22px 0 0 #536dfe;
  transition: all 600ms ease-in-out;
}
#buttonMain {
  opacity: 0.7;
  font-weight: 600;
  font-family: "PT Sans", sans-serif;
}
#buttonMain:hover {
  opacity: 1;
}
.hvr-glow {
  display: inline-block;
  vertical-align: middle;
  -webkit-transform: perspective(1px) translateZ(0);
  transform: perspective(1px) translateZ(0);
  box-shadow: 0 0 1px #536dfe !important;
  -webkit-transition-duration: 0.3s;
  transition-duration: 0.3s;
  -webkit-transition-property: box-shadow;
  transition-property: box-shadow;
}
.hvr-glow:hover,
.hvr-glow:focus,
.hvr-glow:active {
  box-shadow: 0 0 20px #536dfe !important;
}
</style>
