<template>
  <div>
    <v-main>
      <v-container>
        <v-row justify="center">
          <v-card flat class="d-flex align-start flex-column my-5">
            <img src="/kiwi.svg" width="80" class="mx-auto mb-n6 mt-3" />
            <div class="mx-auto my-5 text-center">
              <div style="font-size: 1.5em">京大wiki</div>
              <div>京大生のための情報サイト</div>
            </div>
            <div class="my-3">
              <div style="font-size: 1.2em" class="ma-2">過去問</div>
              <ButtonRoundIconText link="/search" text="探す" icon="$search" />
              <ButtonRoundIconText
                link="/upload-exams"
                text="提供"
                icon="$upload"
              />
            </div>
            <div class="my-3">
              <div style="font-size: 1.2em" class="ma-2">wiki</div>
              <ButtonRoundIconText link="/wiki" text="読む" icon="$book" />
              <ButtonRoundIconText
                link="https://hackmd.io/@kuwiki-editors/home/edit"
                text="書く"
                icon="$edit"
              />
            </div>
            <div class="my-3">
              <div style="font-size: 1.2em" class="ma-2">API</div>
              <ButtonRoundIconText
                link="http://api.kuwiki.net/docs"
                text="ドキュメント"
                icon="$json"
              />
            </div>
            <div class="my-3">
              <div style="font-size: 1.2em" class="ma-2">開発</div>
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
