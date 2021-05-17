<template>
  <v-list
    dense
    nav
  >
    <v-list-item
      v-for="item in items"
      :key="item.title"
      link
      :href="item.link"
    >
      <v-list-item-icon>
        <v-icon>{{ item.icon }}</v-icon>
      </v-list-item-icon>
      <v-list-item-content>
        <v-list-item-title>{{ item.text }}</v-list-item-title>
      </v-list-item-content>
    </v-list-item>
  </v-list>
</template>
<script>
export default {
  data: () => ({
    items: [
      {
        text: "利用規約",
        link: "/terms"
      },
      {
        text: "プライバシーポリシー",
        link: "/privacy"
      },
      {
        text: "シケタイさんへ",
        link: "/for-siketai"
      },
      {
        text: "関連サイト",
        link: "/related-sites"
      },
      {
        text: "運営について",
        link: "/profile"
      }
    ]
  })
}
</script>
