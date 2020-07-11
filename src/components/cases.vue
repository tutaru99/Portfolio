<template>
<v-container>
<p class="offset-1" id="primaryText">Latest Cases</p>
<div class="d-flex flex-column d-sm-flex flex-sm-row offset-md-1 mt-16">
 <v-col
        cols="12"
        md="3"
        sm="5"
      >
<v-row></v-row>
<div class="folder text-center">
<a href="" target="_blank"><img class="" src="../assets/nav/folder2.svg" height="" alt=""></a>
<p class="mt-15" id="primaryText">Name of the Project</p>
</div>
</v-col>
</div>

</v-container>
</template>

<script>
export default {

}
</script>

<style scoped>
p{
    color: white;
    font-size: 17px;
}

#primaryText{
    font-size: 20px;
}
.folder{
border: #fff solid 1px;
padding: 100px 30px;
}
</style>