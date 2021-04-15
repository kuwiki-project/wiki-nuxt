<template>
  <div>
    <v-main>
      <v-container>
        <v-row justify="center">
          <v-card flat class="d-flex align-start flex-column my-5">
            <img src="/kiwi.svg" width="80" class="mx-auto" />
            <div class="my-3 sitazoroe">
              <span class="daiji">京大wiki</span>とは
              <br />京大生のための情報サイト
            </div>
          </v-card>
        </v-row>

        <v-row justify="center">
          <v-card flat class="d-flex align-start flex-column mb-10">
            <div class="my-3">
              <v-card-title>
                <span>過去問</span>
              </v-card-title>
              <ButtonRoundIconText link="/search" text="探す" icon="$search" />
              <ButtonRoundIconText
                link="/upload-exams"
                text="提供"
                icon="$upload"
              />
            </div>
            <div class="my-3">
              <v-card-title>
                <span>wiki</span>
              </v-card-title>
              <ButtonRoundIconText link="/wiki" text="読む" icon="$book" />
              <ButtonRoundIconText
                link="https://hackmd.io/@kuwiki-editors/home/edit"
                text="書く"
                icon="$edit"
              />
            </div>
            <div class="my-3">
              <v-card-title>
                <span>REST API</span>
              </v-card-title>
              <ButtonRoundIconText
                link="http://api.kuwiki.net/docs"
                text="ドキュメント"
                icon="$json"
              />
            </div>
            <div class="my-3">
              <v-card-title>
                <span>開発</span>
              </v-card-title>
              <ButtonRoundIconText
                link="https://github.com/kuwiki-project/wiki-nuxt"
                text="ソースコード"
                icon="$code"
              />
            </div>
          </v-card>
        </v-row>
      </v-container>
    </v-main>
    <TheFooter />
  </div>
</template>
<script>
export default {
  auth: false
}
</script>
<style scoped>
.sitazoroe {
  vertical-align: text-bottom;
}

.daiji {
  font-size: 1.6rem;
}
</style>
