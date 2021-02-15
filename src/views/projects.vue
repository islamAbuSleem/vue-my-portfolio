<template>
  <div class="projects">
    <v-subheader class="text-capitalize">projects</v-subheader>
    <v-row>
      <v-col cols="4" v-for="project in Projects" :key="project.title">
            <template>
               <template>
  <v-hover v-slot="{ hover }">
    <v-card
      class="mx-auto"
      color="grey lighten-4"
      max-width="600"
    >
      <v-parallax
        :aspect-ratio="16/9"
            height="300"

        :src="project.src"
      >
        <v-expand-transition>
          <div
            v-if="hover"
            class="d-flex transition-fast-in-fast-out orange darken-2 v-card--reveal display-3 white--text"
            style="height: 100%;"
          >
            $14.99
          </div>
        </v-expand-transition>
      </v-parallax>
      <v-card-text
        class="pt-6"
        style="position: relative;"
      >

        <h3 class="display-1 font-weight-light orange--text mb-2">
          {{project.title}}
        </h3>
        <div class="font-weight-light title mb-2">
          {{project.text}}
          <router-link :to="{name:'project'}" class="d-block">See more</router-link>
        </div>
      </v-card-text>
    </v-card>
  </v-hover>
</template>
    </template>
      </v-col>
    </v-row>
  </div>
</template>



// <script>
export default {
  data (){
    return{
      Projects: [
        {title:"LogZee", src: require("../assets/logzee.png"), text:" ", code: " ", preview: " "},
        {title:"LogZee", src: require("../assets/logzee.png"), text:" ", code: " ", preview: " "},
        {title:"LogZee", src: require("../assets/logzee.png"), text:" ", code: " ", preview: " "},
        {title:"LogZee", src: require("../assets/logzee.png"), text:" ", code: " ", preview: " "},
        {title:"LogZee", src: require("../assets/logzee.png"), text:" ", code: " ", preview: " "},
        {title:"LogZee", src: require("../assets/logzee.png"), text:" ", code: " ", preview: " "},
        {title:"LogZee", src: require("../assets/logzee.png"), text:" ", code: " ", preview: " "},
        {title:"LogZee", src: require("../assets/logzee.png"), text:"LogZee from pickup to destination, Clear Responsive Design", code: " ", preview: " "}
        // {title:"Support Center", src: require(""), text:"", code: "", preview: ""},
        // {title:"Globally", src: require("../assets/globaly.png"), text:"", code: "", preview: ""},
        // {title:"Delicate", src: require("../assets/delicate.png"), text:"", code: "", preview: ""},
        // // {title:"Registration Form", src: require(""), text:"", code: "", preview: ""},
        // {title:"Holiday", src: require("../assets/holiday.png"), text:"", code: "", preview: ""},
        // // {title:"Vuejs Markdown Note", src: require(""), text:"", code: "", preview: ""},
        // {title:"Htb-Landing-Page-Edited", src: require("../assets/htb.png"), text:"", code: "", preview: ""},
        // {title:"Proprogz", src: require("../assets/proprogz.png"), text:"", code: "", preview: ""},
      ]
    }
  }
}
</script>

<style lang="scss" scoped>
  .v-card--reveal {
  align-items: center;
  bottom: 0;
  left: 0;
  justify-content: center;
  opacity: .5;
  position: absolute;
  width: 100%;
}
</style>