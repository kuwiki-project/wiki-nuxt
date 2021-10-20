<template>
  <div class="scroll-page">
    <form class="search-form" target="_self" @submit.prevent="searchCourses"> 
      <div class="input-container">
        <input
          v-model="searchkey"
          type="text"
          class="input-field"
          placeholder="科目名・学部・教員名"
        />
        <button type="submit" class="search-button">
          <search-icon class="search-icon"></search-icon>
        </button>
      </div>
    </form>
    
    <div class="result-container">
      <ul>
        <li v-if="$route.query.q!=='' && $route.query.q!==undefined">
          {{
            message
          }}
          {{
            searchcount
          }}
        </li>
        <li v-for="searchresult in searchresults" :key="searchresult.id">
          <NuxtLink
            no-prefetch
            class="link-text"
            :to="`courses/${searchresult.name}`"
          >
            {{ searchresult.name }}
          </NuxtLink>
          <a
            v-for="exam in searchresult.exam_set"
            :key="exam.drive_link"
            :href="exam.drive_link"
            target="_blank"
            class="drive-link"
          >
            <IconGoogleDrive size="1.5x" class="drive-icon"></IconGoogleDrive>
          </a>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import { SearchIcon } from "vue-feather-icons"
import axios from "axios"
export default {
  components: {
    SearchIcon,
  },
  data: () => ({
    searchkey: "",
    searchresults: [],
    message: "",
    searchcount: ""
  }),

  fetch() {
    this.setSearchKey()
    this.searchCourses()
  },
  head: {
    title: "科目検索"
  },
  fetchOnServer: false,
  // URL上のクエリが上書きされた時にfetchする
  watch: {
    '$route.query': '$fetch'
  },
  methods: {
    setSearchKey() {
      this.searchkey = this.$route.query.q
    },
    searchCourses() {
      this.$router.push({ query: { q: this.searchkey } })
      if (this.searchkey === "") {
        this.searchcount = "0件"
        this.searchresults = []
      } else {
        this.message = "検索中..."
        this.searchcount = ""
        console.log("nyan1")
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
            console.log("nyan")
            this.searchresults = res.data.results
            this.searchcount = `${res.data.count}件`
            this.message = "検索結果"
          })
          .catch((err) => {
            console.log(err)
          })
      }
    }
  }
}
</script>
<style scoped>
.search-form {
  width: 90%;
  margin: 1em auto;
}

.input-container {
  display: flex;
  justify-content: center;
  width: 100%;
  margin: 1em 0;
}

/* Style the input fields */
.input-field {
  border: 0.1em solid gray;
  border-right: none;
  padding: 0em 0em 0em 1.2em;
  height: 2em;
  border-radius: 1em 0 0 1em;
  flex: auto;
  max-width: 21em;
  font-weight: 300;
  outline: none;
}
.search-button {
  width: 3em;
  height: 2.2em;
  border: none;
  background: cornflowerblue;
  text-align: center;
  color: white;
  border-radius: 0 1em 1em 0;
  cursor: pointer;
}
.search-icon{
  height: 1.4em;
}
.result-container{
  width: 26em;
  margin: 0 auto;
}
li{
  list-style: none;
  margin: 0.3em 0;
}
.drive-icon {
  height: 1.2em;
  width: 1.2em;
}
.drive-icon:hover{
 color: royalblue;
}
</style>