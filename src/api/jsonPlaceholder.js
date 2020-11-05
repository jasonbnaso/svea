import axios from "axios";

export const getMessages = () => {
  return axios.get("https://jsonplaceholder.typicode.com/posts/1/comments");
};
