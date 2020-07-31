<template>
  <v-container>
    <SearchTitle :title="title"></SearchTitle>
    <SearchForm></SearchForm>
    <SearchList></SearchList>
  </v-container>
</template>

<script>
export default {
  data: () => ({
    title: '教員検索'
  })
}
</script>
