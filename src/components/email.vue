<template>
<v-container>
<div class="mt-5">
 <v-col
        cols="12"
        md="12"
        sm="12"
      >
 <form target="_blank" action="https://formsubmit.co/simas.raudonis@gmail.com" method="POST">
        <div class="form-group">
            <div class="form-row">
                <div class="col">
                    <input type="text" name="name" class="form-control" placeholder="Full Name" required>
                </div>
                <div class="col">
                    <input type="email" name="email" class="form-control" placeholder="Email Address" required>
                </div>
            </div>
        </div>
        <div class="form-group col">
            <textarea placeholder="Your Message.." class="form-control" name="message" rows="5 " required></textarea>
        </div>
        <v-btn id="buttonMain" type="submit" class="pa-2 px-16 mt-10" target="_blank" outlined ripple color="indigo darken-3">Send Message</v-btn>
    </form>
</v-col>
</div>
</v-container>
</template>

<script>
export default {

}
</script>

<style scoped>
input, textarea{
    background-color: #202022;
    padding: 4px 15px;
    color: #e6e6e6;

}
textarea{
 padding: 4px 20px;
}
form{
  /*   border: #202022 solid 2px; */
    padding: 10px 10px 30px 10px;
    height: auto;
    min-width: 300px;
}
textarea:focus, input:focus{
    outline: none;
}
</style>