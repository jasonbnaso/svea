import axios from "axios";

export const getMessages = () => {
    return axios.get("https://jsonplaceholder.typicode.com/posts/1/comments");
  };
  
//   export const addMessage = ({ title, description }) => {
//     return axios.post("https://jsonplaceholder.typicode.com/todos/", { title, description });
//   };
  
//   export const editTodo = ({ id, title, description }) => {
//     return axios.put(`https://jsonplaceholder.typicode.com/todos/1/${id}`, {
//       id,
//       title,
//       description
//     });
//   };
  
//   export const removeTodo = id => {
//     return axios.delete(`https://jsonplaceholder.typicode.com/todos/1/${id}`);
//   };