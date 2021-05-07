<template>
  <v-container
    justify-center
    data-aos="fade-up"
    data-aos-offset="50"
    data-aos-delay="1"
    data-aos-duration="600"
    data-aos-easing="ease-in-out"
    data-aos-once="true"
  >
    <project :project="detailProject" v-show="detailProject" />
    <div v-show="!detailProject">
      <v-col cols="12" md="11" sm="11">
        <h1 class="offset-1 mt-9" id="title">Latest Cases</h1>
      </v-col>
      <v-row class="d-flex justify-center">
        <v-col cols="10" md="10" sm="10">
          <v-card
            id="cardderino"
            class="hvr-glow mt-12 activeState mr-5"
            width="220"
            height="370"
            color="transparent"
            dark
            hover
            rounded
            :ripple="{ class: 'indigo--text' }"
            outlined
            v-scroll-to="'#feelsGoodMan'"
            v-for="project in computedObj"
            :key="project.id"
            @click="detailProject = project"
          >
            <!--     <v-img  position="center"
            height="auto"
            width="220"
      src="../assets/nav/folder2.svg"
    > -->
            <li class="case">
              <i class="fa fa-folder-open" aria-hidden="true"></i>
            </li>

            <!--  </v-img> -->
            <v-card-text id="projectTitle" class="mt-3">
              <h2>{{ project.title }}</h2>
            </v-card-text>
          </v-card>
        </v-col>
      </v-row>
      <v-card-actions> </v-card-actions>
    </div>

    <v-col cols="12" md="12">
      <div id="projectsBtn" class="d-flex justify-center">
        <v-btn
          id="buttonMain"
          class="hvr-glow pa-2 px-15 mt-7"
          v-scroll-to="'#title'"
          @click="toggleProjects"
          v-show="!detailProject"
          outlined
          ripple
          color="indigo accent-2"
          >{{ limit == 4 ? "More" : "Less" }} Projects</v-btn
        >
      </div>
      <div class="d-flex flex-row-reverse col-md-11">
        <v-btn
          id="buttonMain"
          class="hvr-glow activeState pa-2 px-15 mt-7"
          v-scroll-to="'#feelsGoodMan'"
          @click="detailProject = project"
          v-show="detailProject"
          outlined
          ripple
          color="indigo accent-2"
          >Back</v-btn
        >
      </div>
    </v-col>
  </v-container>
</template>

<script>
import project from "../components/project";

export default {
  components: {
    project,
  },
  data() {
    return {
      detailProject: "",
      project: "",
      isNight: true,
      imageLink: "",
      projects: [
        {
          title: "Website: Esports Esbjerg",
          date: "May 2019",
          imageLink: require("@/assets/esports1.jpg"),
          imageLink2: require("@/assets/esports2.jpg"),
          description:
            "A project made for e-Sports Esbjerg School. The school requested a total rebrand, a brand new website with a lot of features and the ability to control data & various elements on the website through WordPress CMS. The website itself is coded using VueJS together with Vuetify framework. In this particular project - CMS serves as a back-end tool for editing and adding new content on the website via implemented blog feature.  ",
          behanceLink:
            "https://www.behance.net/gallery/100897607/Esports-Esbjerg-Full-Makeover",
          githubLink: "https://github.com/tutaru99/esports",
        },
        {
          title: "Website: Friskole",
          date: "Oct 2019",
          imageLink: require("@/assets/friskole1.jpg"),
          imageLink2: require("@/assets/friskole2.jpg"),
          description:
            "A re-designed website for Esbjerg Friskole school located in Esbjerg. The website was created in plain HTML, CSS and Bootstrap. Later on it was converted into WordPress theme template. Most of the elements can be eddited, changed and added through WordPress's Admin Panel. The process of updating website was simplified by users request because they were not tech savvy.",
          behanceLink:
            "https://www.behance.net/gallery/100894529/Friskole-Esbjerg-school-website",
          githubLink: "https://github.com/tutaru99/friSkole",
        },
        {
          title: "Website: Enviroom",
          date: "Dec 2019",
          imageLink: require("@/assets/enviroom1.jpg"),
          imageLink2: require("@/assets/enviroom2.jpg"),
          description:
            "This project was created to connect travellers with niche hotels in nature. The project was built using VueJS and later converted to WordPress as a fully usable template. The website has unusual way of showing trip cards, as well as a method of scrolling them. Most of the elements can be edited and/or added through WP's Admin Panel. ",
          behanceLink:
            "https://www.behance.net/gallery/100895867/Enviroom-Unique-travel-hotel-website",
          githubLink: "https://github.com/tutaru99/Enviroom-2.0",
        },
        {
          title: "Poster Competition",
          date: "Dec 2019",
          imageLink: require("@/assets/poster1.jpg"),
          imageLink2: require("@/assets/poster2.jpg"),
          description:
            "Competition to design posters and a campaigns for EASV study courses was held. The main point of the competition was to interest young people - new potential students in the study programs that EASV academy has to offer. The idea was to design a poster that makes people think and get instantly interested as to what they are seeing in the posters. It was decided that it's a good idea to think of studies as a source of nutrients because studies and information are essential just like food. In addition for the posters, we have created 2 short animated commercials for each poster and a brochure that goes with it. This project won the competition.",
          behanceLink:
            "https://www.behance.net/gallery/100896761/EASV-Poster-Competition",
          githubLink: "",
        },
        {
          title: "Offshore Wind Energy PBA - Website Design",
          date: "Nov 2019",
          imageLink: require("@/assets/pba1.jpg"),
          imageLink2: require("@/assets/pba2.jpg"),
          description:
            "A Competition was held by Offshore Wind Energy. They wanted a website design a for their PBA course. The website needed to contain a lot of information regarding courses, what is being offered, benefits and etc.. There were around 50 people participating in the project. This concept was chosen as the winner by the company.",
          behanceLink:
            "https://www.behance.net/gallery/100945985/Offshore-Wind-Energy-PBA-Website-Design",
          githubLink: "",
        },
      ],
      limit: 4,
    };
  },
  computed: {
    computedObj() {
      return this.limit ? this.projects.slice(0, this.limit) : this.projects;
    },
  },
  methods: {
    toggleProjects() {
      if (this.limit == null) {
        this.limit = 4;
      } else {
        this.limit = null;
      }
    },
  },
};
</script>

<style scoped>
#title {
  letter-spacing: 2px;
  color: #fff;
  font-weight: 400;
}
h2 {
  font-weight: 400;
  letter-spacing: 2px;
  font-size: 19px;
  font-family: "PT Sans", sans-serif;
}
#cardderino {
  border-color: #fff !important;
  transition: transform 0.2s ease 0s;
}
#cardderino:hover {
  transform: translateY(-3px);
}

.headline {
  color: #fff;
  font-size: 40px !important;
  font-weight: 500 !important;
  border-bottom: #fff solid 1px !important;
}
.caseBio,
p {
  color: #fff;
  font-size: 17px;
  letter-spacing: 2px;
  font-weight: 300;
}
.activeState:active {
  transform: translateY(2px);
}
i {
  font-size: 180px;
  margin-left: 15px;
}
/* behance */
#cardderino:hover .fa-folder-open {
  color: #536dfe;
  text-shadow: 0 0 8px #536dfe;
  transition: all 0.6s ease;
}
li {
  list-style-type: none;
}
</style>
