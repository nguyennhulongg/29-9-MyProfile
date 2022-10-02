import axiosClient from "./AxiosClient";


const noteApi = {
  getAll: (params) => {
    const url = "https://6336bb8365d1e8ef26722596.mockapi.io/long-project/note";
    return axiosClient.get(url, { params })
  },
  delete: (id) => {
    const url = `https://6336bb8365d1e8ef26722596.mockapi.io/long-project/note/${id}`;
    return axiosClient.delete(url)
  }, 
  post: (note) => {
    const url = "https://6336bb8365d1e8ef26722596.mockapi.io/long-project/note"
    return axiosClient.post(url, note)
  },
  put: (id, data) => {
    const url = `https://6336bb8365d1e8ef26722596.mockapi.io/long-project/note/${id}`;
    return axiosClient.put(url, data)
  }
}

export default noteApi;
