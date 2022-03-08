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
<template>
  <div>
    <div class="navRouter">
      <linkRouter />
    </div>
    <div id="courses">
      <a
        class="card"
        v-for="item in takeCoursesList"
        :key="item.id"
        @click.left="goToCourses(item.id)"
        @click.middle="openNewTab(item.id)"
      >
        <img :src="item.photo" alt="" />
        <div class="content">
          <h1>{{ item.name }}</h1>
          <div class="teacher-box">
            <div class="teach-img">
              <img class="teacher" :src="item.teacher.img" alt="" />
              <p>{{ item.teacher.name }}</p>
            </div>
            <h2>NTD: {{ item.money }}</h2>
          </div>
        </div>
      </a>
    </div>
  </div>
</template>

<style lang="scss" scoped>
#courses {
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translateX(-50%) translateY(-50%);
}
.navRouter {
  position: fixed;
  top: 20px;
  left: 20px;
}
a.card {
  cursor: pointer;
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