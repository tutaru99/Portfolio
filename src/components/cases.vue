<template>
<v-container>

<project :project="detailProject" v-show="detailProject" />
<div v-show="!detailProject">
<h1 class="offset-1" id="title" >Latest Cases</h1>
  <v-row class="offset-md-1">
 <v-card

    id="cardderino"
    class="mt-12 ml-4"
    max-width="220"
    height="370"
    color="transparent"
    dark
    hover
    rounded
    outlined
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
    <v-card-text class="mt-3">
      <h2>{{ project.title }}</h2>
    </v-card-text>
  </v-card>
  </v-row>
    <v-card-actions>
    </v-card-actions>
    </div>
<v-col cols="10"
        md="11">
  <v-btn id="buttonMain" class="pa-2 px-10 mt-7 offset-md-10" @click="detailProject = project" v-show="detailProject" outlined ripple color="indigo darken-3">Close</v-btn>
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
{title: "Esports Esbjerg", imageLink: require('@/assets/esports1.png'), imageLink2: require( '@/assets/esports2.png'), description: "A project collaboration with E-Sports Esbjerg school. ", behanceLink: 'links to behance', githubLink: 'https://github.com/tutaru99/esports'},
{title: "Friskole", imageLink: 'linkToImage2', description: "a bunch of text describing the project2", behanceLink: 'links to behance for the project2', githubLink: 'links to github for the project2'},
{title: "Enviroom", imageLink: 'linkToImage3', description: "a bunch of text describing the project3", behanceLink: 'links to behance for the project3', githubLink: 'links to github for the project3'},
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
font-size: 17px;
}
#cardderino {
    border-color: #fff !important;
}
#cardderino:hover {
opacity: 0.7;
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