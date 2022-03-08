import axios from 'axios'

const courses = axios.create({
  baseURL: 'https://vue-lessons-api.herokuapp.com/'
})

courses.interceptors.request.use(
  (config) => {
    console.log("請求發起前");
    return config;
  },
  (error) => {
    console.dir(error)
    return Promise.reject(error);
  }
);

courses.interceptors.response.use(
  (response) => {
    console.log("請求發起後");
    return response;
  },
  (error) => {
    console.log("error in response")
    return Promise.reject(error);
  }
);


export const getCoursesList = () => courses.get('/courses/list')
