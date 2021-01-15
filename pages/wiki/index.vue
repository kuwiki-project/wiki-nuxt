<template>
  <v-main>
    <v-container>
      <h3>京大wiki</h3>
      <!-- <v-chip-group v-model="selectedCatefory" active-class="info--text" mandatory>
    <v-chip v-for='tag in tags' :key='tag.name'> {{tag}} </v-chip>
  </v-chip-group> -->
      <v-expansion-panels>
        <v-expansion-panel v-for="item in res.data.contents" :key="item.id">
          <v-expansion-panel-header>
            {{ item.title }}
          </v-expansion-panel-header>
          <v-expansion-panel-content>
            {{ item.body }}
          </v-expansion-panel-content>
        </v-expansion-panel>
      </v-expansion-panels>
    </v-container>
  </v-main>
</template>
<script>
import axios from "axios"
export default {
  async asyncData({ $axios }) {
    const res = await $axios.get("https://kuwiki.microcms.io/api/v1/wiki", {
      headers: {
        "X-API-KEY": process.env.WIKI_MICROCMS_API_KEY,
      },
    })
    return {
      res,
    }
  },
  data: () => ({
    tags: [{ name: "categories1" }, { name: "categories2" }],
  }),
}
</script>
