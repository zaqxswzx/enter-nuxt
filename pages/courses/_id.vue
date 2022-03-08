<script>
import linkRouter from "@/components/link.vue";
export default {
  components: {
    linkRouter,
  },
  async asyncData(context) {
    let coursesId = context.params.id;
    await context.app.store.dispatch("coursesData/handApiData", coursesId);
  },
  computed: {
    getCoursesInfo() {
      return this.$store.getters["coursesData/getCoursesData"];
    },
    isError() {
      return this.$store.getters["coursesData/isError"];
    },
  },
  data() {
    return {
      timer: null,
    };
  },

  methods: {
    openLoading() {
      this.$nuxt.$loading.start();
      setTimeout(() => {
        this.$nuxt.$loading.finish();
      }, 2000);
    },
  },
  mounted() {
    if (this.isError) {
      this.timer = setTimeout(() => {
        this.$router.go(-1);
      }, 3000);
    }
  },
  destroyed() {
    clearTimeout(this.timer);
  },
};
</script>

<template lang="pug">
.courseCard
  .navRouter
    linkRouter
  .card(v-if="!isError")
    .content
      h1 {{ getCoursesInfo.data.name }}
      h2 NTD: {{ getCoursesInfo.data.money }}
      .person
        img(:src="getCoursesInfo.data.teacher.img")
        p {{ getCoursesInfo.data.teacher.name }}
    .back 
      img.classPhoto(:src="getCoursesInfo.data.photo")
  h1(v-if="isError") {{ getCoursesInfo.error_message.data }}
</template>

<style lang="sass" scoped>
.navRouter
  position: fixed
  top: 20px
  left: 20px
.courseCard
  display: flex
.card
  border: 1px solid #000
  background-color: #eee
  border-radius: 5px
  width: 500px
  height: 400px
  position: fixed
  top: 50%
  left: 50%
  transform: translateX(-50%) translateY(-50%)
  display: flex
  justify-content: center
  align-items: center
  &:hover
    .classPhoto
      opacity: 1
      transform: translateY(-15px) translateX(-15px)
      box-shadow: 10px 10px 15px rgba(black, 0.5)
  .back
    width: 100%
    height: 100%
    position: fixed
    top: 50%
    left: 50%
    transform: translateX(-50%) translateY(-50%)

    .classPhoto
      position: fixed
      bottom: 15%
      right: 15%
      transition: 0.5s
      opacity: 0.8
  .content
    position: relative
    pointer-events: none
.person
  margin-bottom: -25px
  display: flex
  justify-content: center
  align-items: center
  float: left
  img
    width: 20px
    height: 20px
    margin-right: 30px
    margin-left: 15px
h1
  margin: 0
  letter-spacing: -5px
h2
  margin: 0
  margin-top: 5px
</style>