<template>
  <div class="projects">
    <v-subheader class="text-capitalize">Skills</v-subheader>
    <v-container>
      <template>
        <v-subheader :inset="inset" class="text-capitalize font-weight-medium blue--text text--darken-1 about-me">web Frontend</v-subheader>
        <looping :data="frontend" />
            <v-divider></v-divider>
        <v-subheader :inset="inset" class="text-capitalize font-weight-medium blue--text text--darken-1 about-me">web Backend</v-subheader>
        <looping :data="backend" />
            <v-divider></v-divider>
        <v-subheader :inset="inset" class="text-capitalize font-weight-medium blue--text text--darken-1 about-me">Database</v-subheader>
        <looping :data="database" />
    <v-divider></v-divider>
        <v-subheader :inset="inset" class="text-capitalize font-weight-medium blue--text text--darken-1 about-me">O s</v-subheader>
        <looping :data="os" />
    <v-divider></v-divider>

    <v-divider></v-divider>
      </template>
    </v-container>
  </div>
</template>

<script>
import looping from "../components/looping.vue"
export default {
  data() {
    return {
      frontend: [
        {id: "1", name: "Html 5", rate: "5", src: require("../assets/html5.png") },
        {id: "2", name: "Css 3", rate: "5", src: require("../assets/css3.png") },
        {id: "3", name: "sass", rate: "4", src: require("../assets/sass.png") },
        {id: "4", name: "JavaScript", rate: "4", src: require("../assets/javascript.png") },
        {id: "5", name: "jQuery", rate: "4", src: require("../assets/jquery-.png") },
        {id: "6", name: "Bootstrap", rate: "5", src: require("../assets/bootstrap.png") },
        {id: "7", name: "Vue.js", rate: "4", src: require("../assets/logo.png") },
        {id: "8", name: "Vuetify", rate: "5" , src: require("../assets/vuetify.png")},
        {id: "9", name: "ES6", rate: "4", src: require("../assets/es6.png") },
        {id: "11", name: "AJAX", rate: "4", src: require("../assets/ajax.png") },
      ],
      backend: [
        {id:"3", name: "Node.js", rate: "3", src: require("../assets/node.png") },
        {id:"3", name: "Express.js", rate: "3"},
      ],
      database: [
        {id:"1", name: "MySQL", rate: "4", src: require("../assets/mysql.jpg") },
        {id:"2", name: "Oracle DB", rate: "4", src: require("../assets/oracle.jpg")  },
        {id:"3", name: "MongoDB", rate: "3", src: require("../assets/mongodb.png")  }
      ],
      os: [
            {id:"1", name: "windows", rate: "5", src: require("../assets/windows.png")  },
            {id:"2", name: "Linux", rate: "4", src: require("../assets/linux.png")  },
            {id:"3", name: "Unix", rate: "4", src: require("../assets/unix.png")  },
          ],
      others: [

      ]
    };
  },
  components:{
      looping
  }

};
</script>

<style lang="scss" scoped>
.about-me {
  text-shadow: 0 0 6px cornflowerblue;
  font-size: 18px;
}
</style>