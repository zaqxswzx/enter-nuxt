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
.delta
  .container 
    .row 
      .col 
        .courseTitle 
          p 課程資訊
    .row
      .thecard(v-if="!isError")
        .card
          img.classPhoto(:src="getCoursesInfo.data.photo")
          .card-body 
            .card-title
              h2 {{ getCoursesInfo.data.name }}
            .card-text
              .price 
                h4 NTD: {{ getCoursesInfo.data.money }}
              .person
                img(:src="getCoursesInfo.data.teacher.img")
                p {{ getCoursesInfo.data.teacher.name }}
              .back 
          h1(v-if="isError") {{ getCoursesInfo.error_message.data }}
</template>

<style lang="sass" scoped>
.clearfix:after
  clear: both
  content: ''
  display: table
.delta
  margin-bottom: 50px
.courseTitle
  margin-bottom: 40px
  p
    padding-bottom: 25px
    border-bottom: 1px solid #000
.aa
  height: 300px
.card
  border-radius: 10px
  width: 400px
  margin: 0 auto
  img.classPhoto
    border-radius: 10px
    transition: 0.5s
    height: 300px
  &:hover
    .classPhoto
      opacity: 1
      transform: translateY(-15px) translateX(-15px)
      box-shadow: 10px 10px 15px rgba(black, 0.5)
  .back
    width: 100%
    height: 100%
    .classPhoto
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
  position: relative
  img
    margin-top: -25px
    width: 20px
    height: 20px
    margin-right: 30px
    margin-left: 15px
  p
    margin-left: -15px
h1
  margin: 0
  letter-spacing: -5px
h2
  margin: 0
  margin-top: 5px
  font-size: 25px
</style>