<template>
  <v-btn icon :href="link" target="”_blank”">
    <v-icon>$opennew</v-icon>
  </v-btn>
</template>
<script>
export default {
  props: {
    link: {
      type: String
    }
  }
}
</script>
