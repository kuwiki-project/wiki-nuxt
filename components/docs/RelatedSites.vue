<template>
  <div>
    <v-card-title>関連サイト</v-card-title>
    <v-card-text>
      <li v-for="(relatedSite, key) in relatedSites" :key="key">
        {{ relatedSite.name }}
        <buttonExternalLink
          :btn-link="relatedSite.link"
          btn-icon="$opennew"
        />
      </li>
    </v-card-text>
  </div>
</template>
<script>
export default {
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
  })
}
</script>
