
<script>
import linkRouter from "../components/link.vue";
export default {
  components: {
    linkRouter,
  },
  data() {
    return {};
  },
};
</script>

<template lang="pug">
.theBox
  .navRouter
    linkRouter
  .nested
    nav.nestedRouter
      NuxtLink(to="/about") About
      NuxtLink(to="/github") Github
      NuxtLink(to="/thankyou") Thank You

    .content
      NuxtChild
      //- h1 hello
</template>

<style scoped lang="sass">
.theBox
  width: 100%
  height: 100%
  background-color: #00d8ff
  .navRouter
    position: fixed
    top: 20px
    left: 20px
  .nested
    position: fixed
    top: 50%
    left: 50%
    transform: translateX(-50%) translateY(-50%)
    .nestedRouter
      margin: 20px
      a
        margin-right: 10px
        text-decoration: none
        color: black
        transition: color 0.2s
        &:hover
          color: #0978e8
    .content
      background-color: #f2a521
      display: flex
      justify-content: center
      align-items: center
      border: 1px solid #000
      border-radius: 5px
      width: 500px
      height: 500px
</style>