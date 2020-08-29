<template>
<v-app id='search-form'>
  <v-row justify='center'>
    <span id='searchform'>
      <v-text-field solo rounded prepend-inner-icon="mdi-magnify" autofocus v-model="searchKeys" @keyup="searchItems">
      </v-text-field>
      <v-simple-table dense fixed-header>
        <tbody>
          <tr v-for="searchItem in searchItems()">
            <td>
              <nuxt-link class='itemlink' :to="`${$route.path}/${searchItem.id}`">
                <div>{{ searchItem.name }}</div>
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
export default {
  data: () => ({
    searchKeys: '',
  }),
  props: {
    Items: Array,
  },
  methods: {
    searchItems() {
      var hitItems = (item, index) => {
        if ((this.searchKeys != '') && ((item.name).indexOf(this.searchKeys) > -1)) {
          return true;
        }
      }
      return this.Items.filter(hitItems);
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
  opacity: 0.8;
  margin: 20px 10px 20px;
}

.itemlink {
  text-decoration: none;
}
</style>
