import axios from "axios";

const url = "https://postyourtrip.onrender.com/posts";

export const fetchPosts = () => axios.get(url);
export const createPost = (post) => axios.post(url, post);
export const likePost = (id) => axios.patch(`${url}/${id}/likePost`);
export const updatePost = (id, updatedPost) =>
  axios.patch(`${url}/${id}`, updatedPost);
export const deletePost = (id) => axios.delete(`${url}/${id}`);
