import axios from "axios";
const BASE_URL = "http://localhost:8080/articles"; // Adjust this URL to your backend's address

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
// Function to fetch articles with pagination
export const fetchArticles = async (page = 1, pageSize = 10) => {
  try {
    const response = await axios.get(
      `${BASE_URL}/all?page=${page}&pageSize=${pageSize}`
    );
    if (!response.ok) {
      throw new Error("Network response was not ok");
    }
    const data = await response.json();
    return data; // Assuming the backend returns the articles directly
  } catch (error) {
    console.error("There was a problem with the fetch operation:", error);
    throw error; // Rethrow the error so it can be caught by the caller
  }
};
export { generateResponse, getPostList };
