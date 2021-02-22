<template>
  <div class="experience">
    <v-subheader :inset="inset" class="text-capitalize">experience</v-subheader>
    <v-container>
      <template>
        <v-subheader
          :inset="inset"
          class="text-capitalize font-weight-medium amber--text text--darken-2 about-me mb-5"
        >experience</v-subheader>
          <div class="d-flex align-center work-exper">
            <v-expansion-panels hover="true" multiple="true" focusable>
              <v-expansion-panel v-for="(item,i) in experience" :key="i">
                <v-expansion-panel-header class="font-weight-bold grey--text text--darken-4 ">
                  <v-row>
                    <v-col cols="12" md="6"><span class="blue-grey--text text--darken-2">{{item.title}}</span></v-col>
                    <v-col cols="12" md="6" class="text-md-right"><span class="blue-grey--text mr-5">{{item.from}} - {{item.to}}</span></v-col>
                  </v-row>
                  </v-expansion-panel-header>
                <v-expansion-panel-content><ul><li v-for="(desc,x) in item.desc" :key="x" class="mt-2 grey--text text--darken-2">{{desc}}</li></ul></v-expansion-panel-content>
              </v-expansion-panel>
            </v-expansion-panels>
          </div>
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
          desc: ["Managing Oracle DB and solving some related issues.", "monitor Egyptain Railways ticketing system using Weblogic and trying to fix any issue would cause to system slow or down.", "Resolving train stations DB problems."]
        },
        {
          title: "Frontend at IHorizons",
          from: "Aug 2019",
          to: "Nov 2019",
          desc: ["Developing websites on Drupal 8 based on ziplin or indesign UI designs.","Revamping some websites built using Drupal based on new design."]
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
      axios({ //https://smallpdf.com/result#r=cebd86ef4bf521beb77b8456d0677386&t=share-document
        url: "https://smallpdf-production-files.s3.eu-west-1.amazonaws.com/ebfd395369a89945256edb79efc0b428.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=ASIA3I33L6OR6SPA4CFZ%2F20210222%2Feu-west-1%2Fs3%2Faws4_request&X-Amz-Date=20210222T095304Z&X-Amz-Expires=900&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCWV1LXdlc3QtMSJHMEUCIQDmpXOYQdAxcHgI%2Feg8DQYgCBprLvxGmD2WBdwopYHcCQIgDMEIdx8QW4VeXEcfoGpYUHlD9syn4usMRJMoSJejCLQqvQMI0f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw3NzQ5NjM0NTg5NzkiDN2hdVW1ZLCYnL%2BQZSqRA%2Fw1ruoGA4KCTwixCbQtp90tijEx8enY2Hi3wnQ%2F384npVFL1SWOgxZ%2FzvUfja4OopLFmZ2iiWuC%2B%2B31FJVSM7XcFxUOgFBG5xQQkcuO5ai8X%2Bur68C4hNfVBkk%2BQyOFJdkyy5q6jDFCuZ7m8szYlRPEp%2FAmKwngHxEkbbIz8vjBNy7%2Bxh5hq2d%2B20gS6YiKDI9mh9O1hZlJE8%2FYjlKuJ7AU%2FdmSISYrI5g4B3QmehlhMbSCvf2apTcCBICRvgBKY%2Biwnojy13shqCkij76VG1gs1JDhXt4%2FEwmhBdr8MpWUKXahk%2FU6Y%2FyLKQ6S4bExWf4obK2uRcqM36ymJnBiFYFYL34k2kCdKhBfg7rGNMt7hPkpsuS9NyFo9OrcuddLxoV1hlwgssaXMJyg%2BmIKVWyJI9YnkAunSc3J1Z%2FomEtofBM6A73kzcHRvJv3IGJ3q0wvVSvgj3udKz8Nlf7SSru%2F75NeWHrHEto3Seai9Ki29B3MLboWU1PEFE6aivoNSHDdhMnBp6znw0tWvQDMTfQyMKO4zYEGOusBOk9F%2Bea4lTtVpM77r0AKjewCcUR0isKs%2F1YsJdMM6mpxvYbIczt5k8TXORfOuuxdIbFtaQHwvxLFLcJnVCmsslwmuD%2BAabVmIQW79TufLl3xiXb9CTmeiFKJiaJuOnmFGETT29ABd%2F6%2B1NTW0SmdoQ5HSI%2F2JWw9dHZGdU3Ftu46BuvLZdcbMKSHLO%2F0y3QkUM4VSHQP94kIjI%2FTTswgPcp3B8B1duFOW7b9RabOtWVlsuwpeIlL2UnSWGtnm6Fqa53%2F59LfQbIxlIjZdF5aY8Po%2B3k1KgeiTKo9AjoN8Uq5izNAvnWgfsU19g%3D%3D&X-Amz-SignedHeaders=host&X-Amz-Signature=e97c80eb433f7b2af266ea3ef5730ba5061a18c48d8bee5f74f3700199591546",
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
.work-exper{
  width: 60%;
  margin: auto;
  .v-expansion-panel{
    margin: 2px auto;
  }
}

@media only screen and (max-width: 600px) {
  .work-exper[data-v-fb7c0bf8]{
    width: 100%;
    margin: 0;
  }
  .row[data-v-fb7c0bf8]{
    font-size: .7rem;
  }
  ul[data-v-fb7c0bf8]{
      font-size: .7rem;

  }
}
</style>