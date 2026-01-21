import axios from "axios";

const instance = axios.create({
  baseURL: "https://assignment-todolist-api.vercel.app/api/ara",
});

export default instance;
