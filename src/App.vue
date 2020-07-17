<template>
  <v-app id="mainContainer" >
    <div>
      <HelloWorld/>
      <about/>
      <skills/>
      <acomplishments/>
      <cases/>
      <contact/>

<p id="credits" class="scroll-to text-center mt-15">© {{new Date().getFullYear()}} <span id="highlight">Simas Raudonis</span>. All rights reserved.</p>
</div>
  </v-app>
</template>

<script>
import HelloWorld from './components/HelloWorld';
import about from './components/about';
import skills from './components/skills';
import acomplishments from './components/acomplishments';
import cases from './components/cases';
import project from './components/project';
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
    project,

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
#credits{
color: #fff;
font-size: 13px;
}
#highlight{

    border-bottom: #fff solid 1px;
    padding-bottom: 3px;
}
</style>
