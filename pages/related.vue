<template>
  <div>
    <v-main>
      <v-container>
        <v-row justify="center">
          <v-col cols="10" sm="8">
            <v-card-title>関連サイト</v-card-title>

            <ul>
              <li v-for="item in items" :key="item.text">
                {{ item.text }}
                <v-btn icon :href="item.link" target="”_blank”">
                  <v-icon>mdi-open-in-new</v-icon>
                </v-btn>
              </li>
            </ul>
          </v-col>
        </v-row>
      </v-container>
    </v-main>
    <TheFooter />
  </div>
</template>
<script>
export default {
  data: () => ({
    items: [
      {
        text: "KU1025 - 物工過去問サイト",
        link: "https://1025-kuexam.netlify.app/",
        detail: ""
      },
      {
        text: "KUEE13 - 電電過去問サイト",
        link: "https://kuee.netlify.app/",
        detail: ""
      },
      {
        text: "理学部学生自治会サイト",
        link: "https://web.sci-ku.info/home",
        detail: ""
      }
    ]
  })
}
</script>

<script>
export default {
  auth: false,
}
</script>