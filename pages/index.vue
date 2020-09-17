<template>
<v-app id='index'>
  <v-container>
    <KupediaLogo></KupediaLogo>
    <v-row align='center' justify='center'>
      <NaviIndex></NaviIndex>
    </v-row>
  </v-container>
</v-app>
</template>
<script>
import NaviIndex from "@/components/NaviIndex.vue";
export default {
  middleware: 'auth',
  components: {
    NaviIndex
  },
  methods:{}
}
</script>
