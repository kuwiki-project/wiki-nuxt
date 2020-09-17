<template>
  <v-container>
    <SearchTitle :title="title"></SearchTitle>
    <SearchForm :Items="courses"></SearchForm>
  </v-container>
</template>

<script>
import axios from "axios";
export default {
  middleware: 'auth',
  data: () => ({
    title: "科目検索",
  }),
  async asyncData() {
    const baseURL = process.env.WIKI_API_URL + "/courses";
    const { data } = await axios.get(baseURL);
    return { courses: data };
  },
  methods: {},
};
</script>
