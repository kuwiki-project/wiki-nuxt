<template>
  <div class="scroll-page">
    <h1>運営について</h1>
    <h3>京大wikiとは</h3>
    <p>
      学生の立場で学内の資料を共有し，引き継ぐことを目的としたプロジェクトです
    </p>
    
    <h3>問い合わせ</h3>
  
    <p>
      <a href="mailto:kuwiki99@gmail.com" target="_blank" class="link-text"><MailIcon size="1.5x" class="link-icon" />kuwiki99@gmail.com</a>
    </p>
    <p>
      <a href="https://twitter.com/kuwiki99" target="_blank" class="link-text"><TwitterIcon  size="1.5x" class="link-icon" />kuwiki99</a>
    </p>
    
    <p>
      <a href="https://github.com/kuwiki-project" target="_blank" class="link-text"><GithubIcon  size="1.5x" class="link-icon" />kuwiki-project</a>
    </p>

    <h3>
      運営って何をしてるの
    </h3>
    <p>
      京大wikiの運営はこのwebサイトの維持管理を行っています<br>
      仕事は大きく，過去問整理，記事編集，システム開発の三つに分かれています．<br />
      <ul>
        <li>過去問整理</li>
        過去問を収集・整理して公開できる状態にします．
        <li>記事編集</li>
        京大wikiに掲載する記事の編集を行います．
        <li>システム開発</li>
        京大wikiでは，Nuxt.js，Django，GAS，Git，Pythonなどの技術を用いてプラットフォームであるこのwebサイトを整備しています．
      </ul>
    </p>

    <h3>運営者募集</h3>
    <p>
      京大wikiの運営者を募集しています．<br />
      京大wikiの運営に興味がある方はTwitterのDMまたはメールにてご連絡ください．
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
