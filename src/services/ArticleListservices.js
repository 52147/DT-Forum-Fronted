import axios from "axios";

const generateResponse = async (requestData) => {
  const backendUrl = "http://localhost:5050";
  try {
    const response = await axios.post(
      `${backendUrl}/generate-response`,
      requestData
    );
    return response.data;
  } catch (error) {
    console.error("Error in generating response:", error);
    throw error;
  }
};

const getPostList = async () => {
  const backendUrl = "http://localhost:8080";
  try {
    const response = await axios.get(`${backendUrl}/articles`);
    return response.data;
  } catch (error) {
    console.error("Error in generating response:", error);
    throw error;
  }
};

export { generateResponse, getPostList };
