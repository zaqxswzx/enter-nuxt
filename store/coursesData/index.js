import axios from "axios"
export const state = () => ({
  courses: { data: {} },
  isError: false
})

export const actions = {
  async handApiData({ commit }, id) {
    try {
      const res = await axios.get(
        `https://vue-lessons-api.herokuapp.com/courses/${id}`
      );
      commit("addData", { data: res.data.data[0] })
    } catch (error) {
      commit("addError", { data: error.response.data.error_message })
    }
  }
}

export const mutations = {
  addData(state, data) {
    console.log("in mut")
    state.courses.data = data
  },
  addError(state, data) {
    state.courses.data["error_message"] = data
    state.isError = true
  },
}

export const getters = {
  getCoursesData: state => {
    return state.courses.data
  },
  isError: state => {
    return state.isError
  }
}