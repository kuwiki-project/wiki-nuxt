<template>
  <v-container>
    <SearchTitle :title="title"></SearchTitle>
    <SearchForm :Items="instructors"></SearchForm>
  </v-container>
</template>

<script>
import axios from 'axios';
export default {
  data: () => ({
    title: '教員検索'
  }),
  async asyncData() {
    const baseURL = process.env.WIKI_API_URL + '/instructors'
    const { data } = await axios.get(baseURL)
    return { instructors: data }
  },
}
</script>
