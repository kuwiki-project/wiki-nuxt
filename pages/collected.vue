<template>
  <div class="scroll-page">
    <loader-icon
      v-if="showLoaderIcon"
      size="1.5x"
      class="loader-icon"
    ></loader-icon>
    <h1>{{ sheetName }}</h1>
    <div v-for="(file, key) in files" :key="key">
      {{ file.file_title }}
    </div> 
  </div>
</template>
<script>
import { LoaderIcon } from "vue-feather-icons"
export default {
  title: "回収済みリスト",
  auth: false,
  components: {
    LoaderIcon
  },
  data: () => ({
    showLoaderIcon: true,
    sheetName: "",
    files: [],
    data: null
  }),
  head() {
    return {
      title: this.sheetName
    }
  },
  async beforeMount() {
    const data = await fetch(
      this.$config.COLLECTED_EXAMS_JSON_URL
    ).then((res) =>  res.json())
    this.sheetName = data.sheet_name
    this.files = data.files
    this.showLoaderIcon = false
    console.log(this.sheetName)
    }
  ,
}
</script>
<style scoped>
.loader-icon {
  animation: 2s linear infinite rotation;
}
@keyframes rotation {
  0% {
    transform: rotate(0);
  }
  100% {
    transform: rotate(360deg);
  }
}
</style>
