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
        <v-icon color="secondary">{{ item.icon }}</v-icon>
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
        icon: "$search",
        link: "/",
        text: "検索"
      },
      {
        icon: "$upload",
        text: "過去問提供",
        link: "/upload-exams"
      },
      {
        icon: "$settings",
        text: "設定",
        link: "/settings"
      },
      {
        icon: "$json",
        text: "APIドキュメント",
        link: "https://api.kuwiki.net/docs/"
      },
      {
        icon: "$book",
        text: "wiki",
        link: "/wiki"
      },
      {
        icon: "$edit",
        text: "wiki編集",
        link: "https://hackmd.io/@kuwiki-editors/home/edit"
      },
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
