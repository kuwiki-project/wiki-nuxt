<template>
  <v-main>
    <v-container class="fill-height">
      <div>{{ results.name }}</div>
      <div>{{ results.field }}</div>
      <div v-for="(exam, key) in results.exam_set" :key="key">
        <a :href="exam.drive_link">{{ exam.drive_link }} </a>
      </div>
    </v-container>
  </v-main>
</template>
<script>
import axios from "axios"
export default {
  data() {
    return {
      results: [],
    }
  },
  mounted() {
    this.getCourseDetail()
  },
  methods: {
    getCourseDetail() {
      axios
        .get(
          this.$config.WIKI_API_URL +
            "/api/course/?id=" +
            this.$router.currentRoute.params.id,
          {
            headers: {
              Authorization:
                "token" + this.$auth.getToken("local").replace("Bearer", ""),
            },
          }
        )
        .then((res) => {
          this.results = res.data.results[0]
        })
        .catch((err) => {
          return err
        })
    },
  },
}
</script>
