<template>
  <div class="projects">
    <v-subheader class="text-capitalize">projects</v-subheader>
    <v-container>
      <template>
        <v-subheader
          :inset="inset"
          class="text-capitalize font-weight-medium about-me"
        >Projects</v-subheader>
            <v-row>
      <v-col cols="12" md="4" v-for="project in Projects" :key="project.title">
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
                            class="d-flex transition-fast-in-fast-out black darken-2 v-card--reveal display-3 white--text"
                            style="height: 100%;"
                          >
                          </div>
                        </v-expand-transition>
            <template v-if="hover">
            <div class="text-center chips">
            <v-chip v-for="chip in project.tags" :key="chip"
            class="ma-2"
            label
            tag
            dark
            :color="chip.color"
            >
            {{chip.name}}
            </v-chip>
            
            </div>
            </template>
            
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
                        </div>
                      </v-card-text>
                          <v-divider class="mx-4" v-if="project.link || project.preview"></v-divider>
                              <v-card-actions>
                                <v-tooltip top v-if="project.link">
                                  <template v-slot:activator="{ on, attrs }">
                                    <v-btn icon v-bind="attrs" v-on="on" @click.prevent="goToGithub(project.link)">
                                      <v-icon>mdi-github</v-icon>
                                    </v-btn>
                                  </template>
                                  <span>Code on Github</span>
                                </v-tooltip>
                                <v-tooltip top v-if="project.preview">
                                  <template v-slot:activator="{ on, attrs }">
                                    <v-btn icon v-bind="attrs" v-on="on" @click.prevent="livePreview(project.preview)">
                                      <v-icon>mdi-launch</v-icon>                                    
                                    </v-btn>
                                  </template>
                                  <span>Live preview</span>
                                </v-tooltip>

                            </v-card-actions>
                    </v-card>
                  </v-hover>
                </template>
    </template>
      </v-col>
    </v-row>
      </template>
    </v-container>
  </div>
</template>



<script>
export default {
  data (){
    return{
      Projects: [
        {title:"Paxico", src: require("../assets/paxic.png"), text:"Tech company for developing web and movile apps", link: "", preview: "",tags:[{name:'XD',color:'#006064'}]},
        {title:"LogZee", src: require("../assets/logzee.png"), text:"LogZee from pickup to destination, Clear Responsive Design", link: "https://github.com/islamAbuSleem/logZee", preview: "https://islamabusleem.github.io/logZee/",tags:[{name:'html',color:''},{name:"css",color:'#009688'},{name:'sass',color:'#FF6060'},{name:'jQuery',color:'#3f51b5'},{name:'bootstrap',color:'#9c27b0'}]},
        {title:"Teknowl site redesign", src: require("../assets/teknowl.png"), text:"Site redesign as a technical task after an interview for frontend position", link: "https://github.com/islamAbuSleem/teknowl-site-redesign", preview: "https://islamabusleem.github.io/teknowl-site-redesign/",tags:[{name:'html',color:''},{name:"css",color:'#009688'},{name:'sass',color:'#FF6060'},{name:'jQuery',color:'#3f51b5'},{name:'bootstrap',color:'#9c27b0'}]},
        {title:"ProProgz", src: require("../assets/proprogz.png"), text:"Tech company for developing web and movile apps", link: "https://github.com/islamAbuSleem/proprogz", preview: "https://islamabusleem.github.io/Proprogz/",tags:[{name:'html',color:''},{name:"css",color:'#009688'},{name:'sass',color:'#FF6060'},{name:'jQuery',color:'#3f51b5'},{name:'bootstrap',color:'#9c27b0'}]},
        {title:"Delicate", src: require("../assets/delicate.png"), text:"Tech company for developing web and movile apps", link: "https://github.com/islamAbuSleem/Delicate", preview: "https://islamabusleem.github.io/Delicate/",tags:[{name:'html',color:''},{name:"css",color:'#009688'},{name:'sass',color:'#FF6060'},{name:'Javascript',color:'#ff9800'},{name:'bootstrap',color:'#9c27b0'}]},
        {title:"Globaly", src: require("../assets/globaly.png"), text:"Management business company", link: "https://github.com/islamAbuSleem/Globaly", preview: "https://islamabusleem.github.io/Globaly/",tags:[{name:'html',color:''},{name:"css",color:'#009688'},{name:'sass',color:'#FF6060'},{name:'jQuery',color:'#3f51b5'},{name:'bootstrap',color:'#9c27b0'}]},
        {title:"Holiday", src: require("../assets/holiday.png"), text:"Travel agency for reserving hotels, plane tikets", link: "https://github.com/islamAbuSleem/Holiday", preview: "https://islamabusleem.github.io/Holiday/",tags:[{name:'html',color:''},{name:"css",color:'#009688'},{name:'sass',color:'#FF6060'},{name:'jQuery',color:'#3f51b5'},{name:'bootstrap',color:'#9c27b0'}]},
        {title:"static Dashboard", src: require("../assets/dashboar.png"), text:"Simple static dashboard", link: "https://github.com/islamAbuSleem/Bootstrap-Dashboard", preview: "https://islamabusleem.github.io/Bootstrap-Dashboard/",tags:[{name:'html',color:''},{name:"css",color:'#009688'},{name:'sass',color:'#FF6060'},{name:'jQuery',color:'#3f51b5'},{name:'bootstrap',color:'#9c27b0'}]},
        {title:"MarkDown note", src: require("../assets/note.jpg"), text:"Simple note in the browser instead of sticky Notes", link: "https://github.com/islamAbuSleem/vuejs-markdown-note", preview: "https://islamabusleem.github.io/vuejs-markdown-note/",tags:[{name:'html',color:''},{name:"css",color:'#009688'},{name:'sass',color:'#FF6060'},{name:'Javascript',color:'#ff9800'},{name:'vue',color:'#4caf50'}]},
      ]
    }
  },
  methods:{
    goToGithub(link){
      window.open(link)
    },
    livePreview(link){
      window.open(link)
    },
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
.v-card {
    transition: all .3s ease-in-out !important;
}
.see-more{
  color: #FF6060;
  text-decoration: none;
  font-size: .9rem;
  font-weight: 500;
}
.about-me{
  color: #FF6060;
      text-shadow: 0 0 6px #f98282;
}

</style>