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
        <search-icon class="search-icon"></search-icon>
      </div>
    </form>
    
    <div class="result-container">
      <ul class="ul-none">
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
            class="link-underline"
            :to="`courses/${searchresult.name}`"
          >
            {{ searchresult.name }}
          </NuxtLink>
          <a
            v-for="exam in searchresult.exam_set"
            :key="exam.drive_link"
            :href="exam.drive_link"
            target="_blank"
          >
            <IconGoogleDrive class="icon-google-drive icon-with-text"></IconGoogleDrive>
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
  width: 100%;
  margin: 1em auto;
}

.input-container {
  position: relative;
  width: 100%;
}

/* Style the input fields */
.input-field {
  box-sizing: border-box;
  border: 0.1em solid gray;
  background: whitesmoke;
  padding: 0 0 0 2.5em;
  height: 2.2em;
  border-radius: 1em;
  font-weight: 300;
  outline: none;
  width: 100%;
  -webkit-appearance: none;
}
.input-field:focus{
  border:0.1em solid var(--color-primary);
}
.input-field:focus + .search-icon{
  color:cornflowerblue;
}

.search-icon{
  position: absolute;
  top: 0;
  left: 0;
  padding: 0.4em 0.5em;
  height: 1.4em;
  width: 1.4em;
  color: inherit;
}
</style>