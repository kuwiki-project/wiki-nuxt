<template>
  <div class="scroll-page">
    <loader-icon v-if="showLoaderIcon" size="1.5x" class="loader-icon"></loader-icon>
    <div v-for="(collected_exam, key) in collected_exams" :key="key">
      <h1 v-if="key===0">{{ collected_exam.sheet_name }} </h1>
      <div v-if="key!==0">{{ collected_exam.file_title }}</div>
    </div>
  </div>
</template>
<script>
import { LoaderIcon } from "vue-feather-icons"
export default {
  title: "回収済みリスト",
  auth: false,
  components: {
    LoaderIcon,
  },
  data: () => ({
    showLoaderIcon: true,
    collected_exams: null
  }),
  async fetch() {
    this.collected_exams = await fetch(
      this.$config.COLLECTED_EXAMS_JSON_URL
    ).then(
      (res) =>
        res.json()
    )
    this.showLoaderIcon = false
  }
}
</script>
<style scoped>
.loader-icon{
  animation:2s linear infinite rotation;
}
@keyframes rotation{
  0%{ transform:rotate(0);}
  100%{ transform:rotate(360deg); }
}
</style>