<template>
  <v-container id="welcomeMsg">
    <v-img
      data-aos="fade-in"
      data-aos-offset="1"
      data-aos-delay="50"
      data-aos-duration="1600"
      data-aos-easing="ease-in-out"
      data-aos-once="true"
      id="bigSimas"
      src="../assets/simasBig2.jpg"
      position="right"
      aspect-ratio="1.6"
      contain
      gradient="to top right, rgba(0,0,0,.15), rgba(0,0,0,.7)"
      alt="Simas Raudonis"
    >
      <v-img
        class="mt-2"
        src="../assets/logo_simas.png"
        position="left"
        aspect-ratio="1.4"
        height="70"
        contain
        alt="Simas Raudonis"
      ></v-img>
      <div
        class="offset-md-1"
        data-aos="fade-in"
        data-aos-offset="1"
        data-aos-delay="50"
        data-aos-duration="1600"
        data-aos-easing="ease-in-out"
        data-aos-once="true"
      >
        <v-col cols="10" md="6" xs="10">
          <div id="textbox">
            <div>
              <h2 id="typeWriter">
                Hi there, Welcome!
                <div id="border"></div>
              </h2>
            </div>
            <h1>My name is Simas.</h1>
            <h2>
              I am a <span id="highligh"> Web Developer</span> &
              <span id="highligh">Graphic Designer</span> <br />
              Currently based in Esbjerg, Denmark
            </h2>
          </div>
        </v-col>
        <v-btn
          id="buttonMain"
          class="hvr-glow pa-2 px-10 mt-7 ml-3"
          target="_blank"
          outlined
          ripple
          color="indigo accent-2"
          v-scroll-to="{ el: '#getInTouch', duration: 1800 }"
          >Let's chat</v-btn
        >
        <v-col cols="11" md="8" sm="11">
          <p id="skillz">
            Web Development | Interface Design | UX | Web Design | SEO
          </p>
        </v-col>
      </div>
    </v-img>
    <v-navigation-drawer
      class="px-1"
      id="socials"
      color="transparent"
      hide-overlay
      absolute
      right
      width="130"
      height="10%"
    >
      <div class="wrapper mt-4">
        <ul>
          <a
            data-aos="fade-up"
            data-aos-offset="1"
            data-aos-delay="1400"
            data-aos-duration="1600"
            data-aos-easing="ease-in-out"
            data-aos-once="true"
            href="https://www.instagram.com/ep1phany_0"
            target="_blank"
          >
            <li class="instagram">
              <i class="fa fa-instagram fa-2x" aria-hidden="true"></i></li
          ></a>
          <a
            data-aos="fade-up"
            data-aos-offset="1"
            data-aos-delay="1600"
            data-aos-duration="1600"
            data-aos-easing="ease-in-out"
            data-aos-once="true"
            href="https://www.linkedin.com/in/simas-raudonis"
            target="_blank"
          >
            <li class="linkedin">
              <i class="fa fa-linkedin fa-2x" aria-hidden="true"></i></li
          ></a>
          <a
            data-aos="fade-up"
            data-aos-offset="1"
            data-aos-delay="1800"
            data-aos-duration="1600"
            data-aos-easing="ease-in-out"
            data-aos-once="true"
            href="https://www.behance.net/simasraudonis"
            target="_blank"
            ><li class="behance">
              <i class="fa fa-behance fa-2x" aria-hidden="true"></i></li
          ></a>
          <a
            data-aos="fade-up"
            data-aos-offset="1"
            data-aos-delay="2000"
            data-aos-duration="1600"
            data-aos-easing="ease-in-out"
            data-aos-once="true"
            href="https://github.com/tutaru99"
            target="_blank"
            ><li class="github">
              <i class="fa fa-github fa-2x" aria-hidden="true"></i></li
          ></a>
          <a
            data-aos="fade-up"
            data-aos-offset="1"
            data-aos-delay="2200"
            data-aos-duration="1600"
            data-aos-easing="ease-in-out"
            data-aos-once="true"
            href="https://codepen.io/tutaru99"
            target="_blank"
            ><li class="codepen">
              <i class="fa fa-codepen fa-2x" aria-hidden="true"></i></li
          ></a>
          <v-tooltip
            left
            nudge-left="60"
            nudge-bottom="310"
            open-delay="800"
            color="#536DFE"
          >
            <template v-slot:activator="{ on, attrs }">
              <a
                v-bind="attrs"
                v-on="on"
                data-aos="fade-up"
                data-aos-offset="1"
                data-aos-delay="2400"
                data-aos-duration="1600"
                data-aos-easing="ease-in-out"
                data-aos-once="true"
                href="https://drive.google.com/file/d/1v29wnpy1XLId_RjYFj73cV6W9b9wdQab/view"
                target="_blank"
              >
                <li class="cv">
                  <i class="fa fa-id-card-o fa-2x" aria-hidden="true"></i></li
              ></a>
            </template>
            <span>Curriculum Vitae</span>
          </v-tooltip>
        </ul>
      </div>
    </v-navigation-drawer>
  </v-container>
