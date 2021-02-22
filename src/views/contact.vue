<template>
  <div class="contacts">
    <v-subheader class="text-capitalize">Contacts</v-subheader>
    <v-container>
      <v-subheader class="text-capitalize font-weight-medium teal--text about-me"
        >Contacts</v-subheader
      >
      <div class="contact-info ml-5">
        <v-row>
          <v-col cols="10" md="6">
            <h3>Lets Connect <v-icon>mdi-handshake</v-icon></h3>
            <template>
              <v-timeline
                class="ma-5"
                align-top
                :dense="$vuetify.breakpoint.smAndDown"
              >
                <v-timeline-item
                  v-for="(item, i) in items"
                  :key="i"
                  :color="item.color"
                  :icon="item.icon"
                  fill-dot
                  
                >
                  <v-card v-if="item.contact" :color="item.color" dark>
                    <v-card-title class="title">
                      {{ item.contact }}
                    </v-card-title>
                  </v-card>
                </v-timeline-item>
              </v-timeline>
            </template>
          </v-col>
          <v-col cols="12" md="6">
            <h3 class="text-center">Leave a message</h3>
            <template>
              <form ref="form" lazy-validation @submit.prevent="sendEmail">
                <v-text-field
                  solo
                  v-model="name"
                  name="from_name"
                  :rules="nameRules"
                  label="Name"
                  required
                ></v-text-field>

                <v-text-field
                  solo
                  v-model="email"
                  :rules="emailRules"
                  label="E-mail"
                  name="from_email"
                  required
                ></v-text-field>
                <!-- name attribute is used for emailjs to get date in email template-->
                <v-text-field
                  solo
                  name="from_subject"
                  v-model="subject"
                  label="Subject"
                ></v-text-field>
                <v-textarea
                  v-model="message"
                  solo
                  name="message"
                  label="Message"
                ></v-textarea>
                <v-btn color="warning" type="submit" value="Send"> Send Message </v-btn>
              </form>
            </template>
          </v-col>
        </v-row>
      </div>
    </v-container>
  </div>
</template>

<script>
import emailjs from "emailjs-com";

export default {
  data: () => ({
    name: "",
    email: "",
    subject: "",
    message: "",
    items: [
      {
        color: "red lighten-2",
        icon: "mdi-email",
        contact: "islamabusleem@gmail.com",
      },
      {
        color: "purple darken-1",
        icon: "mdi-phone",
        contact: "201111884381",
      },
      {
        color: "indigo",
        icon: "mdi-linkedin",
        contact: "/islamabusleem",
      },
      {
        color: "green lighten-1",
        icon: "mdi-google-maps",
        contact: "Egypt, Cairo",
      },
    ],
    valid: true,

    nameRules: [
      (v) => !!v || "Name is required",
      (v) => (v && v.length <= 30) || "Name must be less than 30 characters",
    ],

    emailRules: [
      (v) => !!v || "E-mail is required",
      (v) => /.+@.+\..+/.test(v) || "E-mail must be valid",
    ],
    select: null,
  }),
  methods: {
    sendEmail(e) {
      console.log(e);
      try {
        emailjs.sendForm(
          "service_rso9jdn",
          "template_2n882g8",
          e.target,
          "user_1YTsTvA1npwKk9wi47zjV",
          {
            name: this.name,
            email: this.email,
            subject: this.subject,
            message: this.message,
          }
        );
      } catch (error) {
        console.log({ error });
      }
      // Reset form field
      this.name = "";
      this.email = "";
      this.subject = "";
      this.message = "";
    },
  },
};
</script>

<style lang="scss" scoped>
.contacts {
  h3 {
    color: #5a5a5a;
  }
  .about-me {
    text-shadow: 0 0 6px #55c4b8 !important;
  }
  .v-icon {
    transform: rotate(45deg);
    margin-left: 5px;
    font-size: 1.8rem;
    color: #ffa500f2;
  }
  .v-timeline {
    .v-timeline-item {
      .v-timeline-item__body {
        .v-card {
          .v-card__title {
            font-size: 1rem !important;
          }
        }
      }
    }
  }
  form {
    width: 70%;
    margin: 2% auto;
    padding: 12px;
    border-radius: 4px;
    .v-btn {
      display: flex;
      margin: auto;
    }
  }
}


@media only screen and (max-width: 600px) {
  .v-timeline[data-v-2d05c2f6]{
    margin: 20px -60px !important;
  }
  .contacts .v-timeline .v-timeline-item .v-timeline-item__body .v-card .v-card__title[data-v-2d05c2f6]{
    font-size: .8rem !important;
  }
  .contacts form[data-v-2d05c2f6]{
    
    width: 115%;
    margin-left: -10%;

  }

}
</style>
