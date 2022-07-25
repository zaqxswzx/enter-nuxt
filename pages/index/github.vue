<script>
export default {};
</script>

<template lang="pug">
.github
  .content
    h1 Github
    a(href="https://github.com/zaqxswzx/enter-nuxt", title="Vue專案（github）") Vue專案（github）
    a(href="https://github.com/zaqxswzx/laravel-project", title="Laravel專案（github）") Laravel專案（github）
</template>

<style lang="sass" scoped>
.github
  height: 100%
  display: flex
  justify-content: center
  align-items: center
.content
  height: 100%
  text-align: center
h1 
  margin-top: 153px
  padding: 10px
a 
  text-decoration: none
  color: #000
  display: block
  transition: 0.5s
  padding: 10px
  &:hover 
    color: #FA7
</style>