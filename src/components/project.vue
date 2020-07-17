<template>
 <v-col
        cols="11"
        md="11"
        sm="12"
      >

<div id="container" class="offset-md-1">
  <div class="d-flex justify-center">
<v-img class="mr-1" max-width="500" :src="project.imageLink"></v-img>
<v-img class="ml-1" max-width="500" :src="project.imageLink2"></v-img>
</div>
<h1>{{project.title}}</h1><br>
<p>{{project.description}}</p><br>

</div>
<div class="d-flex offset-md-1">
<a class="mr-2" v-bind:href="project.behanceLink" target="_blank">Behance</a><br>

<a v-bind:href="project.githubLink" target="_blank">Github</a><br>
</div>
</v-col>
</template>

<script>
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
  letter-spacing: 2px;
}
h1{
  font-weight: 400;
  cursor: default;
}
a{
  text-decoration: none;
  color: #fff !important;
  letter-spacing: 1px;
}
a:hover{
  opacity: 0.7;
}
</style>