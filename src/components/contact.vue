<template>
<v-container>
 <v-col
        cols="12"
        md="11"
        sm="11"
      >
  <v-divider class="mt-15 offset-md-1" color="#ffffff"></v-divider>
</v-col>
<div class="d-flex text-center flex-column d-sm-flex flex-sm-row offset-md-1 mt-16">
 <v-col
        cols="12"
        md="11"
        sm="12"
      >
      <h1>GET IN TOUCH</h1>
<h3 class="mt-4" id="primaryText">
Let’s talk about your projects or how I can help you <br> or if you just want to chat about
 design and <br> technology - shoot me a message at <br> <b><a href="mailto:simas.raudonis@gmail.com" target="_blank">simas.raudonis@gmail.com</a></b>, <b> <a href="https://www.linkedin.com/in/simas-raudonis" target="_blank">LinkedIn</a></b> or <br><b> <a href="https://www.instagram.com/ep1phany_0" target="_blank">Instagram</a></b>.
</h3>
<v-btn id="buttonMain" class="pa-2 px-16 mt-15" outlined ripple color="indigo darken-3" v-show="!showEmailComponent" @click="toggleEmailComponent" v-on:click="scrollToElement({behavior: 'smooth'})">Open Form</v-btn>
<v-btn id="buttonMain" class="pa-2 px-16 mt-15" outlined ripple color="indigo darken-3" v-show="showEmailComponent" @click="toggleEmailComponent">Close Form</v-btn>
        <email class=""
                v-if="showEmailComponent"
        />
</v-col>
</div>
 <v-col cols="12" md="12" sm="11">

<p class="scroll-to text-center mt-15">© {{new Date().getFullYear()}} <span>Simas Raudonis</span>. All rights reserved.</p>
</v-col>
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
p{
color: #fff;
font-size: 13px;
}
h3{
    color: #fff;
    font-weight: 300;
    font-size: 17;
    letter-spacing: 2px;
}
span{

    border-bottom: #fff solid 1px;
    padding-bottom: 3px;
}
h1{
    font-size: 50px;
    color: #fff;
    letter-spacing: 5px;
}
a{
    text-decoration: none;
    color: #fff !important;
}
a:hover{
    opacity: 0.8;
    border-bottom: #fff solid 1px;
    padding-bottom: 2px;
}
p{
    cursor: default;
}
</style>