<template>
  <NaviItems :items="items"></NaviItems>
</template>
<script>
export default {
  data: () => ({
    items: [
      { icon: 'mdi-file-outline', text: '過去問検索' , link:'/exams'},
      { icon: 'mdi-video-account', text: '教員検索', link:''},
      { icon: 'mdi-file-upload-outline', text: '過去問提供', link:''},
    ]
    })
}
</script>
