<script>
import axios from "axios";
import { Power1 } from "gsap";
export default {
  data() {
    return {
      movies: [],
      cart: [],
      currentMovie: null,
      isCartOpen: false,
    };
  },
  created() {
    let apiUrl =
      "https://awiclass.monoame.com/api/command.php?type=get&name=movies";
    axios.get(apiUrl).then((res) => {
      this.movies = res.data;
    });
  },
  methods: {
    bgcss(url) {
      return {
        "background-image": "url(" + url + ")",
        "background-position": "center center",
        "background-size": "cover",
      };
    },
    wheel(evt) {
      const TweenMax = this.$gsap;
      console.log(evt.deltaY);
      TweenMax.from(".cards", 0.5, {
        left: "+=" + evt.deltaY * 1 + "px",
      });
    },
    addCart(movie, evt) {
      const TweenMax = this.$gsap;
      this.currentMovie = movie;
      let target = evt.target;
      // $nextTick 等待vue更新html後執行
      this.$nextTick(() => {
        console.log("ok");
        TweenMax.from(".buybox", 0.8, {
          left: $(evt.target).offset().left,
          top: $(evt.target).offset().top,
          opacity: 1,
          ease: Power1.easeOut,
        });
        setTimeout(() => {
          this.cart.push(movie);
        });
        console.log(evt);
      });
    },
    toHome() {
      console.log("toHome");
      this.$router.push("/");
    },
    toCourses() {
      console.log("toCourses");
      this.$router.push("/courses");
    },
  },
  computed: {
    totalPrice() {
      return this.cart
        .map((movie) => movie.price)
        .reduce((total, p) => total + p, 0);
    },
  },
  watch: {
    cart() {
      const TweenMax = this.$gsap;
      TweenMax.from(".fa-cart-arrow-down", 0.3, {
        scale: 0.5,
      });
    },
  },
};
</script>

<template lang="pug">
#app
  .router
    .home(@click="toHome") Home
    .courses(@click="toCourses") Courses
  .apptitle Vue.js Theater
  .movie(@wheel.prevent="wheel")
    .cards(:class="{ isCartOpen: isCartOpen }")
      .card(v-for="movie in movies")
        .left
          .cover(:style="bgcss(movie.cover)")
        .right
          h2 {{ movie.name }}
          h4 {{ movie.type }}
          p(v-html="movie.description")
          .price {{ movie.price }}$
          button.add(@click="addCart(movie, $event)") + Add to My Cart
  .buybox(:style="bgcss(currentMovie.cover)", v-if="currentMovie")

  .fixed-control(@click="isCartOpen = !isCartOpen")
    i.fas.fa-cart-arrow-down
    font-awesome-icon(icon="fa-cart-arrow-down")
    span {{ cart.length }}
  .control(:class="{ isCartOpen: isCartOpen }")
    .panel
      h2 My Movie Cart
      ul
        li(v-for="(movie, mid) in cart")
          .thumbnail(:style="bgcss(movie.cover)")
          h3 {{ movie.name }}
            .price {{ movie.price }}$
            .remove(@click="cart.splice(mid, 1)") -
        li(v-if="!cart.length")
          h3 Your Cart is empty! :(
      hr
      h2 {{ totalPrice }}$
</template>

<style lang="sass" scoped>
@import url('https://fonts.googleapis.com/css?family=Roboto:100,300,400,500,700,900')
=size($w,$h:$w)
  width: $w
  height: $h
=flexCenter
  display: flex
  justify-content: center
  align-items: center
=bxshadow
  box-shadow: 0 5px 25px 5px rgba(black,0.2)
=fixedPos($l,$t)
  position: fixed
  left: $l
  top: $t

*
  vertical-align: center
  outline: none

#app
  +size(100%)
  position: fixed
  top: 50%
  left: 50%
  transform: translateX(-50%) translateY(-50%)
  background-color: #111
  display: flex
  overflow: hidden
.router
  position: fixed
  top: 15px
  left: 15px
  color: white
  // margin: 20px
  z-index: 999
  display: flex
  > div
    margin: 10px
    transition: color 0.5s
    &:hover
      cursor: pointer
      color: yellow
.apptitle
  +fixedPos(65px,65px)
  color: white
  font-size: 30px
  font-weight: bold
.cards
  +flexCenter
  height: 796px
  justify-content: left
  // 以左側作排列
  margin-left: 20vw
  margin-right: 20vw
  position: relative
  left: 0px
  transition: 0.5s, left 0s
  &.isCartOpen
    transform: scale(0.8)
.card
  margin: 60px
  +size(460px,auto)
  flex-shrink: 0
  display: inline-flex
  background-color: rgba(white,0.9)
  transition: 0.5s
  border-radius: 5px
  +bxshadow
  padding: 20px
  color: #888
  padding-bottom: 0

  .left
    flex: 1
    margin-bottom: -15px
    .cover
      +size(180px,240px)
      border-radius: 5px
      +bxshadow
      transition: 0.5s
      position: relative
      top: -50px
  .right
    flex: 2
    padding: 20px
    padding-top: 10px
    h2
      margin: 0
      font-weight: bold
      font-size: 24px
      color: #444
    h4
      margin-top: 10px
      margin-bottom: 10px
      opacity: 0.8
      font-weight: normal
    p
      font-size: 13px
      line-height: 1.3
      text-align: justify
      opacity: 0.8
      min-height: 5em
    .price
      margin-right: 20px
    button
      padding: 5px 10px
      background-color: #bbb
      color: rgba(white,0.9)
      border-radius: 50px
      cursor: pointer
      transition: 0.5s
      &:hover
        color: white
        background-color: #f95e5e
  &:hover
    transform: translateY(-10px)
    .left .cover
      transform: translateY(-10px)
.fixed-control
  position: fixed
  right: 30px
  top: 30px
  color: white
  z-index: 1000
  opacity: 0.5
  cursor: pointer
  transition: 0.5s
  &:hover
    opacity: 1
  i
    font-size: 30px
    margin-right: 10px
.buybox
  +size(50px,80px)
  background-color: #fff
  position: fixed
  right: 30px
  top: 30px
  opacity: 0

.control
  +size(100%)
  +fixedPos(0,0)
  +flexCenter
  color: #eee
  background-image: linear-gradient(10deg,#111 0%, #111 50%, transparent 100%)
  padding: 5vw
  box-sizing: border-box
  opacity: 0
  pointer-events: none
  transition: 0.5s
  &.isCartOpen
    opacity: 1
    pointer-events: initial
  .panel
    width: 70%
  ul
    padding: 0
    list-style: none
    li
      display: flex
      padding: 5px 10px
      margin-bottom: 5px
      margin-top: 5px
      cursor: pointer
      border-radius: 5px
      transition: 0.5s
      &:hover
        background-color: rgba(white,0.1)
        transform: translateY(-10px)
      h3
        font-size: 17px
        font-weight: normal
        width: 100%
        opacity: 0.8
        .price
          float: right
        .remove
          display: inline-block
          padding: 4px 15px
          background-color: rgba(white,0.3)
          border-radius: 50px
          font-size: 17px
          transition: 0.5s
          margin-left: 10px
          &:hover
            background-color: #ef4c4c
            color: black
      .thumbnail
        +size(50px,70px)
        margin-right: 20px
</style>