<template>
    <div class="looping mb-5">
        <v-card flat v-for="skill in data" :key="skill.id" class="pa-3 ml-5" max-width="800"> 
          <template>
            <v-row :class="`skill `">
              <v-col cols="12" sm="6" class=" d-flex align-center">
                <div class="text-capitalize grey--text text--darken-3 text-uppercase"><img :src="skill.src" alt="" v-if="skill.src"> {{skill.name}}</div>
              </v-col>
              <v-col cols="12" sm="6">
                <div>
                        <v-rating v-model="skill.rate" readonly size="23" background-color="amber lighten-1"
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
      margin: 5px auto !important;
      transition: all .4s ease-in-out;
      &:hover{
        box-shadow: 1px 5px 15px #ccc;
        cursor: pointer;
      }
    }
}

</style>