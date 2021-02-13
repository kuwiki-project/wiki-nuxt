<template>
<v-app id='search-form'>
  <v-row justify='center'>
    <span id='searchform'>
      <div class='ml-15 my-3 text-h5'>{{ title }}</div>
      <v-text-field solo rounded prepend-inner-icon="mdi-magnify" autofocus
       v-model="keyword"
       v-on:input="searchItems">
      </v-text-field>
      <v-simple-table dense fixed-header>
        <tbody>
          <tr v-for="hitItem in hitItems">
            <td>
              <nuxt-link class='itemlink' :to="`${$route.path}/${hitItem.id}`">
                <div>{{ hitItem.name }}</div>
              </nuxt-link>
            </td>
          </tr>
        </tbody>
      </v-simple-table>
    </span>
  </v-row>
</v-app>
</template>
<script>
import axios from 'axios';
export default {
  data: () => ({
    keyword: '',
    hitItems: [],
  }),
  props: {
    items: String,
    title: String,
  },
  methods: {
    searchItems() {
      var SEARCH_API_URL = process.env.WIKI_API_URL + '/' + this.items + '/search/' + this.keyword
      axios.get( SEARCH_API_URL ).then(res => {
          this.hitItems = res.data
        });
    }
  }
}
</script>
<style>
span#searchform .v-text-field input {
  padding: 8px 10px 8px;
}

span#searchform {
  width: 350px;
  margin: 20px 10px 20px;
}

.itemlink {
  text-decoration: none;
  color: blue;
}
</style>
