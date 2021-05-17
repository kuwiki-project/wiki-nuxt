<template>
  <a :href="link" class="white text-center">
    <div>
      <v-icon>{{ icon }}</v-icon>
      <br>
      <span class="small-text">
        {{ text }}
      </span>
    </div>
  </a>
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
.small-text{
    font-size: 0.8em;
}
</style>