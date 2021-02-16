<template>
  <v-footer dark app absolute padless class="info">
    <v-col class="text-center" cols="12">
      <v-card-text>
        <v-btn
          v-for="externalItem in externalItems"
          :key="externalItem.icon"
          class="mx-4 white--text"
          icon
          :href="externalItem.link"
          target="”_blank”"
        >
          <v-icon>{{ externalItem.icon }}</v-icon>
        </v-btn>
      </v-card-text>
      <v-card-text>
        <span
          v-for="(internalItem, index) in internalItems"
          :key="internalItem.text"
        >
          <span v-if="index != 0" v-html="partition" />
          <NuxtLink :to="internalItem.link" class="white--text text-no-wrap">
            {{ internalItem.text }}
          </NuxtLink>
        </span>
      </v-card-text>

      <v-divider />

      <v-card-text class="white--text">
        <span>{{ new Date().getFullYear() }} — 京大wiki</span>
      </v-card-text>
    </v-col>
  </v-footer>
</template>
<script>
export default {
  data: () => ({
    partition: "　|　",
    externalItems: [
      {
        icon: "$twitter",
        link: "https://twitter.com/kuwiki99"
      },
      {
        icon: "$github",
        link: "https://github.com/kuwiki-project/wiki-nuxt"
      },
      {
        icon: "$mail",
        link: "mailto: kuwiki99@gmail.com"
      }
    ],
    internalItems: [
      {
        text: "利用規約",
        link: "/terms"
      },
      {
        text: "プライバシーポリシー",
        link: "/privacy"
      },
      {
        text: "お問い合わせ",
        link: "/contact"
      },
      {
        text: "関連サイト",
        link: "/related"
      },
      {
        text: "運営について",
        link: "/profile"
      }
    ]
  })
}
</script>
<style>
a {
  text-decoration: none;
}

span {
  font-weight: 400;
  font-family: "Noto Sans JP", sans-serif;
}
</style>
