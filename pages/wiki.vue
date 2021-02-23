<template>
  <div>
    <v-main>
      <v-container>
        <v-row justify="center">
          <v-col cols="11" sm="3" class="mb-n4">
            <v-chip-group
              v-model="selectedCategory"
              active-class="info--text"
              mandatory
              column
            >
              <v-chip
                v-for="category in categories"
                :key="category.id"
                :value="category.id"
              >
                {{ category.name }}
              </v-chip>
            </v-chip-group>
          </v-col>

          <v-col cols="11" sm="8">
            <v-expansion-panels>
              <v-expansion-panel v-for="article in articles" :key="article.id">
                <v-expansion-panel-header>
                  {{ article.title }}
                </v-expansion-panel-header>
                <v-expansion-panel-content>
                  {{ article.body }}
                </v-expansion-panel-content>
              </v-expansion-panel>
            </v-expansion-panels>
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
  data: () => ({
    selectedCategory: "",
    categories: [],
    articles: []
  }),
  watch: {
    selectedCategory() {
      axios
        .get(
          `https://kuwiki.microcms.io/api/v1/wiki/?filters=category[equals]${this.selectedCategory}`,
          {
            headers: {
              "X-API-KEY": process.env.WIKI_MICROCMS_API_GET_KEY
            }
          }
        )
        .then((res) => {
          this.articles = res.data.contents
        })
    }
  },
  async created() {
    await axios
      .get("https://kuwiki.microcms.io/api/v1/wiki-categories", {
        headers: {
          "X-API-KEY": process.env.WIKI_MICROCMS_API_GET_KEY
        }
      })
      .then((res) => {
        this.categories = res.data.contents
      })
  }
}
</script>
