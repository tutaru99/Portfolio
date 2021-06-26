<template>
  <v-container>
    <v-col cols="12" md="11" sm="12">
      <v-divider class="mt-15 offset-md-1" color="#ffffff"></v-divider>
    </v-col>
    <div
      class="d-flex flex-column d-sm-flex flex-sm-row offset-md-1 mt-16"
      data-aos="fade-up"
      data-aos-offset="50"
      data-aos-delay="1"
      data-aos-duration="600"
      data-aos-easing="ease-in-out"
      data-aos-once="true"
    >
      <v-col cols="12" md="4" sm="5">
        <p id="primaryText">
          I'm Simas. Currently broadening my horizons and getting Web
          Development degree in Denmark. <br /><br />
          I love creating things that are useful and make people smile. Web
          Development is not only my field of study and work - it's my passion.
        </p>
        <v-btn
          id="buttonMain"
          class="hvr-glow pa-2 px-10 mt-7"
          href="https://drive.google.com/file/d/1v29wnpy1XLId_RjYFj73cV6W9b9wdQab/view"
          target="_blank"
          outlined
          ripple
          color="indigo accent-2"
          >Résumé</v-btn
        >
      </v-col>
      <v-col class="offset-md-1" cols="12" md="6" sm="5">
        <p>
          My professional area of focus lies in web development, designing web
          and mobile products, SEO & user research. I enjoy designing and
          developing as much as talking with users to get feedback and improving
          the UX and functionality. <br />
          <br />
          Amongst many other things, I enjoy keeping up with all technological
          innovations, latest tech. trends, reading science, tech. and other
          types of articles and megazines. In my free time I also love messing
          with Unity3d and creating VR and AR applications.
        </p>
        <v-btn
          id="buttonMain"
          class="hvr-glow pa-2 px-10 mt-7"
          href="https://www.linkedin.com/in/simas-raudonis/"
          target="_blank"
          outlined
          ripple
          color="indigo accent-2"
          >LinkedIn</v-btn
        >
      </v-col>
    </div>
    <v-col cols="12" md="11" sm="12">
      <v-divider class="mt-16 offset-md-1" color="#ffffff"></v-divider>
    </v-col>
  </v-container>
</template>

<script>
export default {};
</script>

<style scoped>
p {
  color: white;
  font-size: 17px;
  letter-spacing: 1px;
}

#primaryText {
  font-size: 20px;
}
</style>
