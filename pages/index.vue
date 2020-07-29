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
      <indexList></indexList>
    </v-row>
  </v-container>
</v-app>
</template>
<script>
import indexList from "@/components/indexList.vue";
import searchForm from "@/components/searchForm.vue";
export default {
  components: {
    indexList,
    searchForm
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
