import axios from "axios";

const getPostContent = async () => {
  const backendUrl = "http://localhost:8080";
  try {
    const response = await axios.get(`${backendUrl}/post-content`);
    return response.data;
  } catch (error) {
    console.error("Error in generating response:", error);
    throw error;
  }
};

export { getPostContent };
