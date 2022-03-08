<script>
export default {
  methods: {
    toHome() {
      this.$router.push("/");
    },
    toCourses() {
      this.$router.push("/courses");
    },
    toMovie() {
      this.$router.push("/movie");
    },
  },
};
</script>

<template lang="pug">
div
  .link 
    .home(@click="toHome") Home
    .courses(@click="toCourses") Courses
    .movie(@click="toMovie") Movie
</template>

<style lang="sass" scoped>
.link
  border: 2px solid #000
  border-radius: 10px
  display: flex
  width: fit-content
  > div
    margin: 10px
    cursor: pointer
    transition: color 0.5s
    &:hover
      color: #C5BEBE
      .link
        background-color: black
</style>