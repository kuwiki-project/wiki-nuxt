<template>
  <v-row justify="center">
    <v-col cols="10" sm="8">
      <v-form>
        <v-text-field
          v-model="searchkey"
          type="text"
          prepend-inner-icon="$search"
          clearable
          solo
          rounded
          class="mx-auto my-5"
          label="科目名・教員名・学部"
        />
      </v-form>

      <div class="mt-n2 mb-2 text-center">
        <!-- <p>{{ message }}</p> -->
        <v-progress-circular
          v-if="message === '入力中'"
          :size="50"
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
            </td>
          </tr>
        </tbody>
      </v-simple-table>
    </v-col>
  </v-row>
</template>
<script>
import axios from "axios";
import _ from "lodash";
export default {
  name: "SearchForm",
  data: () => ({
    items: "courses",
    searchkey: "",
    searchresults: [],
    message: "",
  }),
  watch: {
    searchkey() {
      this.message = "入力中";
      this.searchKeyword();
    },
  },
  created() {
    this.searchKeyword = _.debounce(this.hitApi, 200);
  },
  methods: {
    hitApi() {
      this.loading = true;
      axios
        .get(
          this.$config.WIKI_API_URL + "/api/course/?search=" + this.searchkey,
          {
            headers: {
              Authorization:
                "token" + this.$auth.getToken("local").replace("Bearer", ""),
            },
          }
        )
        .then((res) => {
          this.searchresults = res.data.results;
          this.message = "検索結果";
        })
        .catch((err) => {
          return err;
        });
    },
  },
};
</script>
<style scoped>
>>> .v-text-field {
  width: 350px;
}

>>> .v-input__prepend-inner {
  padding-right: 9px !important;
}

.itemlink {
  text-decoration: none;
}
</style>
