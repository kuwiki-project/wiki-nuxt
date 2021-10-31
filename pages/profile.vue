<template>
  <div class="scroll-page">
    <h1>運営について</h1>
    京大wikiは京大生有志が非営利に運営しています
    <h3>目的</h3>
    <p>
      京大wikiは，学生の立場で学内の資料を共有して代を超えて引き継ぐことを目的としています
    </p>
    
    <h3>問い合わせ</h3>
    <p>
      <a href="mailto:kuwiki99@gmail.com" target="_blank" class="link-underline"><MailIcon class="icon-with-text" />kuwiki99@gmail.com</a><br>
      <a href="https://twitter.com/kuwiki99" target="_blank" class="link-underline"><TwitterIcon class="icon-with-text" />kuwiki99</a><br>
      <a href="https://github.com/kuwiki-project" target="_blank" class="link-underline"><GithubIcon class="icon-with-text" />kuwiki-project</a>
    </p>

    <h3>運営者募集</h3>
    <p>
      京大wikiの運営はこのwebサイトの維持管理のため，過去問整理，記事編集，システム開発などを行っています。<br>
      学部回生問わず，どなたでも歓迎いたします。
      加入希望/見学希望の方はお気軽にTwitterのDMまたはメールにてご連絡ください。
    </p>
  </div>
</template>
<script>
import { TwitterIcon, MailIcon,GithubIcon } from 'vue-feather-icons'
export default {
  auth: false,
  components: {
    TwitterIcon,
    MailIcon,
    GithubIcon
  },
  head: {
    title: "運営について"
  },
}
</script>
