import axios from "axios";

const getMoreInData = async (postId) => {
  const backendUrl = "http://localhost:8080";
  try {
    const response = await axios.get(`${backendUrl}/articles/${postId}/related`);
    return response.data;
  } catch (error) {
    console.error("Error in generating response:", error);
    throw error;
  }
};

export { getMoreInData };