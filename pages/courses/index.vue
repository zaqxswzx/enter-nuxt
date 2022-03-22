<script>
import linkRouter from "@/components/link.vue";
export default {
  components: {
    linkRouter,
  },
  async asyncData(context) {
    await context.app.store.dispatch("getApi");
  },
  computed: {
    takeCoursesList() {
      // console.log("takeCoursesList=>", this.$store.getters.coursesList);
      return this.$store.getters.coursesList;
    },
  },
  methods: {
    goToCourses(id) {
      this.$router.push(`/courses/${id}`);
    },
    openNewTab(id) {
      const routeData = this.$router.resolve({ path: `/courses/${id}` });
      window.open(routeData.href, "_blank");
    },
  },
};
</script>
<template lang="pug">
div
  .container 
    .row 
      .col.text-center 
        .listTitle 
          h2 課程列表
  .container 
    .row 
      .aa.col-xs-12.col-sm-6.offset-sm-3
        #courses
          a.card(
            v-for="item in takeCoursesList",
            :key="item.id",
            @click.left="goToCourses(item.id)",
            @click.middle="openNewTab(item.id)"
          )
            img(:src="item.photo", alt)
            .content
              h1 {{ item.name }}
              .teacher-box
                .teach-img
                  img.teacher(:src="item.teacher.img", alt)
                  p {{ item.teacher.name }}
                h2 NTD: {{ item.money }}
</template>

<style lang="scss" scoped>
i {
  color: black;
}
.icon {
  color: red;
}
.listTitle > h2 {
  border-bottom: 1px solid #000;
  padding-bottom: 25px;
  margin-bottom: 50px;
}
.aa {
  display: flex;
  justify-content: center;
  align-items: center;
}
#courses {
  position: relative;
}
.navRouter {
  position: fixed;
  top: 20px;
  left: 20px;
}
a.card {
  cursor: pointer;
  text-decoration: none;
  color: green;
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  width: 318px;
  height: auto;
  padding: 10px;
  border-radius: 5px;
  box-shadow: 0 0 5px rgba($color: #000000, $alpha: 0.2);
  margin-bottom: 20px;
  opacity: 0.7;
  transition: opacity 0.5s, transform 0.5s;
  background-color: rgb(231, 231, 231);
  padding-bottom: 0;
  &:hover {
    opacity: 1;
    transform: translateY(-10px);
    > img {
      transform: translateY(-10px);
    }
  }
  > img {
    margin-right: 10px;
    transition: 0.5s;
  }
  .content {
    > h1 {
      font-size: 14px;
      text-align: left;
      margin-bottom: -15px;
    }
    .teacher-box {
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin-top: 5px;
      > h2 {
        font-size: 13px;
      }
      .teach-img {
        display: flex;
        justify-content: flex-start;
        align-items: center;
        > img {
          border-radius: 25px;
          margin-right: 10px;
        }
      }
    }
  }
}
</style>