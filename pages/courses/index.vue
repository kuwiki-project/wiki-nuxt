<template>
<v-main>
  <v-container class="fill-height">
    <SearchForm :items="courses" :title='title'/>
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
