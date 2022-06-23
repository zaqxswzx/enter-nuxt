
<script>
export default {
  components: {},
  data() {
    return {
      movieName: ["風飛鯊", "風飛鯊2", "風飛鯊3", "風飛鯊4"],
      movieEng: ["sharknado", "sharknado2", "sharknado3", "sharknado4"],
      movieStory: [
        "故事敘述一場怪物級的颶風襲捲洛杉磯，導致市區大淹水，而海中的鯊魚則被吹上陸地到處吃人...",
        "前集過後，芬恩和艾波前往紐約市以參加艾波所創作的《How to Survive a Sharknado and ...",
        "故事敘述風飛鯊英雄芬恩·謝波德在華盛頓特區從總統手中獲得了榮譽勳章，但在一場風飛鯊...",
        "故事敘述芬恩在艾波於前集死亡後，他們的新兒子吉爾已五歲。因「太空X...",
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
    .container-fluid 
      .ab.row 
        #carouselExampleControls.myCarousel.carousel.slide
          .carousel-inner
            .carousel-item.active
              img.d-block.w-100(src="@/assets/view5.jpg", alt="")
              .carousel-caption.d-none.d-md-block
                .thecard
                  .card-body
                    h5.card-title NO.115
                    p.card-text 三人成虎
            .carousel-item
              img.d-block.w-100(src="@/assets/view3.jpg", alt="")
              .carousel-caption.d-none.d-md-block
                .thecard
                  .card-body
                    h5.card-title NO.013
                    p.card-text 初春漾水
            .carousel-item
              img.d-block.w-100(src="@/assets/view4.jpg", alt="")
              .carousel-caption.d-none.d-md-block
                .thecard
                  .card-body
                    h5.card-title NO.603
                    p.card-text 綠草花紅
          button.carousel-control-prev(
            type="button",
            data-bs-target="#carouselExampleControls",
            data-bs-slide="prev"
          )
            span.carousel-control-prev-icon(aria-hidden="true")
            span.visually-hidden Previous
          button.carousel-control-next(
            type="button",
            data-bs-target="#carouselExampleControls",
            data-bs-slide="next"
          )
            span.carousel-control-next-icon(aria-hidden="true")
            span.visually-hidden Next
  .movieTitle 
    .container 
      .col.text-center 
        h2 系列電影
  .movieWall
    .container
      .row.row-md-4
        .movie-stretch.col-sm-12.col-md-6.col-lg-3(
          v-for="(item, idx) in movieName",
          :key="item"
        )
          .card.card-movie
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
        .col-xs-12.text-center 
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
  .thecard
    left: 300px
@media (min-width: 576px)
  .ab
    margin-right: -50px
    margin-left: -50px
@keyframes cardShow
  from
    top: 100px
    opacity: 0
  to
    top: -250px
    opacity: 1

.theBox
  width: 100%
  height: 100%
  .myCarousel
    margin-bottom: 50px
    .carousel-inner
      position: relative
      .carousel-item
        position: relative
        img
          height: 500px
          object-fit: cover
        .carousel-caption
          .thecard
            opacity: 0
            position: absolute
            .card-body
              .card-title
                background-color: black
                color: white
                padding: 10px
                margin: 0
              .card-text
                background-color: rgba(255,255,255,0.8)
                color: black
                margin: 0
                writing-mode: vertical-lr
                display: flex
                justify-content: center
                align-items: center
                width: 100%
                padding: 20px 0

.carousel-item.active
  .thecard
    animation-name: cardShow
    animation-duration: 3s
    animation-fill-mode: forwards
    width: 150px
.movieTitle
  margin-bottom: 50px
  h2
    padding-bottom: 25px
    border-bottom: 1px solid #000
.movieWall
  align-items: stretch
  .card-movie
    margin-bottom: 20px
    .card-body
      a
        text-decoration: none
        color: black
        font-weight: bold
        float: right
.movie-stretch
  align-items: stretch
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
  overflow: hidden
  a
    margin-right: 40px
    text-decoration: none
    color: black
    transition: color 0.2s
    &:hover
      color: #0978e8
.content
  border: 1px solid #000
  border-radius: 5px
  display: flex
  justify-content: center
  align-items: center
  width: 100%
  height: 500px
</style>