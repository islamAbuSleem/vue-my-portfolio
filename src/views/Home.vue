<template>
  <div class="home">
    <v-subheader :inset="inset" class="text-capitalize">Home</v-subheader>
    <v-container>
      <div>
        <v-subheader
          :inset="inset"
          class="text-capitalize font-weight-medium deep-purple--text text--lighten-1 about-me"
          >About me</v-subheader
        >
        <blockquote class="blockquote">
          I'm Islam, {{ today.getFullYear() - 1993 }} years old. I have passion
          to learn and to code. I have bachelor degree in computer science. I
          have experience as front-end developer. I used to learning on my own.
          plus a good experience in backend using Nodejs , ExpressJS and mongoDB
          with client Mongoose as I'm starting to write my backend by myself
          nowadays.
        </blockquote>
      </div>

      <div class="projects">
        <v-subheader
          :inset="inset"
          class="mt-5 text-capitalize font-weight-medium deep-purple--text text--lighten-1 about-me"
          >latest projects</v-subheader
        >
        <v-card flat class="pa-3 ml-5" max-width="600">
          <v-row>
            <v-col cols="6">
              <div class="caption grey--text text-capitalize">project name</div>
            </v-col>
            <v-col cols="6">
              <div
                class="caption grey--text text-right text-capitalize pl-4 mr-5"
              >
                Status
              </div>
            </v-col>
          </v-row>
        </v-card>
        <v-card
          flat
          v-for="project in projectsToShow"
          :key="project"
          max-width="600"
          :class="`pa-3 ml-5 project ${projects[project - 1].status}`"
        >
          <template v-if="project <= projects.length">
            <v-row>
              <v-col cols="6">
                <div :class="`text-capitalize`">
                  {{ projects[project - 1].name }}
                </div>
              </v-col>
              <v-col cols="6" class="text-right">
                <div>
                  <v-chip
                    :class="`text-capitalize ${
                      projects[project - 1].status
                    } white--text caption`"
                    >{{ projects[project - 1].status }}</v-chip
                  >
                </div>
              </v-col>
            </v-row>
          </template>
        </v-card>
        <v-btn
          v-if="projectsToShow >= projects.length ? false : true"
          color="deep-purple lighten-4"
          @click="projectsToShow += 2"
          large
          rounded
          class="my-5 mx-auto d-block grey--text text--darken-1"
          >Show more</v-btn
        >
      </div>
    </v-container>
  </div>
</template>

<script>
// @ is an alias to /src

export default {
  name: "Home",
  data() {
    return {
      today: new Date(),
      projects: [
        { name: "real-time-chat", status: "complete" },
        { name: "logZee", status: "complete" },
        { name: "Support Center", status: "inprogress" },
        { name: "globally", status: "complete" },
        { name: "dice game", status: "complete" },
        { name: "delicate", status: "complete" },
        { name: "smoothies", status: "complete" },
        { name: "registration form", status: "complete" },
        { name: "holiday", status: "complete" },
        { name: "vuejs markdown note", status: "complete" },
        {
          name: "htb-landing-page-edited",
          date: "18/6/2018",
          status: "complete",
        },
        { name: "proprogz", date: "30/4/2018", status: "complete" },
      ],
      projectsToShow: 4,
    };
  },
};
</script>

<style lang="scss" scoped>
.about-me {
  text-shadow: 0 0 6px grey;
  font-size: 18px;
}
.project {
  &.complete {
    border-left: 4px solid #3cd1c2 !important;
  }
  &.ongoing {
    border-left: 4px solid orange;
  }
  &.inprogress {
    border-left: 4px solid #f83e70;
  }
}
.home {
  .projects {
    .v-card {
      margin: 7px auto !important;
      transition: all 0.4s ease-in-out;
      &:hover {
        box-shadow: 1px 5px 15px #ccc;
        cursor: pointer;
      }
    }
  }
}

.theme--light {
  &.v-chip {
    &.complete {
      background-color: #3cd1c2;
    }
    &.ongoing {
      background-color: #ffaa2c;
    }
    &.inprogress {
      background-color: #f83e70;
    }
  }
}
</style>