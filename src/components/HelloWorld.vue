<template>
  <v-container id="welcomeMsg">
    <v-img id="bigSimas" src="../assets/simasBig2.png" position="right"  aspect-ratio="1.6" contain   gradient="to top right, rgba(0,0,0,.15), rgba(0,0,0,.7)" alt="">
    <v-img class="mt-2" src="../assets/logo_simas.png" position="left" aspect-ratio="1.4" height="70" contain alt=""></v-img>
    <div class="offset-md-1">
       <v-col
        cols="10"
        md="6"
       xs="10"
      >
    <div id="textbox">
    <h2>Hi there,</h2>
    <h1>My name is Simas</h1>
    <h2>I am a Front-End Developer & Graphic Designer. Currently based in Esbjerg, Denmark.</h2>
    </div>
    </v-col>
  <v-btn id="buttonMain" class="pa-2 px-10 mt-7 ml-3" to="Send it to email form" target="_blank" outlined ripple color="indigo accent-2">Let's chat</v-btn>
    <v-col
    cols="11"
    md="8"
    sm="11"
    >
    <p id="skillz">Web Design  /  Interface Design  /  UX  /  Front-End Dev  /  SEO</p>
    </v-col>
      </div>
      </v-img>
        <v-navigation-drawer class="px-1" id="socials" color="transparent" hide-overlay
        absolute right width="70" height="">
  <a href="https://www.instagram.com/ep1phany_0" target="_blank" ><img class="mb-2 pa-1" src="../assets/nav/instagram.svg" height="40" alt=""></a>
  <a href="https://www.linkedin.com/in/simas-raudonis" target="_blank" ><img class="mb-2 pa-1" src="../assets/nav/linkedin.svg" height="40" alt=""></a>
  <a href="https://github.com/tutaru99" target="_blank"><img class="mb-2 pa-1" src="../assets/nav/github.svg" height="40" alt=""></a>
  <a href="https://www.behance.net/simasraudonis" target="_blank"><img class="mb-2 pa-1" src="../assets/nav/behance.svg" height="40" alt=""></a>
  <a href="https://drive.google.com/file/d/1osWzrYjp0bHCTeXaEaLzeF5iAOoGkWbJ/view" target="_blank"><img class="mt-15 pa-1" src="../assets/nav/cv.svg" height="40" alt=""></a>
        </v-navigation-drawer>

  </v-container>
</template>

<script>
 export default {
    data () {
      return {
      }
    },
  }
</script>

<style>
  #welcomeMsg h1, h2{
    color: #FFFFFF;
    letter-spacing: 1px;
    line-height: 32px;
  }
   #welcomeMsg h1{
     font-size: 25px;
     font-weight: 400;
   }
   #welcomeMsg h2{
     font-size: 18px;
      font-weight: 300;
   }
  .mainButton{
    border: solid 1px #ffffff;
    color: #ffffff;
  }
  .mainButton a {
   text-decoration: none;
   color: #fff !important;
   letter-spacing: 2px;
  }
  #skillz{
    color: #ffffff;
    opacity: 0.3;
    margin-top: 140px;
    font-size: 15px;
    letter-spacing: 2px;
  }
  #textbox{
    margin-top: 220px;
  }
  #test v-img{
    opacity: 0.5;
  }
#socials{
    margin-top: 240px;
  }
#buttonMain {
  font-weight: 500;
}
#socials a:hover{
  opacity: 0.7;
}
</style>

