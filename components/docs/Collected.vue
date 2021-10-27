<template>
  <div>
    <v-card-title>2021前期回収済みリスト</v-card-title>
    <v-card-text>
      <div class="my-3 text-center">
        <v-progress-circular
          v-if="loading === true"
          color="primary"
          indeterminate
        />
      </div>

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
      loading: true,
      collected_exams: null
    }
  },
  async fetch() {
    this.collected_exams = await fetch(
      this.$config.COLLECTED_EXAMS_JSON_URL
    ).then((res) => res.json())
    this.loading = false
  }
}
</script>
