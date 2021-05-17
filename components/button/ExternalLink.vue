<template>
  <v-btn icon :href="btnLink" target="”_blank”" :class="btnClass">
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