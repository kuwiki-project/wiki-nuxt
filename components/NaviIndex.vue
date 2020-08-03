<template>
  <NaviItems :items="items"></NaviItems>
</template>
<script>
export default {
  data: () => ({
    items: [
      { icon: 'mdi-book-open-variant', text: '学生生活', link:''},
      { icon: 'mdi-file-outline', text: '科目検索' , link:'/exams'},
      { icon: 'mdi-video-account', text: '教員検索', link:'/instructors'},
      { icon: 'mdi-file-upload-outline', text: '過去問提供', link:''},
      { icon: 'mdi-chat-processing-outline', text: '問い合わせ', link:''}
    ]
    })
}
</script>
