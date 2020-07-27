<template>
<v-container>
 <v-col
        cols="12"
        md="11"
        sm="11"
      >
  <v-divider class="mt-9 offset-md-1" color="#ffffff"></v-divider>
</v-col>
<div class="d-flex text-center flex-column d-sm-flex flex-sm-row mt-16">
 <v-col
        cols="12"
        md="12"
        sm="12"
      >
      <h1>GET IN TOUCH</h1>
<h3 class="mt-4" id="getInTouch">
Let’s talk about your projects or how I can help you <br> or if you just want to chat about
 design and <br> technology - shoot me a message at <br> <b><a href="mailto:simas.raudonis@gmail.com" target="_blank">simas.raudonis@gmail.com</a></b>, <b> <a href="https://www.linkedin.com/in/simas-raudonis" target="_blank">LinkedIn</a></b> or <br><b> <a id="getInTouch1" href="https://www.instagram.com/ep1phany_0" target="_blank">Instagram</a></b>.
</h3>
<v-btn id="buttonMain" class="hvr-glow activeState pa-2 px-16 mt-15" outlined ripple color="indigo accent-2" v-show="!showEmailComponent" v-scroll-to="'#getInTouch1'" @click="toggleEmailComponent" v-on:click="scrollToElement({behavior: 'smooth'})">Contact Me</v-btn>
<v-btn id="buttonMain" class="hvr-glow pa-2 px-16 mt-15" outlined ripple color="indigo accent-2" v-show="showEmailComponent" v-scroll-to="'#getInTouch'" @click="toggleEmailComponent">Close Form</v-btn>
        <email class=""
                v-if="showEmailComponent"
        />
</v-col>
</div>
</v-container>
</template>

<script>
import email from './email';

export default {
name: 'App',
  components: {
    email,
    },
    data() {
    return {
      showEmailComponent: false,
    };
  },
  methods: {
    toggleEmailComponent () {
      this.showEmailComponent = !this.showEmailComponent;

    },
     scrollToElement(options) {
      const el = this.$el.getElementsByClassName('scroll-to')[0];
      if (el) {
        el.scrollIntoView(options);
      }
  },
  }
}
</script>

<style scoped>
h3{
    color: #fff;
    font-weight: 300;
    font-size: 17;
    letter-spacing: 2px;
}
h1{
    font-size: 50px;
    color: #fff;
    letter-spacing: 6px;
    cursor:default;
    font-family: 'Lora', serif;
}
a{
    text-decoration: none;
    color: #fff !important;
    border-bottom: #536DFE solid 1px;
    padding-bottom: 2px;
    box-shadow: inset 0 -1px 0 #536DFE;
}
a:hover{
opacity: 0.9;
transition: all 600ms ease-in-out;
box-shadow: inset 0 -55px 0 0 #536DFE;

}

p{
    cursor: default;
}

.activeState:active{
  transform: translateY(2px);
}

</style>