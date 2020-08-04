<template>
<v-container>
  {{ $route.params.id }}
  {{ course.name }}
  {{ course.field.group }}
</v-container>
</template>
<script>
import axios from 'axios';
export default {
  data: () => ({
    title: '科目検索'
  }),
  validate({ params }) {
    // 数値でなければならない
    return /^\d+$/.test(params.id)
  },
  async asyncData(context) {
    const courseId = context.params.id
    const baseURL = process.env.WIKI_API_URL + '/courses/' + courseId
    const { data } = await axios.get(baseURL)
    return { course: data }
  },
}
</script>
