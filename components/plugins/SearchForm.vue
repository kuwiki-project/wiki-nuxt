<template>
  <v-container>
    <v-row justify="center" align="center">
      <v-column cols="12">
        <div class="my-3 text-h5">
          {{ title }}
        </div>
        <div>
          <v-text-field v-model="searchkey" type="text" prepend-inner-icon="mdi-magnify" clearable solo rounded></v-text-field>
        </div>
        <div class="text-center mt-n4">
          <!-- <p> {{message}} </p> -->
          <v-progress-circular v-if="message == '入力中'" class="text-center" :size="50" color="primary" indeterminate></v-progress-circular>
        </div>
        <div>
          <v-simple-table dense fixed-header>
            <tbody>
              <tr v-for="searchresult in searchresults" :key="searchresult.id">
                <td v-if="displayTable">
                  <NuxtLink no-prefetch class="itemlink black--text" :to="`${$route.path}/${searchresult.id}`">
                    {{ searchresult.name }}
                  </NuxtLink>
                </td>
              </tr>
            </tbody>
          </v-simple-table>
        </div>
        </div>
      </v-column>
    </v-row>
  </v-container>
</template>
<script>
import axios from "axios"
import _ from "lodash"
export default {
  props: {
    items: String,
    title: String,
  },
  data: () => ({
    searchkey: "",
    searchresults: [],
    displayTable: true,
    message: "",
  }),
  watch: {
    searchkey: function(newkeyword, oldkeyword) {
      this.message = "入力中"
      this.searchKeyword()
    },
  },
  created: function() {
    this.searchKeyword = _.debounce(this.hitApi, 200)
  },
  methods: {
    hitApi: function() {
      var SEARCH_API_URL =
        process.env.WIKI_API_URL +
        "/" +
        this.items +
        "/search/" +
        this.searchkey
      console.log(this.searchkey)
      axios
        .get(SEARCH_API_URL)
        .then((res) => {
          this.message = "検索結果"
          this.searchresults = res.data
          this.displayTable = true
        })
        .catch((err) => {
          this.message = err
          this.displayTable = false
        })
    },
  },
}
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
