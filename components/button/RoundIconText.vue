<template>
  <v-btn :href="link" color="secondary" text rounded elevation="2" class="mx-1">
    <v-icon class="mr-2">
      {{ icon }}
    </v-icon>
    <span class="hutoji">
      {{ text }}
    </span>
  </v-btn>
</template>
<script>
export default {
  props: {
    link: {
      type: String
    },
    icon: {
      type: String
    },
    text: {
      type: String
    }
  }
}
</script>

<style scoped>
.hutoji {
  font-weight: 500;
}
</style>
