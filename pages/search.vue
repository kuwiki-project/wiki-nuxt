<template>
  <div>
    <v-main>
      <v-container class="fill-hight">
        <v-row justify="center" align="start" class="mt-15 pt-15 mb-3">
          <img src="/kiwi.svg" width="80" />
        </v-row>
        <v-row justify="center">
          <v-col cols="10" sm="8">
            <SearchForm
              :searchkey="searchkey"
              labeltext="科目名"
              @update="searchkey = $event"
            />
            <div class="mt-n2 mb-2 text-center">
              <!-- <p>{{ message }}</p> -->
              <v-progress-circular
                v-if="message === '入力中'"
                color="primary"
                indeterminate
              />
            </div>

            <v-simple-table dense fixed-header>
              <tbody>
                <tr v-for="searchresult in searchresults" :key="searchresult.id">
                  <td v-if="message === '検索結果'">
                    <NuxtLink
                      no-prefetch
                      class="itemlink black--text"
                      :to="`courses/${searchresult.id}`"
                    >
                      {{ searchresult.name }}
                    </NuxtLink>

                    <v-btn
                      v-for="exam in searchresult.exam_set"
                      :key="exam.drive_link"
                      :href="exam.drive_link"
                      icon
                      small
                      target="”_blank”"
                    >
                      <v-icon small> $googledrive </v-icon>
                    </v-btn>
                  </td>
                </tr>
              </tbody>
            </v-simple-table>
          </v-col>
        </v-row>
      </v-container>
    </v-main>
  </div>
</template>
<script>
import debounce from "lodash.debounce"
import axios from "axios"
export default {
  data: () => ({
    items: "courses",
    searchkey: "",
    searchresults: [],
    message: ""
  }),
  watch: {
    searchkey() {
      this.message = "入力中"
      this.searchKeyword()
    }
  },
  created() {
    this.searchKeyword = debounce(this.hitApi, 200)
  },
  methods: {
    hitApi() {
      axios
        .get(
          `${this.$config.WIKI_API_URL}/api/course/?search=${this.searchkey}`,
          {
            headers: {
              Authorization: `token${this.$auth
                .getToken("local")
                .replace("Bearer", "")}`
            }
          }
        )
        .then((res) => {
          this.searchresults = res.data.results
          this.message = "検索結果"
        })
        .catch((err) => err)
    }
  }
}
</script>
