<template>
  <div>
    <v-main>
      <v-container>
        <v-row justify="center">
          <v-col cols="10" sm="8">
            <v-card flat>
              <p>{{ $config.BASE_URL }}</p>
              <v-card-title>お問い合わせ</v-card-title>
              <v-form>
                <!-- contact.category に選択結果が入る -->
                <v-card-actions>
                  <v-chip-group
                    v-model="contact.category"
                    active-class="info--text"
                    mandatory
                  >
                    <v-chip
                      v-for="category in categories.data.contents"
                      :key="category.id"
                      :value="category.id"
                    >
                      {{ category.name }}
                    </v-chip>
                  </v-chip-group>
                </v-card-actions>

                <v-card-text class="mt-n5 mb-n10">
                  <v-textarea
                    v-model="contact.message"
                    solo
                    clearable
                    required
                    auto-grow
                    rows="3"
                  />
                </v-card-text>

                <v-card-actions>
                  <v-btn text class="info">
                    送信
                  </v-btn>
                </v-card-actions>
              </v-form>

              <v-card-text>
                <div v-for="reply in replys.data.contents" :key="reply.id">
                  <div v-if="reply.to.category.id === contact.category">
                    <div class="info--text">
                      {{ reply.to.body }}
                    </div>
                    <div>
                      {{ reply.body }}
                    </div>
                  </div>
                </div>
              </v-card-text>
            </v-card>
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
  async asyncData({ $axios, $config }) {
    const replys = await $axios.get(
      "https://kuwiki.microcms.io/api/v1/contact-reply",
      {
        headers: {
          "X-API-KEY": $config.WIKI_MICROCMS_API_GET_KEY
        }
      }
    )
    const categories = await $axios.get(
      "https://kuwiki.microcms.io/api/v1/contact-categories",
      {
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
    postMessage({ context }) {
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
