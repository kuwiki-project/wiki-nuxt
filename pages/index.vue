<template>
  <div>
    <v-main>
      <v-container>
        <v-row justify="center">
          <v-card flat class="d-flex align-start flex-column my-5">
            <img src="/kiwi.svg" width="80" class="mx-auto" />
            <div class="my-3 sitazoroe">
              <span class="daiji">京大wiki</span>
              とは<br />
              学内資料を<br />
              共有するプロジェクト
            </div>
          </v-card>
        </v-row>

        <v-row justify="center">
          <v-card flat class="d-flex align-start flex-column mb-10">
            <div v-for="item in items" :key="item.name" class="my-3">
              <v-card-title>
                <span>{{ item.name }}</span>
              </v-card-title>
              <v-btn
                v-for="button in item.buttons"
                :key="button.text"
                :href="button.link"
                color="secondary"
                text
                rounded
                elevation="2"
                class="mx-2"
              >
                <v-icon class="mr-2">
                  {{ button.icon }}
                </v-icon>
                <span class="small hutoji">{{ button.text }}</span>
              </v-btn>
            </div>
          </v-card>
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
    items: [
      {
        name: "過去問",
        detail:
          "すべての般教科目・専門科目を取り扱っています．過去問を閲覧する方は提供してください",
        buttons: [
          {
            link: "/search",
            text: "探す",
            icon: "$search"
          },
          {
            link: "/volunteer",
            text: "提供",
            icon: "$upload"
          }
        ]
      },
      {
        name: "wiki",
        detail: "🌸新入生必見🌸京大内のさまざまなことを事典的にまとめています",
        buttons: [
          {
            link: "/wiki",
            text: "読む",
            icon: "$book"
          },
          {
            link: "",
            text: "書く",
            icon: "$edit"
          }
        ]
      },
      {
        name: "REST API",
        detail: "京大wikiが収集したデータを利用できます",
        buttons: [
          {
            link: "http://api.kuwiki.net/docs",
            text: "ドキュメント",
            icon: "$code"
          }
        ]
      },
      {
        name: "開発",
        detail: "京大wikiのサイトを改善できます",
        buttons: [
          {
            link: "https://github.com/kuwiki-project/wiki-nuxt",
            text: "ソース",
            icon: "$code"
          }
        ]
      }
    ]
  })
}
</script>
<style scoped>
.sitazoroe {
  vertical-align: text-bottom;
}

.hutoji {
  font-weight: 500;
}

.daiji {
  font-size: 1.6rem;
}
</style>
