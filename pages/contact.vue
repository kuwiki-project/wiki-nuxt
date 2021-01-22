<template>
<div>
  <v-main>
    <v-container>
      <v-row justify="center">
        <v-col cols="10" sm="8">

          <v-card elevation='0'>
            <v-card-title>お問い合わせ</v-card-title>
            <v-form>

              <!-- contact.category に選択結果が入る -->
              <v-card-actions>
                <v-chip-group v-model="contact.category" active-class="info--text" mandatory>
                  <v-chip v-for="category in categories.data.contents" :key="category.id" :value="category.id">
                    {{ category.name }}
                  </v-chip>
                </v-chip-group>
              </v-card-actions>

              <v-card-text class='mt-n5 mb-n10'>
                <v-textarea v-model="contact.message" solo clearable required auto-grow rows="3"></v-textarea>
              </v-card-text>

              <v-card-actions>
                <v-btn text class="info">送信</v-btn>
              </v-card-actions>
            </v-form>
          </v-card>

          <div v-for="reply in replys.data.contents" :key="reply.id">
            <v-card v-if="contact.category == reply.to.category.id">
            <v-card-text class="info--text">
              {{ reply.to.body }}
            </v-card-text>
            <v-card-text>
              {{ reply.body }}
            </v-card-text>
            </v-card>
          </div>
        </v-col>
      </v-row>
    </v-container>
  </v-main>
  <TheFooter />
</div>
</template>
<script>
import axios from "axios"
export default {
  data: () => ({
    contact: {
      category: "",
      message: "",
    }
  }),
  async asyncData({
    $axios,
    $config
  }) {
    const replys = await $axios.get("https://kuwiki.microcms.io/api/v1/contact-reply", {
      headers: {
        "X-API-KEY": $config.WIKI_MICROCMS_API_KEY,
      },
    })
    const categories = await $axios.get(
      "https://kuwiki.microcms.io/api/v1/contact-categories", {
        headers: {
          "X-API-KEY": $config.WIKI_MICROCMS_API_KEY,
        },
      }
    )
    return {
      replys,
      categories
    }
  },
  methods: {
    postMessage() {
      axios.post("https://kuwiki.microcms.io/api/v1/contact-categoriesQ", {
        headers: {
          "X-WRITE-API-KEY": "95120f31-3461-4dcd-ad90-a1fb54ad24a7",
        }
      }
    )
    // useridをわたす 成功時メッセージ表示 エラーハンドリング
  }
}
}
</script>
