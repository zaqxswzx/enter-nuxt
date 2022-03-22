<script>
export default {
  methods: {
    openNavbar() {
      $(".my-navbar").toggleClass("open");
      console.log("ok");
    },
  },
};
</script>

<template lang="pug">
#app
  header
    .container-fluid
      .row
        .head
          .container-fluid 
            .row
              .iconPlace.col-xs-12.col-sm-2.col-md-3.offset-sm-10.offset-md-9.text-center
                font-awesome-icon.iconLogo.facebookIcon(
                  icon="fa-brands fa-facebook-square"
                )
                font-awesome-icon.iconLogo.instagramIcon(
                  icon="fa-brands fa-instagram-square"
                )
                font-awesome-icon.iconLogo.lineIcon(icon="fa-brands fa-line")
          .container 
            .fixHead.col-xs-6.col-sm-3.offset-sm-2 
              .headItem 
                .headtitle 
                  p 癮 。
                .headbody 
                  p 風雨欲來，春滿樓。
                  p 山嵐瀰盡，秋落地。
  .container-fluid
    .row
      nav.navbar.navbar-expand-lg.navbar-light
        .container-fluid 
          NuxtLink.navbar-brand(to="/") Kevin
          button.navbar-toggler(
            type="button",
            data-bs-toggle="collapse",
            data-bs-target="#navbarNav",
            aria-controls="navbarNav",
            aria-expanded="false",
            aria-label="Toggle navigation"
          )
            //- span.navbar-toggler-icon
            span
              img.ham(src="@/assets/meat.png")
          #navbarNav.collapse.navbar-collapse
            ul.navbar-nav
              li.nav-item
                NuxtLink.nav-link(to="/courses") 課程API
              li.nav-item
                NuxtLink.nav-link(to="/movie") 手刻電影
  .main 
    Nuxt
  footer.footer
    .container
      .row 
        .col-sm-6
          NuxtLink.creater.h4(to="/") Kevin
      .row
        .col-sm-6
          .myInfo
            p 姓名: 陳志
            p 連絡電話: 0919725019
            p Email: deleteoneman@gmail.com
</template>

<style lang="sass">
html,body
  width: 100%
  height: 100%
  margin: 0
#__nuxt,#__layout
  width: 100%
  height: 100%
#app
  width: 100%
  height: 100%

@keyframes showUp
  from
    top: 100px
    opacity: 0
  to
    top: 0
    opacity: 1

.head
  min-height: 70vh
  max-width: 100%
  background-color: #eee
  background-image: url(@/assets/view.jpg)
  background-position: center 35%
  position: relative
  .iconPlace
    margin-right: 0
    padding-right: 0
    .iconLogo
      margin-right: 15px
      cursor: pointer
    .facebookIcon:hover
      transition: 0.5s
      color: blue

    .instagramIcon:hover
      transition: 0.5s
      color: purple

    .lineIcon:hover
      transition: 0.5s
      color: #60b745
.fixHead
  position: relative
  .headItem
    position: absolute
    top: 100px
    display: inline-block
    margin-top: 75px
    animation-name: showUp
    animation-duration: 5s
    animation-fill-mode: forwards
    opacity: 0
    .headtitle
      background-color: rgba(0,0,0,0.4)
      color: white
      padding: 15px
      border-radius: 5px 5px 0 0
    .headbody
      padding: 15px
      padding-top: 50px
      padding-bottom: 50px
      background-color: rgba(255,255,255,0.4)
      writing-mode: vertical-lr
    p
      padding: 0
      margin: 0
.navbar
  background-color: rgba(255,255,255,0.8)
  border-bottom: 1px solid #bbb
  padding: 0
  margin-bottom: 70px
  button
    padding: 0
  span
    img.ham
      width: 50px
      height: 50px
.main
  width: 100%
  min-height: 100%
  // min-height可以讓footer乖乖地在下面
  margin-bottom: 50px
.footer
  background-color: #000
  padding-top: 40px
  padding-bottom: 40px
  text-align: left
  .creater
    color: white
    border: 1px solid #eae246
    padding: 5px
    display: inline-block
    text-decoration: none
  .myInfo
    margin-top: 10px
    p
      color: white
      margin: 0
      font-size: 12px
</style>