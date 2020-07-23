<template>
<v-container>
<div class="mt-5 d-flex justify-center">
 <v-col
        cols="12"
        md="4"
        sm="12"
      >
 <form target="_blank" action="https://formsubmit.co/simas.raudonis@gmail.com" method="POST">
        <div class="form-group">
            <div class="form-row">
                    <v-text-field
                    name="name"
                    label="Name"
                    filled
                    background-color="#202022"
                    color="#536DFE"
                    dense
                    outlined
                    flat
                    dark
                    required
                ></v-text-field>
                <v-text-field
                    type="email"
                    name="email"
                    label="Email Address"
                    filled
                    background-color="#202022"
                    color="#536DFE"
                    dense
                    flat
                    dark
                    outlined
                    required
                ></v-text-field>
            </div>
        </div>
        <div class="form-group">
            <v-textarea
            dark
            background-color="#202022"
            label="Message"
            name="message"
            filled
            required
            color="#536DFE"
            dense
            flat
            >
 </v-textarea>
        </div>
        <v-btn id="buttonMain" type="submit" class="hvr-glow pa-2 px-16 mt-10" target="_blank" outlined ripple color="indigo accent-2">Send Message</v-btn>
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

textarea{
 padding: 4px 20px;
}
form{
  /*   border: #202022 solid 2px; */
    padding: 10px 10px 30px 10px;
    height: auto;
    border: #536DFE solid 1px;
}
textarea:focus, input:focus{
    outline: none;
}
</style>