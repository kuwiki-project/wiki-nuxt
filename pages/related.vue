<template>
  <div>
    <v-main>
      <v-container>
        <v-row justify="center">
          <v-col cols="10" sm="8">
            <v-card-title>関連サイト</v-card-title>
            <v-card-text>
              <li v-for="(relatedSite, key) in relatedSites" :key="key">
                {{ relatedSite.name }}
                <v-btn icon :href="relatedSite.link" target="”_blank”">
                  <v-icon>$opennew</v-icon>
                </v-btn>
              </li>
            </v-card-text>
          </v-col>
        </v-row>
      </v-container>
    </v-main>
    <TheFooter />
  </div>
</template>
<script>
export default {
  auth: false,
  data: () => ({
    relatedSites: [
      {
        name: "KU1025 - 物工過去問サイト",
        link: "https://1025-kuexam.netlify.app/",
        detail: ""
      },
      {
        name: "理学部学生自治会サイト",
        link: "https://web.sci-ku.info/home",
        detail: ""
      }
    ]
  })
}
</script>
