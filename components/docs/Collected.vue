<template>
  <div>
    <v-card-title>2020後期回収済みリスト</v-card-title>
    <v-card-text>
      <li v-for="(collected_exam, key) in collected_exams" :key="key">
        {{ collected_exam.file_title }}
      </li>
    </v-card-text>
  </div>
</template>
<script>
export default {
  data() {
    return {
      collected_exams: null
    }
  },
  async fetch() {
    this.collected_exams = await fetch(
      this.$config.COLLECTED_EXAMS_JSON_URL
    ).then((res) => res.json())
  }
}
</script>
