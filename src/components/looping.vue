<template>
    <div class="looping mb-5">
        <v-card flat v-for="skill in data" :key="skill.id" class="pa-3 ml-5"> 
          <template>
            <v-row :class="`skill `">
              <v-col xs="12" sm="12" md="4" offset="3" class=" d-flex align-center">
                <div class="text-capitalize grey--text text--darken-3 text-uppercase"><img :src="skill.src" alt=""> {{skill.name}}</div>
              </v-col>
              <v-col xs="6" sm="6" md="4">
                <div>
                        <v-rating v-model="skill.rate" readonly size="25" background-color="amber lighten-1"
      color="amber"></v-rating>
                    </div>
              </v-col>
            </v-row>
          </template>
        </v-card>
    </div>
</template>

<script>
export default {
    props:["data"],
}
</script>

<style lang="scss" scoped>
.looping{
    img{
        width:35px;
        margin-bottom: -10px;
    }
    .v-card{
      width: 70%;
      margin: 5px auto !important;
      transition: all .4s ease-in-out;
      &:hover{
        box-shadow: 1px 5px 15px #ccc;
        transform: translateY(-1px);
        cursor: pointer;
      }
    }
}
</style>