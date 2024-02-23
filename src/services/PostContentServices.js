import axios from "axios";
const backendUrl = "http://localhost:8080";
export const getPostContent = async (postId) => {
  try {
    const response = await axios.get(`${backendUrl}/articles/${postId}`);
    return response.data;
  } catch (error) {
    console.error("Error in generating response:", error);
    throw error;
  }
};

export const incrementLikeCountService = async (postId) => {
  try {
    const response = await axios.post(`${backendUrl}/articles/${postId}/like`);
    return response.data; 
  } catch (error) {
    throw error;
  }
};