</template>

<script>

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
  border: 0px solid #536dfe;
  box-shadow: 0 0 15px #536dfe;
  transition: all 0.5s ease;
}

.wrapper ul li:hover .fa-instagram {
  color: #536dfe;
  text-shadow: 0 0 15px #536dfe;
  transition: all 0.5s ease;
}
/* linkedin */
.wrapper ul li:hover.linkedin {
  border: 0px solid #536dfe;
  box-shadow: 0 0 15px #536dfe;
  transition: all 0.5s ease;
}

.wrapper ul li:hover .fa-linkedin {
  color: #536dfe;
  text-shadow: 0 0 15px #536dfe;
  transition: all 0.5s ease;
}
/*github*/
.wrapper ul li:hover.github {
  border: 0px solid #536dfe;
  box-shadow: 0 0 15px #536dfe;
  transition: all 0.5s ease;
}

.wrapper ul li:hover .fa-github {
  color: #536dfe;
  text-shadow: 0 0 15px #536dfe;
  transition: all 0.5s ease;
}
/*codepen*/
.wrapper ul li:hover.codepen {
  border: 0px solid #536dfe;
  box-shadow: 0 0 15px #536dfe;
  transition: all 0.5s ease;
}

.wrapper ul li:hover .fa-codepen {
  color: #536dfe;
  text-shadow: 0 0 15px #536dfe;
  transition: all 0.5s ease;
}

/* behance */
.wrapper ul li:hover.behance {
  border: 0px solid #536dfe;
  box-shadow: 0 0 15px #536dfe;
  transition: all 0.5s ease;
}

.wrapper ul li:hover .fa-behance {
  color: #536dfe;
  text-shadow: 0 0 15px #536dfe;
  transition: all 0.5s ease;
}

/*cv*/
.wrapper ul li:hover.cv {
  border: 0px solid #536dfe;
  box-shadow: 0 0 15px #536dfe;
  transition: all 0.5s ease;
}
.wrapper ul li:hover .fa-id-card-o {
  color: #536dfe;
  text-shadow: 0 0 15px #536dfe;
  transition: all 0.5s ease;
}

#welcomeMsg h1,
h2 {
  color: #ffffff;
  letter-spacing: 2px;
  line-height: 32px;
  font-family: "Lora", serif;
}
#welcomeMsg h1 {
  font-size: 25px;
  font-weight: 400;
  cursor: default;
  line-height: 2;
}
#welcomeMsg h2 {
  font-size: 18px;
  font-weight: 300;
  cursor: default;
}
.mainButton {
  border: solid 1px #ffffff;
  color: #ffffff;
}
.mainButton a {
  text-decoration: none;
  color: #fff !important;
  letter-spacing: 2px;
}
#skillz {
  color: #ffffff;
  opacity: 0.3;
  margin-top: 140px;
  font-size: 15px;
  letter-spacing: 2px;
  cursor: default;
}
#textbox {
  margin-top: 220px;
}
#socials {
  margin-top: 28vh;
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
  border-bottom: solid 3px #536dfe;
  position: absolute;
  right: -7px;
  width: 20px;
}
/* Animation */
#typeWriter {
  animation: animated-text 2s steps(25, end) 4s 1 normal both;
}
#border {
  animation: animated-cursor 1050ms steps(25, end) infinite;
}
@keyframes animated-text {
  from {
    width: 0;
  }
  to {
    width: 209px;
  }
}
@keyframes animated-cursor {
  from {
    border-bottom-color: #536dfe;
  }
  to {
    border-bottom-color: transparent;
  }
}
#highligh {
  box-shadow: inset 0 -7px 0 #536dfe69;
}
@media only screen and (max-width: 1024px) {
  #socials {
    display: none;
  }
}
</style>
