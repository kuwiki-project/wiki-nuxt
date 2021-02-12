<template>
  <div>
    <v-main>
      <v-row justify="center">
        <v-col cols="10" sm="8">
          <v-card-title>お問い合わせ</v-card-title>

          <!-- selectedCategory は選択結果 -->
          <v-chip-group
            v-model="selectedCategory"
            active-class="info--text"
            mandatory
            column
            class="mb-n3 mx-5"
          >
            <v-chip
              v-for="category in categories"
              :key="category.id"
              :value="category.id"
            >
              {{ category.name }}
            </v-chip>
          </v-chip-group>

          <v-card-text class="mb-n10">
            <v-textarea
              v-model="inputMessage"
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
            <v-btn class="info" rounded @click="postMessage">
              送信
            </v-btn>
          </v-card-actions>

          <div v-for="reply in replys" :key="reply.id">
            <div v-if="reply.to.category.id === selectedCategory">
              <v-card class="my-3 mx-4">
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
import Swal from "sweetalert2"
export default {
  auth: false,
  data: () => ({
    selectedCategory: "",
    inputMessage: "",
    replys: [],
    categories: [],
  }),
  watch: {
    selectedCategory() {
      axios
        .get("https://kuwiki.microcms.io/api/v1/contact-reply/", {
          headers: {
            "X-API-KEY": process.env.WIKI_MICROCMS_API_GET_KEY,
          },
        })
        .then((res) => {
          this.replys = res.data.contents
        })
    },
  },
  async created() {
    await axios
      .get("https://kuwiki.microcms.io/api/v1/contact-categories", {
        headers: {
          "X-API-KEY": process.env.WIKI_MICROCMS_API_GET_KEY,
        },
      })
      .then((res) => {
        this.categories = res.data.contents
      })
  },
  methods: {
    postMessage() {
      axios
        .post("https://kuwiki.microcms.io/api/v1/contact", {
          headers: {
            "X-WRITE-API-KEY": process.env.WIKI_MICROCMS_API_POST_KEY,
          },
          data: {
            category: this.selectedCategory,
            body: this.inputMessage,
            user: "yamamura.sanami.76a@st.kyoto-u.ac.jp",
          },
        })
        .then((res) => {
          Swal.fire({
            text: "問い合わせを送信しました",
            showConfirmButton: false,
            showCloseButton: false,
            timer: 3000,
          })
          return res
        })
        .catch((e) => {
          Swal.fire({
            title: "エラー",
            text: "送信に失敗しました",
            showConfirmButton: false,
            showCloseButton: false,
            timer: 3000,
          })
        })
    },
  },
}
</script>
