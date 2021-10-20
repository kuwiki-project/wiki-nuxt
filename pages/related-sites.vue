<template>
  <div class="scroll-page">
    <h1>関連サイト</h1>
  
    <li v-for="(relatedSite, key) in relatedSites" :key="key">
      {{ relatedSite.name }}
      <a :href="relatedSite.link" target="”_blank”">
        <IconOpenNew class="icon-opennew" />
      </a>
    </li>
  </div>
</template>
<script>
export default {
   auth: false,
  data: () => ({
    relatedSites: [
      {
        name: "KU1025 - 物工過去問サイト",
        link: "https://1025-kuexam.netlify.app/"
      },
      {
        name: "京大楽単bot",
        link: "https://das82.com/Rakutan"
      },
      {
        name: "理学部学生自治会",
        link: "https://web.sci-ku.info/home"
      },
      {
        name: "農学部学生自治会",
        link: "https://kyodaiagri.org/"
      }
    ]
  }),
  head: {
    title: "関連サイト"
  }
}
</script>
<style scoped>
 .icon-opennew{
  height: 1em;
  width: 1em;
}
</style>