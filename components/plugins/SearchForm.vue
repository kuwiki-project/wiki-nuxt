<template>
<v-row align='center' justify='center'>
  <span id='searchform' class='mx-auto'>
    <v-text-field prepend-inner-icon="mdi-magnify" autofocus v-model="searchKeys" @keyup="searchItems">
    </v-text-field>
    <ul>
      <li v-for="searchItem in searchItems()">
      </li>
    </ul>
  </span>
</v-row>
              <nuxt-link class='itemlink' :to="`${$route.path}/${searchItem.id}`">
                <div>{{ searchItem.name }}</div>
              </nuxt-link>
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
  width: 400px;
  opacity: 0.8;
}
</style>
