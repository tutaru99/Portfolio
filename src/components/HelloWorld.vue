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
      <div>
    <h2 id="typeWriter">Hi there,<div id="border"></div></h2>
      </div>
    <h1>My name is Simas.</h1>
    <h2>I am a Web Developer & Graphic Designer, Currently based in Esbjerg, Denmark.</h2>
    </div>
    </v-col>
  <v-btn id="buttonMain" class="hvr-glow pa-2 px-10 mt-7 ml-3" target="_blank" outlined ripple color="indigo accent-2" v-scroll-to="{ el:'#getInTouch', duration: 1800}" >Let's chat</v-btn>
    <v-col
    cols="11"
    md="8"
    sm="11"
    >
    <p id="skillz" >Web Design  |  Interface Design  |  UX  |  Front-End Dev  |  SEO</p>
    </v-col>
      </div>
      </v-img>
        <v-navigation-drawer class="px-1" id="socials" color="transparent" hide-overlay
        absolute right width="130" height="10%">

    <div class="wrapper mt-4">
      <ul>
            <a href="https://www.instagram.com/ep1phany_0" target="_blank">  <li class="instagram"><i class="fa fa-instagram fa-2x" aria-hidden="true"></i></li></a>
            <a href="https://www.linkedin.com/in/simas-raudonis" target="_blank" > <li class="linkedin"><i class="fa fa-linkedin fa-2x" aria-hidden="true"></i></li></a>
            <a href="https://github.com/tutaru99" target="_blank"><li class="github"><i class="fa fa-github fa-2x" aria-hidden="true"></i></li></a>
            <a href="https://www.behance.net/simasraudonis" target="_blank"><li class="behance"><i class="fa fa-behance fa-2x" aria-hidden="true"></i></li></a>
            <a href="https://drive.google.com/file/d/1osWzrYjp0bHCTeXaEaLzeF5iAOoGkWbJ/view" target="_blank"> <li class="cv"><i class="fa fa-id-card-o fa-2x" aria-hidden="true"></i></li></a>
      </ul>
    </div>
        </v-navigation-drawer>
  </v-container>
</template>

<script>
 export default {
    data () {
      }
  }

</script>

<style>
.wrapper ul {
  list-style: none;
}
.wrapper ul li {
  width: 50px;
  height: 50px;
  line-height: 57px;
  margin: 0 10px;
  text-align: center;
  cursor: pointer;
  border-radius: 50%;
  float: left;
  transition: all 0.5s ease;
  font-size: 13px;
}
.wrapper ul li .fa {
  color: #ebebeb;
  transition: all 0.5s ease;
}
/* instagram */
.wrapper ul li:hover.instagram {
  border: 0px solid #536DFE;
  box-shadow: 0 0 15px #536DFE;
  transition: all 0.5s ease;
}

.wrapper ul li:hover .fa-instagram {
  color: #536DFE;
  text-shadow: 0 0 15px #536DFE;
  transition: all 0.5s ease;
}
/* linkedin */
.wrapper ul li:hover.linkedin {
  border: 0px solid #536DFE;
  box-shadow: 0 0 15px #536DFE;
  transition: all 0.5s ease;
}

.wrapper ul li:hover .fa-linkedin {
  color: #536DFE;
  text-shadow: 0 0 15px #536DFE;
  transition: all 0.5s ease;
}
/*github*/
.wrapper ul li:hover.github {
  border: 0px solid #536DFE;
  box-shadow: 0 0 15px #536DFE;
  transition: all 0.5s ease;
}

.wrapper ul li:hover .fa-github {
  color: #536DFE;
  text-shadow: 0 0 15px #536DFE;
  transition: all 0.5s ease;
}

/* behance */
.wrapper ul li:hover.behance {
  border: 0px solid #536DFE;
  box-shadow: 0 0 15px #536DFE;
  transition: all 0.5s ease;
}

.wrapper ul li:hover .fa-behance {
  color: #536DFE;
  text-shadow: 0 0 15px #536DFE;
  transition: all 0.5s ease;
}

/*cv*/
.wrapper ul li:hover.cv {
  border: 0px solid #536DFE;
  box-shadow: 0 0 15px #536DFE;
  transition: all 0.5s ease;
}
.wrapper ul li:hover .fa-id-card-o {
  color: #536DFE;
  text-shadow: 0 0 15px #536DFE;
  transition: all 0.5s ease;
}


  #welcomeMsg h1, h2{
    color: #FFFFFF;
    letter-spacing: 2px;
    line-height: 32px;
    font-family: 'Lora', serif;
  }
   #welcomeMsg h1{
     font-size: 25px;
     font-weight: 400;
     cursor: default;
     line-height: 2;
   }
   #welcomeMsg h2{
     font-size: 18px;
      font-weight: 300;
      cursor: default;
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
    cursor: default;
  }
  #textbox{
    margin-top: 220px;
  }
#socials{
    margin-top: 240px;
  }
#buttonMain {
  font-weight: 500;
}

#typeWriter {
  height: 40px;
  white-space: nowrap;
  overflow: hidden;
  position: relative;
}
#border {
  border-bottom: solid 3px #536DFE;
  position: absolute;
  right: -7px;
  width: 20px;
}
/* Animation */
#typeWriter {
  animation: animated-text 2s steps(30,end) 1s 1 normal both
}
#border {
   animation: animated-cursor 850ms steps(30,end) infinite;
}
@keyframes animated-text{
  from{width: 0;}
  to{width: 104px;}
}
@keyframes animated-cursor{
  from{border-bottom-color: #536DFE;}
  to{border-bottom-color: transparent;}
}
</style>

