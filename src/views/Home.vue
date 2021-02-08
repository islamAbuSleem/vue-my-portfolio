<template>
  <div class="home">
    <v-subheader :inset="inset" class="text-capitalize">Home</v-subheader>
    <v-container>
      <template>
        <v-subheader
          :inset="inset"
          class="text-capitalize font-weight-medium deep-purple--text text--lighten-1 about-me"
        >About me</v-subheader>
        <blockquote class="blockquote">
          I'm a passionate Frontend developer.I love coding and developing.I have a good experience as fronend developer. in addition to having a basic knowledge backend developing.
          i'm trying to make my code always organized, valideted, well commented and best practice with high performance.
        </blockquote>
      </template>

      <template>
        <v-subheader
          :inset="inset"
          class="mt-5 text-capitalize font-weight-medium deep-purple--text text--lighten-1 about-me"
        >latest projects</v-subheader>
        <v-card flat class="pa-3 ml-5">
          <v-row>
            <v-col xs="12" sm="12" md="4">
              <div class="caption grey--text text-capitalize">project name</div>
            </v-col>
            <v-col xs="6" sm="6" md="4">
              <div class="caption grey--text text-capitalize">creation date</div>
            </v-col>
            <v-col xs="6" sm="6" md="4">
              <div class="caption grey--text text-capitalize pl-4">Status</div>
            </v-col>
          </v-row>
        </v-card>
        <v-card
          flat
          v-for="project in projectsToShow"
          :key="project"
          :class="`pa-3 ml-5 project ${projects[project-1].status}`"
        >
          <template v-if="project <= projects.length">
            <v-row>
              <v-col xs="12" sm="12" md="4">
                <div :class="`text-capitalize`">{{projects[project-1].name}}</div>
              </v-col>
              <v-col xs="6" sm="6" md="4">
                <div :class="`text-capitalize`">{{projects[project-1].date}}</div>
              </v-col>
              <v-col xs="6" sm="6" md="4">
                <div>
                  <v-chip
                    :class="`text-capitalize ${projects[project-1].status} white--text caption`"
                  >{{projects[project-1].status}}</v-chip>
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
        >Show more</v-btn>
      </template>
    </v-container>
  </div>
</template>

<script>
// @ is an alias to /src

export default {
  name: "Home",
  data() {
    return {
      projects: [
        { name: "real-time-chat", date: "25/4/2020", status: "complete" },
        { name: "logZee", date: "20/3/2020", status: "overdue" },
        { name: "Support Center", date: "29/11/2019", status: "ongoing" },
        { name: "globally", date: "20/12/2019", status: "complete" },
        { name: "dice game", date: "10/10/2019", status: "complete" },
        { name: "delicate", date: "15/9/2019", status: "complete" },
        { name: "smoothies", date: "26/6/2019", status: "complete" },
        { name: "registration form", date: "12/1/2019", status: "complete" },
        { name: "holiday", date: "30/10/2018", status: "complete" },
        { name: "vuejs markdown note", date: "20/8/2018", status: "complete" },
        {
          name: "htb-landing-page-edited",
          date: "18/6/2018",
          status: "complete"
        },
        { name: "proprogz", date: "30/4/2018", status: "complete" }
      ],
      projectsToShow: 4
    };
  }
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
  &.overdue {
    border-left: 4px solid tomato;
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
    &.overdue {
      background-color: #f83e70;
    }
  }
}
</style>