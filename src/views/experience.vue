<template>
  <div class="experience">
    <v-subheader :inset="inset" class="text-capitalize">experience</v-subheader>
    <v-container>
      <template>
        <v-subheader
          :inset="inset"
          class="text-capitalize font-weight-medium amber--text text--darken-2 about-me mb-5"
          >experience</v-subheader
        >
        <div class="d-flex align-center work-exper">
          <v-expansion-panels hover="true" multiple="true" focusable>
            <v-expansion-panel v-for="(item, i) in experience" :key="i">
              <v-expansion-panel-header
                class="font-weight-bold grey--text text--darken-4"
              >
                <v-row>
                  <v-col cols="12" md="6"
                    ><span class="blue-grey--text text--darken-2">{{
                      item.title
                    }}</span></v-col
                  >
                  <v-col cols="12" md="6" class="text-md-right"
                    ><span class="blue-grey--text mr-5"
                      >{{ item.from }} - {{ item.to }}</span
                    ></v-col
                  >
                </v-row>
              </v-expansion-panel-header>
              <v-expansion-panel-content
                ><ul>
                  <li
                    v-for="(desc, x) in item.desc"
                    :key="x"
                    class="mt-2 grey--text text--darken-2"
                  >
                    {{ desc }}
                  </li>
                </ul></v-expansion-panel-content
              >
            </v-expansion-panel>
          </v-expansion-panels>
        </div>
        <v-btn @click.prevent="downloadFile()" color="error" class="my-5 mx-auto d-block"
          >download my CV</v-btn
        >
      </template>
    </v-container>
  </div>
</template>

<script>
// import axios from "axios";
export default {
  data() {
    return {
      experience: [
        {
          title: "Freelancing Frontend Developer",
          from: "May 2017",
          to: "Current",
          desc: [
            "Developing websites and webApps on various freelancing platforms as well as for companies based on contracts for short or long term.",
          ],
        },
        {
          title: "OraceDBA at TransIT",
          from: "OCT 2017",
          to: "Current",
          desc: [
            "Managing Oracle DB and solving some related issues.",
            "monitor Egyptain Railways ticketing system using Weblogic and trying to fix any issue would cause to system slow or down.",
            "Resolving train stations DB problems.",
          ],
        },
        {
          title: "Frontend at IHorizons",
          from: "Aug 2019",
          to: "Nov 2019",
          desc: [
            "Developing websites on Drupal 8 based on ziplin or indesign UI designs.",
            "Revamping some websites built using Drupal based on new design.",
          ],
        },
        {
          title: "Software engineer at ITValley",
          from: "Jan 2016",
          to: "Feb 2017",
          desc: ["Linux and Unix Admin"],
        },
        {
          title: "Call Agenr at Raya Contact Center",
          from: "Nov 2015",
          to: "Jan 2016",
          desc: ["Call center agent"],
        },
      ],
    };
  },
  methods: {
    downloadFile() {
      window.open("https://drive.google.com/uc?id=1z3cfWzeBkmVghFCUUIN5iU5w7ds_ph2x&export=download")
      // axios({
      //   url:
      //     "https://drive.google.com/uc?id=1z3cfWzeBkmVghFCUUIN5iU5w7ds_ph2x&export=download",
      //   method: "GET",
      //   responseType: "blob", // important
      // }).then((response) => {
      //   const url = window.URL.createObjectURL(new Blob([response.data]));
      //   const link = document.createElement("a");
      //   link.href = url;
      //   link.setAttribute("download", "islamCV.pdf"); //or any other extension
      //   document.body.appendChild(link);
      //   link.click();
      //   console.log(url);
      // });
    },
  },
};
</script>

<style lang="scss" scoped>
.about-me {
  text-shadow: 0 0 6px goldenrod;
  font-size: 18px;
}
.work-exper {
  width: 60%;
  margin: auto;
  @media only screen and (max-width: 600px) {
    width: 100%;
    margin: 0;
  }
  .v-expansion-panel {
    margin: 2px auto;
  }
}
.theme--light.v-expansion-panels .v-expansion-panel .row {
  @media only screen and (max-width: 600px) {
    font-size: 0.7rem;
  }
}
.v-expansion-panel-content__wrap ul {
  @media only screen and (max-width: 600px) {
    font-size: 0.7rem;
  }
}
</style>
