<template>
  <div>
    <v-main>
      <v-row justify="center">
        <v-col cols="10" sm="8">
          <v-card-title>お問い合わせ</v-card-title>

          <!-- contact.category は選択結果 -->
          <v-chip-group v-model="contact.category" active-class="info--text" mandatory column class="mb-n3 mx-5">
            <v-chip v-for="category in categories.data.contents" :key="category.id" :value="category.id">
              {{ category.name }}
            </v-chip>
          </v-chip-group>

          <v-card-text class="mb-n10">
            <v-textarea
              v-model="contact.message"
              filled
              clearable
              required
              auto-grow
              shaped
              rows="3"
            />
          </v-card-text>

          <v-card-actions class="mx-3">
            <v-spacer />
            <v-btn class="info" rounded>
              送信
            </v-btn>
          </v-card-actions>


          <div v-for="reply in replys.data.contents" :key="reply.id">
            <div v-if="reply.to.category.id === contact.category">
              <v-card class="mt-6 mx-4">
                <v-card-text>
                  <div class="info--text">
                    {{ reply.to.body }}
                  </div>
                  <div>
                    {{ reply.body }}
                  </div>
                </v-card-text>
              </v-card>
            </div>
          </div>
        </v-col>
      </v-row>
    </v-main>
    <TheFooter />
  </div>
</template>
<script>
import axios from "axios"
export default {
  auth: false,
  async asyncData({
    $axios,
    $config
  }) {
    const replys = await $axios.get(
      "https://kuwiki.microcms.io/api/v1/contact-reply", {
        headers: {
          "X-API-KEY": $config.WIKI_MICROCMS_API_GET_KEY
        }
      }
    )
    const categories = await $axios.get(
      "https://kuwiki.microcms.io/api/v1/contact-categories", {
        headers: {
          "X-API-KEY": $config.WIKI_MICROCMS_API_GET_KEY
        }
      }
    )
    return {
      replys,
      categories
    }
  },
  data: () => ({
    contact: {
      category: "",
      message: ""
    }
  }),
  methods: {
    postMessage({
      context
    }) {
      axios.post("https://kuwiki.microcms.io/api/v1/contact", {
        headers: {
          "X-WRITE-API-KEY": context.$context.WIKI_MICROCMS_API_POST_KEY
        }
      })
      // Useridをわたす 成功時メッセージ表示 エラーハンドリング
    }
  }
}
</script>
