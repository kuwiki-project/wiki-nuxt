<template>
  <v-container>
    <SearchTitle :title="title"></SearchTitle>
    <SearchForm :Items="courses"></SearchForm>
  </v-container>
</template>

<script>
import axios from 'axios';
import courses from '@/assets/json/courses.json'
export default {
  data: () => ({
    title: '科目検索',
    // courses: courses
  }),
  async asyncData() {
    // const baseURL = process.env.WIKI_API_URL + '/courses'
    // const { data } = await axios.get(baseURL)
    return { courses: courses }
  },
}
</script>
