<template>
  <v-container>
    <SearchTitle :title="title" />
    <SearchForm :items="instructors" />
  </v-container>
</template>

<script>
import axios from "axios"
export default {
  async asyncData() {
    const baseURL = process.env.WIKI_API_URL + "/instructors"
    const { data } = await axios.get(baseURL)
    return { instructors: data }
  },
  data: () => ({
    title: "教員検索",
  }),
}
</script>

