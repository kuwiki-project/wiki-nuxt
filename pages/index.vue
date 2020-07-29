<template>
<v-app id='index'>
  <v-container class="mx-auto">
    <v-row align='center' justify='center'>
      <span id='title'>京大wiki</span>
    </v-row>
    <v-row align='center' justify='center'>
      <searchForm></searchForm>
    </v-row>
    <v-row align='center' justify='center'>
      <naviIndex></naviIndex>
    </v-row>
  </v-container>
</v-app>
</template>
<script>
import naviIndex from "@/components/naviIndex.vue";
export default {
  components: {
    naviIndex
  }
}
</script>
<style scoped>
#index {
  background-image: url("~@/assets/vangoghmuseum.jpg");
  background-size: cover;
}

#title {
  color: white;
  opacity: 0.8;
  font-size: 5em;
  font-weight: bold;
}
</style>
