<template>
  <v-main>
    <SearchForm :items="courses" :title="title" />
  </v-main>
</template>
<script>
export default {
  data: () => ({
    title: "科目検索",
    courses: "courses",
  }),
}
</script>
