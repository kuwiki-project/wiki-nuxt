<template>
<v-row align='center' justify='center'>
  <span id='searchform' class='mx-auto'>
    <v-text-field prepend-inner-icon="mdi-magnify">
    </v-text-field>
  </span>
</v-row>
</template>
<script>
export default {
  props: ['page'],
}
</script>
<style>
span#searchform .v-text-field input {
  padding: 8px 10px 8px;
}

span#searchform {
  width: 400px;
  opacity: 0.8;
}
</style>
