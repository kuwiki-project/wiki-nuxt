<template>
  <v-btn icon :href="btnLink" target="”_blank”" v-bind:class="btnClass">
    <v-icon>{{ btnIcon }}</v-icon>
  </v-btn>
</template>
<script>
export default {
  props: {
    btnLink: String,
    btnIcon: String,
    btnClass: String
  }
}
</script>