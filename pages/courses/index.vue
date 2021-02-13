<template>
<v-main>
  <v-container >
    <v-row class='justify-center'>
    <SearchForm :items="courses" :title='title'/>
  </v-row>
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
