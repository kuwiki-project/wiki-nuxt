<template>
  <v-container>
    <SearchTitle :title="title" />
    <SearchForm :items="courses" />
  </v-container>
</template>

<script>
import axios from "axios"
export default {
  async asyncData() {
    const baseURL = process.env.WIKI_API_URL + "/courses"
    const { data } = await axios.get(baseURL)
    return { courses: data }
  },
  data: () => ({
    title: "科目検索",
  }),
}
</script>
