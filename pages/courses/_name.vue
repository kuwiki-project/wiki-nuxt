<template>
  <div class="scroll-page">
    <button onclick="window.history.back();" class="back-button">
      <chevron-left-icon class="icon-arrow" />戻る
    </button>
    <h1>
      {{ results.name }}
    </h1>
    <div>
      {{ results.field }}
      <a
        v-for="(exam, exam_key) in results.exam_set"
        :key="exam_key"
        :href="exam.drive_link"
        target="”_blank”"
      >
        <IconGoogleDrive class="icon-google-drive icon-with-text" />
      </a>
    </div>

    <ul
      v-for="(lecture, lecture_key) in results.lecture_set"
      :key="lecture_key"
      class="ul-none"
    >
      <li class="li-card">
        <span>{{ lecture.year }}</span>
        <span>{{ lecture.semester }}</span>
        <span
          v-for="(period, period_key) in lecture.period_set"
          :key="period_key"
        >
          {{ period.name }}
        </span>
        <br />
        <span
          v-for="(instructor, instructor_key) in lecture.instructor_set"
          :key="instructor_key"
        >
          {{ instructor.name }}
        </span>
      </li>
    </ul>
  </div>
</template>

<script>
import axios from "axios"
import { ChevronLeftIcon } from "vue-feather-icons"
export default {
  components: {
    ChevronLeftIcon
  },
  data() {
    return {
      results: []
    }
  },
  head() {
    return {
      title: this.$router.currentRoute.params.name
    }
  },
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
<style scoped>
h1 {
  margin: 0.4em 0 0 0;
}

.back-button {
  background: transparent;
  border: none;
  color: var(--color-primary);
  padding: 0;
}

.li-card {
  border-left: var(--color-primary) 3px solid;
  padding: 0.6em;
  margin: 0.2em;
}
</style>
