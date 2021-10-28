<template>
  <div class="scroll-page">
    <h1>{{ results.name }}</h1>
    <div>{{ results.field }}</div>
    <a
      v-for="(exam, key) in results.exam_set"
      :key="key"
      href="exam.drive_link"
      target="”_blank”"
    >
      <IconGoogleDrive class="drive-icon" />
    </a>
       
    <div
      v-for="(lecture, lecture_key) in results.lecture_set"
      :key="lecture_key"
      outlined
    >
      <div>
        {{ lecture.year }} {{ lecture.semester }}
        <span
          v-for="(period, period_key) in lecture.period_set"
          :key="period_key"
        >
          {{ period.name }}
        </span>
      </div>
      <div
        v-for="(instructor, instructor_key) in lecture.instructor_set"
        :key="instructor_key"
      >
        {{ instructor.name }}
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios"
export default {
  data() {
    return {
      results: []
    }
  },
  head() {
    return {
    title: this.$router.currentRoute.params.name,
  }},
  mounted() {
    this.getCourseDetail()
  },
  methods: {
    getCourseDetail() {
      axios
        .get(
          `${this.$config.WIKI_API_URL}/api/course/?name=${this.$router.currentRoute.params.name}`,
          {
            headers: {
              Authorization: `token${this.$auth
                .getToken("local")
                .replace("Bearer", "")}`
            }
          }
        )
        .then((res) => {
          this.results = res.data.results["0"]
        })
        .catch((err) => err)
    }
  }
}
</script>
<style>
.drive-icon {
  height: 1.2em;
  width: 1.2em;
}
.drive-icon:hover{
  color: rosybrown;
}
</style>