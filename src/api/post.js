import axios from '@/api/axios'

const postData = (credentials) => {
  return axios.post('/posts', credentials)
}

export default {
  postData,
}
