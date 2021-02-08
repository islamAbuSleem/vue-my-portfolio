<template>
  <div class="experience">
    <v-subheader :inset="inset" class="text-capitalize">my experience</v-subheader>
    <v-container>
      <template>
        <v-subheader
          :inset="inset"
          class="text-capitalize font-weight-medium amber--text text--darken-2 about-me mb-5"
        >experience</v-subheader>
        <v-row class="pb-5">
          <v-col xs="9" sm="9" offset="2" class="d-flex align-center">
            <v-expansion-panels hover="true" multiple="true" focusable>
              <v-expansion-panel v-for="(item,i) in experience" :key="i">
                <v-expansion-panel-header class="font-weight-bold grey--text text--darken-4 "><span class="blue-grey--text text--darken-2">{{item.title}}</span> <span class="text-right blue-grey--text text--lighten-1 mr-5">{{item.from}} - {{item.to}}</span></v-expansion-panel-header>
                <v-expansion-panel-content><p v-for="(desc,x) in item.desc" :key="x" class="mt-2 grey--text text--darken-2">{{desc}}</p></v-expansion-panel-content>
              </v-expansion-panel>
            </v-expansion-panels>
          </v-col>
        </v-row>
        <v-btn @click="downloadFile()" color="error" class="my-5 mx-auto d-block">download my CV</v-btn>

      </template>
    </v-container>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  data() {
    return {
      experience: [
        {
          title: "Freelancing Frontend Developer",
          from: "May 2017",
          to: "Current",
          desc: ["Developing websites and webApps on various freelancing platforms as well as for companies based on contracts for short or long term."]
        },
        {
          title: "OraceDBA at TransIT",
          from: "OCT 2017",
          to: "Current",
          desc: ["Managing Oracle DB and solving some related issues.", "monitor Egyptain Railways ticketing system using Weblogic and trying to fix any issue would cause to system slow or down.", "Fixing train stations DB problems."]
        },
        {
          title: "Frontend at IHorizons",
          from: "Aug 2019",
          to: "Nov 2019",
          desc: ["Revamping websites frontend that's built on Drupal."]
        },
        {
          title: "Software engineer at ITValley",
          from: "Jan 2016",
          to: "Feb 2017",
          desc: ["Linux and Unix Admin"]
        },
        {
          title: "Call Agenr at Raya Contact Center",
          from: "Nov 2015",
          to: "Jan 2016",
          desc: ["Call center agent"]
        }
      ],

    };
  },
  methods:{
      downloadFile() {
      axios({
        url: "https://media-exp1.licdn.com/dms/document/C4D2DAQHIpO3JQ_hSgA/profile-treasury-document-pdf-analyzed/0?e=1590739200&v=beta&t=HfIOnHFfPs2wMZLMCa5DprLxXkNBlvRZ-7-UCm_b1E4",
        method: "GET",
        responseType: "blob" // important
      }).then(response => {
        const url = window.URL.createObjectURL(new Blob([response.data]));
        const link = document.createElement("a");
        link.href = url;
        link.setAttribute("download", "islamCV.pdf"); //or any other extension
        document.body.appendChild(link);
        link.click();
        console.log(url);
      });
    }
  }
};
</script>

<style lang="scss" scoped>
.about-me {
  text-shadow: 0 0 6px goldenrod;
  font-size: 18px;
}
</style>