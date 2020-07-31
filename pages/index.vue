<template>
<v-app id='index'>
  <v-container class="mx-auto">
    <v-row align='center' justify='center'>
    <v-icon x-large color=teal>mdi-led-variant-outline</v-icon>
    </v-row>
    <v-row align='center' justify='center'>
      <span id='title'>京大wiki</span>
    </v-row>
    <v-row align='center' justify='center'>
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
#title {
  opacity: 0.8;
  font-size: 2.0em;
  font-weight: 700;
  font-family: 'Noto Sans JP', sans-serif;
}
</style>
