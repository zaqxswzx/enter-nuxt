import { apiGetCoursesList } from "~/api"
export const state = () => ({
  courses: null
})
export const actions = {
  async getApi({ commit }) {
    try {
      const res = await apiGetCoursesList()
      console.log("off");
      console.log("data => ", res.data)
      commit('setRes', res.data)

    } catch (error) {
      console.log("error");
    }
  }
}
export const mutations = {
  setRes(state, data) {
    state.courses = data
  }
}
export const getters = {
  coursesList(state) {
    return state.courses
  }
}