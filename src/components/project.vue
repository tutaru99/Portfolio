<template>
 <v-col
        cols="11"
        md="11"
        sm="12"
      >

<div id="container" class="offset-md-1">
  <div class="d-flex justify-center">
    <expandable-image close-on-background-click class="mr-2" :src="project.imageLink" />
    <expandable-image close-on-background-click class="ml-2" :src="project.imageLink2" />
</div>
<h1>{{project.title}}</h1><br>
<p>{{project.description}}</p><br>

</div>
<div class="d-flex offset-md-1">
<a class="mr-9" v-bind:href="project.behanceLink" target="_blank">Behance</a>
<a v-show="project.githubLink" v-bind:href="project.githubLink" target="_blank">Github</a>
</div>
</v-col>
</template>

<script>
import VueExpandableImage from 'vue-expandable-image'
import cases from '../components/cases';

export default {
  props: ['project'],
      components: {
      cases
  },
}
</script>

<style scoped>
*{
color: white;
}
p{
  font-size: 17px;
  letter-spacing: 1px;
}
h1{
  font-weight: 400;
  cursor: default;
}
a{
  text-decoration: none;
  color: #536DFE !important;
  letter-spacing: 1px;
  
  line-height: 2;

}
a:hover{
  opacity: 0.7;
  border-bottom: #536DFE solid 1px;
}
</style>