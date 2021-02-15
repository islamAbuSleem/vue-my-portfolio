<template>
  <div class="projects">
    <v-subheader class="text-capitalize">projects</v-subheader>
    <v-container>
      <project :project="projectData"></project>
      <template>
        <v-subheader
          :inset="inset"
          class="text-capitalize font-weight-medium about-me"
        >Projects</v-subheader>
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
                          <span  class="d-block see-more" @click="getProjectData(project)">See more</span>
                        </div>
                      </v-card-text>
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
import project from '../components/project'
export default {
  data (){
    return{
      projectData: JSON.parse( window.localStorage.getItem('project')) || '',
      Projects: [
        {title:"Paxico", src: require("../assets/paxic.png"), text:"Tech company for developing web and movile apps", code: " ", preview: " ",tags:[{name:'XD',color:'#006064'}]},
        {title:"LogZee", src: require("../assets/logzee.png"), text:"LogZee from pickup to destination, Clear Responsive Design", code: " ", preview: " ",tags:[{name:'html',color:''},{name:"css",color:'#009688'},{name:'sass',color:'#FF6060'},{name:'jQuery',color:'#3f51b5'},{name:'bootstrap',color:'#9c27b0'}]},
        {title:"ProProgz", src: require("../assets/proprogz.png"), text:"Tech company for developing web and movile apps", code: " ", preview: " ",tags:[{name:'html',color:''},{name:"css",color:'#009688'},{name:'sass',color:'#FF6060'},{name:'jQuery',color:'#3f51b5'},{name:'bootstrap',color:'#9c27b0'}]},
        {title:"Delicate", src: require("../assets/delicate.png"), text:"Tech company for developing web and movile apps", code: " ", preview: " ",tags:[{name:'html',color:''},{name:"css",color:'#009688'},{name:'sass',color:'#FF6060'},{name:'Javascript',color:'#ff9800'},{name:'bootstrap',color:'#9c27b0'}]},
        {title:"Globaly", src: require("../assets/globaly.png"), text:"Management business company", code: " ", preview: " ",tags:[{name:'html',color:''},{name:"css",color:'#009688'},{name:'sass',color:'#FF6060'},{name:'jQuery',color:'#3f51b5'},{name:'bootstrap',color:'#9c27b0'}]},
        {title:"Holiday", src: require("../assets/holiday.png"), text:"Travel agency for reserving hotels, plane tikets", code: " ", preview: " ",tags:[{name:'html',color:''},{name:"css",color:'#009688'},{name:'sass',color:'#FF6060'},{name:'jQuery',color:'#3f51b5'},{name:'bootstrap',color:'#9c27b0'}]},
        {title:"static Dashboard", src: require("../assets/dashboar.png"), text:"Simple static dashboard", code: " ", preview: " ",tags:[{name:'html',color:''},{name:"css",color:'#009688'},{name:'sass',color:'#FF6060'},{name:'jQuery',color:'#3f51b5'},{name:'bootstrap',color:'#9c27b0'}]},
        {title:"MarkDown note", src: require("../assets/note.png"), text:"Simple note in the browser instead of stiky note", code: " ", preview: "",tags:[{name:'html',color:''},{name:"css",color:'#009688'},{name:'sass',color:'#FF6060'},{name:'Javascript',color:'#ff9800'},{name:'vue',color:'#4caf50'}]},
      ]
    }
  },
  components:{
    project
  },methods:{
    getProjectData(project){
      this.projectData = project
      window.localStorage.setItem('project',JSON.stringify(this.projectData))
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