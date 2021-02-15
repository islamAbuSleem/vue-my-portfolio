<template>
<div class="overlay">
    <div class="project">
        <v-container>
             <template>
        <v-subheader
          :inset="inset"
             class="text-capitalize font-weight-medium about-me"
             >{{project.title}}</v-subheader>

             <v-row>
                 <v-col cols="3">
                     <p>{{project.text}}</p>
                 </v-col>
                 <v-col cols="9">
                     <v-img
              :src="project.src"
              class="grey darken-4"
            ></v-img>
                 </v-col>
             </v-row>
             </template>

              {{project}}
        </v-container>
       
    </div>
    </div>
</template>
<script>
export default {
    props:['project'],
}
</script>
<style lang="scss" scoped>
    .overlay{
        display: block;
        background-color:rgba($color: #000000, $alpha: .7);
        width: 100vw;
        height: 100vh;
        position: fixed;
        top: 0;
        left: 0;
        z-index: 99;
        .project{
            width: 90%;
            height: 90vh;
            margin: 2.5% auto;
            background-color: #eee;
            overflow-y: scroll;
            .about-me{
                  color: #FF6060;
      text-shadow: 0 0 6px #f98282;
      justify-content: center;
      font-size: 3rem  !important;
      margin: 2% 0 4% 0;
            }
        }
    }
</style>