<template>
  <nav>
    <v-navigation-drawer v-model="drawer" :mini-variant="mini" permanent app :color="drawerColor" >
      <v-list dense>
        <v-list-item link class="j  ustify-center" disabled>
          <div class="text-center" v-if="!mini">
            <v-list-item-avatar size="150">
              <img src="../assets/DSC_0003.png" alt="islam" class="my-img" />
            </v-list-item-avatar>

            <p class="text-center white--text mb-0 mt-3 headline avatar-title">Islam Abusleem</p>
            <p class="text-center white--text subheading avatar-title">Frontend Developer</p>
          </div>
          <div  v-else>
            <v-list-item-avatar class="my-img-sm" size="50">
              <img src="../assets/DSC_0003.png" alt="islam"  />
            </v-list-item-avatar>
          </div>
        </v-list-item>
        <v-list-item link v-for="link in links" :key="link.text" router :to="link.route" @click="changeColor(link.setColor)">
          <v-list-item-action>
            <v-icon class="white--text">mdi-{{link.icon}}</v-icon>
          </v-list-item-action>

          <v-list-item-content>
            <v-list-item-title class="white--text">{{link.text}}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>

    <v-app-bar app clipped flat>
      <v-app-bar-nav-icon @click.stop="mini = !mini" />
      <v-toolbar-title class="grey--text">
        <span class="font-weight-light text-capitalize">Islam</span>
        <span class="text-capitalize">Abusleem</span>
      </v-toolbar-title>
      <v-spacer></v-spacer>
      <v-btn icon>
        <v-icon>mdi-behance</v-icon>
      </v-btn>
      <v-btn icon>
        <v-icon>mdi-github</v-icon>
      </v-btn>

      <v-btn icon class="mr-5">
        <v-icon>mdi-linkedin</v-icon>
      </v-btn>
    </v-app-bar>
  </nav>
</template>

<script>
export default {
  props: {
    source: String
  },
  data: () => ({
    mini: true,
    drawerColor:'#9652ff',
    links: [
      { icon: "view-dashboard", text: "Overview", route: "/", setColor:'#9652ff'  },
      { icon: "chart-line", text: "My Experience", route: "/experience", setColor:'#ffa000' },
      { icon: "folder", text: "My Projects", route: "/projects" , setColor:'#FF6060'},
      { icon: "lightbulb-on", text: "My Skills", route: "/skills", setColor:'#1E88E5 ' },
    ]
  }),
  methods:{
    changeColor(color){
       this.drawerColor = color
    },
  }
};

// this.$vuetify.theme.dark = true
</script>

<style scoped>
.my-img {
  border: 2px solid #fff;
}
.my-img-sm{
    border: 2px solid #fff;
  margin-left:-20% ;
}
.avatar-title{
  color: #d4dbf5!important;
    text-shadow: 0 0 12px rgb(42, 5, 58);
}
</style>