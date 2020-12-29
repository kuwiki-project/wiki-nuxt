<template>
<v-main>
  <v-container>
    <SearchTitle :title="title" />
    <SearchForm :items="courses" />
  </v-container>
</v-main>
</template>
<script>
export default {
  data: () => ({
    title: '科目検索',
    courses: 'courses',
  })
}
</script>
