<template>
  <v-container class="px-18">
    <v-row>
      <v-card width="400" elevation="0" class="mx-auto" align="center">
        <v-card-title>
          {{ title }}
        </v-card-title>

        <v-text-field v-model="searchkey" type="text" prepend-inner-icon="mdi-magnify" clearable solo rounded width="500px"></v-text-field>

        <div class="mt-n2 mb-2">
          <p> {{ message }} </p>
          <v-progress-circular v-if="message == '入力中'" :size="50" color="primary" indeterminate></v-progress-circular>
        </div>

        <v-simple-table dense fixed-header>
          <tbody>
            <tr v-for="searchresult in searchresults" :key="searchresult.id">
              <td v-if="message == '検索結果'">
                <NuxtLink no-prefetch class="itemlink black--text" :to="`${$route.path}/${searchresult.id}`">
                  {{ searchresult.name }}
                </NuxtLink>
              </td>
            </tr>
          </tbody>
        </v-simple-table>

        </v-card-text>
        </div>
      </v-card>
    </v-row>
  </v-container>
</template>
<script>
import axios from "axios";
import _ from "lodash";
export default {
  props: {
    items: String,
    title: String,
  },
  data: () => ({
    searchkey: "",
    searchresults: [],
    message: "",
  }),
  watch: {
    searchkey: function (newkeyword, oldkeyword) {
      this.message = "入力中";
      this.searchKeyword();
    },
  },
  created: function () {
    this.searchKeyword = _.debounce(this.hitApi, 200);
  },
  methods: {
    hitApi: function () {
      var SEARCH_API_URL =
        process.env.WIKI_API_URL +
        "/" +
        this.items +
        "/search/" +
        this.searchkey;
      console.log(this.searchkey);
      axios
        .get(SEARCH_API_URL, {
          headers: {
            Authorization:
              "token" + this.$auth.getToken("local").replace("Bearer", ""),
          },
        })
        .then((res) => {
          this.message = "検索結果";
          this.searchresults = res.data;
        })
        .catch((err) => {
          this.message = err;
        });
    },
  },
};
</script>
<style>
.v-text-field input {
  padding: 8px 10px 8px;
}

.v-text-field {
  width: 350px;
  margin: 20px 10px 20px;
}

.itemlink {
  text-decoration: none;
}
</style>
