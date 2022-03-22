
<script>
import linkRouter from "../components/link.vue";
export default {
  components: {
    linkRouter,
  },
  data() {
    return {
      movieName: ["風飛鯊", "風飛鯊2", "風飛鯊3", "風飛鯊4"],
      movieEng: ["sharknado", "sharknado2", "sharknado3", "sharknado4"],
      movieStory: [
        "故事敘述一場怪物級的颶風襲捲洛杉磯，導致市區大淹水，而海中的鯊魚則被吹上陸地到處吃人...",
        "前集過後，芬恩和艾波前往紐約市以參加艾波所創作的《How to Survive a Sharknado and Other Unnatural Disasters》一書的簽書會，該書記載了關於洛杉磯風飛鯊事件的各種心得。但未料...",
        "故事敘述風飛鯊英雄芬恩·謝波德在華盛頓特區從總統手中獲得了榮譽勳章，但在一場風飛鯊將白宮摧毀殆盡後，芬恩擔心在奧蘭多環球影城遊玩的艾波、梅和克勞迪婭而打算趕緊去找她們；過程...",
        "故事敘述芬恩在艾波於前集死亡後，他們的新兒子吉爾已五歲。因「太空X」（Astro-X）的負責人雷諾斯研發的脈衝技術，使得已經五年沒有風飛鯊現象，所以名為...",
      ],
      movieLink: [
        "https://zh.wikipedia.org/wiki/%E9%A2%A8%E9%A3%9B%E9%AF%8A",
        "https://zh.wikipedia.org/wiki/%E9%A2%A8%E9%A3%9B%E9%AF%8A2",
        "https://zh.wikipedia.org/wiki/%E9%A2%A8%E9%A3%9B%E9%AF%8A3%EF%BC%9A%E9%BA%A5%E6%93%B1%E9%AC%A7%E5%95%8A%EF%BC%81",
        "https://zh.wikipedia.org/wiki/%E9%A2%A8%E9%A3%9B%E9%AF%8A4%EF%BC%9A%E9%AF%8A%E5%8A%9B%E8%A6%BA%E9%86%92",
      ],
    };
  },
};
</script>

<template lang="pug">
.theBox
  .myCarousel
    .container 
      .row 

  .movieTitle 
    .container 
      .col.text-center 
        h2 系列電影
  .movieWall
    .container
      .row.row-md-4
        .col-sm-12.col-md-6.col-lg-3(
          v-for="(item, idx) in movieName",
          :key="item"
        )
          .card
            img.card-img-top(:src="require(`~/assets/${movieEng[idx]}.jpg`)")
            .card-body
              h5.card-title {{ item }}
              p.card-text {{ movieStory[idx] }}
              a(:href="movieLink[idx]", target="_blank") More
  .nuxtNested 
    .container 
      .col-sm-12.text-center
        .nestName 
          h2 巢狀路由
    .container 
      .row 
        .col.text-center 
          nav.nestedRouter
            NuxtLink(to="/about") About
            NuxtLink(to="/github") Github
            NuxtLink(to="/thankyou") Thanks

    .container
      .row 
        .col-sm-6.offset-sm-3
          .nested
            .content
              NuxtChild
</template>

<style scoped lang="sass">
@media (max-width:576px)
  .card
    margin-bottom: 15px
.theBox
  width: 100%
  height: 100%
  .movieTitle
    margin-bottom: 50px
    h2
      padding-bottom: 25px
      border-bottom: 1px solid #000
  .movieWall
    .card
      .card-body
        a
          text-decoration: none
          color: black
          font-weight: bold
          float: right
.nuxtNested
  background-color: #eee
  padding-top: 25px
  padding-bottom: 25px
  margin-top: 50px
  .nestName
    margin-top: 25px
    margin-bottom: 50px
    h2
      padding-bottom: 25px
      border-bottom: 1px solid #000
.nestedRouter
  margin-bottom: 50px
  a
    margin-right: 50px
    text-decoration: none
    color: black
    transition: color 0.2s
    &:hover
      color: #0978e8
.nested
  padding: 50px
.content
  border: 1px solid #000
  border-radius: 5px
  display: flex
  justify-content: center
  align-items: center
  width: 100%
  height: 500px
</style>