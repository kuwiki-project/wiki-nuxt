<template>
  <v-container>
    <SearchTitle :title="title"></SearchTitle>
    <SearchForm :Items="courses"></SearchForm>
  </v-container>
</template>
<script>
export default {
  data: () => ({
    title: '科目検索',
    courses: 'courses',
  })
}
</script>
