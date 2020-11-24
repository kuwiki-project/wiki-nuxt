<template>
  <v-container>
    <SearchTitle :title="title" />
    <SearchForm :items="courses" />
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
