<template>
<v-container>
<div class="flex-column d-sm-flex flex-sm-row offset-md-1 mt-16">
 <v-col
        cols="12"
        md="11"
        sm="12"
      >
<h1 class="pb-15">Education & Experience</h1>
<div class="pb-5">
<div class="d-flex">
<a href="https://www.easv.dk/en" target="_blank"><h2 id="links">EASV</h2></a> <h2 class="ml-auto">Bachelor: Web Development</h2>
</div>
<span>08.2020 - Present / Esbjerg, Denmark</span>
</div>
<div class="pb-5">
<div class="d-flex">
<a href="https://www.nobrainer.dk" target="_blank"><h2 id="links">nobrainer</h2></a> <h2 class="ml-auto">Junior Web Developer</h2>
</div>
<span>01.2020 - 04.2020 / Esbjerg, Denmark</span>
</div>
<div class="pb-5">
<div class="d-flex">
<a href="https://www.easv.dk/en" target="_blank"><h2 id="links">EASV</h2></a> <h2 class="ml-auto">AP degree: Multimedia Design</h2>
</div>
<span>08.2018 - 06.2020 / Esbjerg, Denmark</span>
</div>
<div class="pb-5">
<div class="d-flex">
<h2>Freelance</h2> <h2 class="ml-auto">Translator</h2>
</div>
<span>07.2017 - 04.2018 / Kretinga, Lithuania</span>
</div>
<div class="d-flex">
<a href="https://www.kolpingokolegija.lt/" target="_blank"><h2 id="links">Kolping University</h2></a> <h2 class="ml-auto">Bachelor: Business English</h2>
</div>
<span>09.2014 - 06.2017 / Kaunas, Lithuania</span>

</v-col>
</div>
 <v-col
        cols="12"
        md="11"
        sm="11"
      >
  <v-divider id="feelsGoodMan" class="mt-15 offset-1" color="#ffffff"></v-divider>
</v-col>
</v-container>
</template>

<script>
export default {

}
</script>

<style scoped>
h1{
    color: #fff;
    font-weight: 400;
    letter-spacing: 2px;
}
h2, h1, span{
    cursor: context-menu;
}
h2{
    font-size: 19px;
    line-height: 1;
    font-weight: 400;
    letter-spacing: 2px;
}
span{
    color: #fff;
    opacity: 0.5;
    font-size: 13px;
    letter-spacing: 2px;
}

a{
text-decoration: none;
}
a:hover{
    opacity: 0.7;
}
#links{
    cursor: pointer;
}
</style>