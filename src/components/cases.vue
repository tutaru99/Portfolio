<template>
<v-container>

<project :project="detailProject" v-show="detailProject" />
<div v-show="!detailProject">
<h1 class="offset-1" id="title" >Latest Cases</h1>
  <v-row class=" d-flex justify-center">
 <v-card

    id="cardderino"
    class="hvr-glow mt-12 mr-4"
    max-width="220"
    height="370"
    color="transparent"
    dark
    hover
    rounded
    :ripple="{ class: 'indigo--text' }"
    outlined
    v-scroll-to="'#feelsGoodMan'"
      v-for="project in projects"
          :key="project.id"
          @click="detailProject = project"
  >
    <v-img  position="center"
            height="auto"
            width="220"
      src="../assets/nav/folder2.svg"
    >
    </v-img>
    <v-card-text id="projectTitle" class="mt-3">
      <h2>{{ project.title }}</h2>
    </v-card-text>
  </v-card>
  </v-row>
    <v-card-actions>
    </v-card-actions>
    </div>
<v-col cols="10"
        md="11">
  <v-btn id="buttonMain" class="hvr-glow pa-2 px-15 mt-7 offset-md-10" v-scroll-to="'#feelsGoodMan'" @click="detailProject = project" v-show="detailProject" outlined ripple color="indigo accent-2">Back</v-btn>
</v-col>
</v-container>
</template>

<script>
import project from '../components/project';

  export default {
      components: {
      project
  },
 data() {

return {
detailProject: null,
isNight: true,
projects: [
{title: "Esports Esbjerg",
imageLink: require('@/assets/esports1.jpg'),
imageLink2: require( '@/assets/esports2.jpg'),
description: "A project made for ESports Esbjerg School. The school requested a total rebrand, a brand new website with a lot of features and the ability to control data & various elements on the website through WordPress CMS. The website itself is coded using VueJS together with Vuetify framework. In this particular project - CMS serves as a back-end tool for editing and adding content to the website.  ",
behanceLink: 'https://www.behance.net/gallery/100897607/Esports-Esbjerg-Full-Makeover',
githubLink: 'https://github.com/tutaru99/esports'},
{title: "Friskole",
imageLink: require('@/assets/friskole1.jpg'),
imageLink2: require( '@/assets/friskole2.jpg'),
description: "A re-designed website for Esbjerg Friskole school located in Esbjerg. The website was created in plain HTML, CSS and Bootstrap. Later on it was converted into WordPress theme template. Most of the elements can be eddited, changed and added through WordPress's Admin Panel. The process of updating website was simplified by users request because they were not tech savvy.",
behanceLink: 'https://www.behance.net/gallery/100894529/Friskole-Esbjerg-school-website',
githubLink: 'https://github.com/tutaru99/friSkole'},
{title: "Enviroom",
imageLink: require('@/assets/enviroom1.jpg'),
imageLink2: require( '@/assets/enviroom2.jpg'),
description: "This project was created to connect travellers with niche hotels in nature. The project was built using VueJS and later converted to WordPress as a fully usable template. The website has unusual way of showing trip cards, as well as a method of scrolling them. Most of the elements can be edited and/or added through WP's Admin Panel. ",
behanceLink: 'https://www.behance.net/gallery/100895867/Enviroom-Unique-travel-hotel-website',
githubLink: 'https://github.com/tutaru99/Enviroom-2.0'},
{title: "Poster Competition",
imageLink: require('@/assets/poster1.jpg'),
imageLink2: require( '@/assets/poster2.jpg'),
description: "Competition to design posters and a campaigns for EASV study courses was held. The main point of the competition was to interest young people - new potential students in the study programs that EASV academy has to offer. The idea was to design a poster that makes people think and get instantly interested as to what they are seeing in the posters. It was decided that it's a good idea to think of studies as a source of nutrients because studies and information are essential just like food. In addition for the posters, we have created 2 short animated commercials for each poster and a brochure that goes with it. This project won the competition.",
behanceLink: 'https://www.behance.net/gallery/100896761/EASV-Poster-Competition',
githubLink: ''},
       ],
    }
  },
  }
</script>

<style scoped>
#title{
     letter-spacing: 2px;
     color: #fff;
     font-weight: 400;
}
h2{
font-weight: 400;
letter-spacing: 2px;
font-size: 19px;
font-family: 'PT Sans', sans-serif;
}
#cardderino {
    border-color: #fff !important;
}

.headline{
    color: #fff;
    font-size: 40px !important;
    font-weight: 500 !important;
    border-bottom: #fff solid 1px !important;
}
.caseBio, p{
    color: #fff;
    font-size: 17px;
    letter-spacing: 2px;
    font-weight: 300;
}

</style>