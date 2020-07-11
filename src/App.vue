<template>
  <v-app id="mainContainer" >
    <div>
      <HelloWorld/>
      <about/>
      <skills/>
      <acomplishments/>
      <cases/>
      <contact/>
</div>
  </v-app>
</template>

<script>
import HelloWorld from './components/HelloWorld';
import about from './components/about';
import skills from './components/skills';
import acomplishments from './components/acomplishments';
import cases from './components/cases';
import contact from './components/contact';
import email from './components/email';

export default {
  name: 'App',

  components: {
    HelloWorld,
    about,
    skills,
    acomplishments,
    cases,
    contact,
    email,
  },

  data: () => ({
    //
  }),
};
</script>

<style>
*{
  padding: 0;
  margin: 0;
}

#mainContainer{
background-color: #000004;
}

</style>
