<template>
  <v-main>
    <v-container>
      <v-row justify="center">
        <v-col cols="10" sm="8">
          <v-card-title>{{ results.name }}</v-card-title>
          <v-card-subtitle>{{ results.field }}</v-card-subtitle>
          <v-card-actions class="mt-n4">
            <v-btn
              v-for="(exam, key) in results.exam_set"
              :key="key"
              :href="exam.drive_link"
              target="”_blank”"
              icon
            >
              <v-icon>$googledrive</v-icon>
            </v-btn>
          </v-card-actions>
          <v-card
            v-for="(lecture, lecture_key) in results.lecture_set"
            :key="lecture_key"
            outlined
            class="my-1"
          >
            <v-card-text>
              <div>
                {{ lecture.year }} {{ lecture.semester }}
                <span
                  v-for="(period, period_key) in lecture.period_set"
                  :key="period_key"
                >
                  {{ period.period }}
                </span>
              </div>
              <div
                v-for="(instructor, instructor_key) in lecture.instructor_set"
                :key="instructor_key"
              >
                {{ instructor.instructor }}
              </div>
            </v-card-text>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </v-main>
</template>
<script>
import axios from "axios"
export default {
  data() {
    return {
      results: []
    }
  },
  mounted() {
    this.getCourseDetail()
  },
  methods: {
    getCourseDetail() {
      axios
        .get(
          `${this.$config.WIKI_API_URL}/api/course/?id=${this.$router.currentRoute.params.id}`,
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
