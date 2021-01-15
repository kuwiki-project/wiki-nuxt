<template>
<div>
  <v-main>
    <v-container>
      <v-row justify='center'>
        <v-col cols='12' sm='8'>
          <v-card elevation='0'>
             <v-form>
              <v-card-title>お問い合わせ</v-card-title>
                <v-chip-group v-model='request.genre' active-class="info--text" mandatory>
                  <v-chip　v-for='tag in tags' :key='tag'>{{tag}}</v-chip>
                </v-chip-group>
                <v-textarea solo v-model='request.message' clearable required auto-grow rows='3'></v-textarea>
                <v-btn plain class='info mt-n4'>送信</v-btn>
              </v-card-actions>
              </v-form>
          </v-card>
        </v-col>
      </v-row>
      <v-row justify='center'>
        <v-col cols="12" sm='8'>
          <div v-for='previousRequest in previousRequests' :key='previousRequest.message'>
            <v-card v-if="previousRequest.sender=='admin'">
              <v-card-text class='info--text'>
                <!-- && request.genre==previousRequest.genre の条件を追加すると表示されなくなる -->
                {{ previousRequest.message }}
              </v-card-text>
            </v-card>

            <v-card v-else-if="previousRequest.sender=='user'">
              <v-card-text>
                {{ previousRequest.message }}
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
  async asyncData() {
    const baseURL = process.env.WIKI_API_URL + "/contact"
    // const { data } = await axios.get(baseURL)
    // return { requests: data }
  },
  data: () => ({
    request: {
      genre: '',
      message: '',
    },
    tags: ['誤字', '新機能', 'バグ修正', '質問'],
    previousRequests: [{
        update: '2019-10-10',
        message: '豆乳ゴマ鍋美味しい',
        sender: 'user',
        genre: '誤字',
      },
      {
        update: '2019-10-10',
        message: 'ありがとう',
        sender: 'admin',
        genre: '誤字',
      }
    ]
  }),
  // computed: {
  //   genreMatch: function(){
  //     return this.previousRequest.genre == this.request.genre
  //   },
  // }
}
</script>
<style>
</style>
