// src/ViewModel.js
import axios from "axios";

const ViewModel = {
  async fetchPosts() {
    const startTime = Date.now();
    try {
      const response = await axios.get(
        "https://jsonplaceholder.typicode.com/posts"
      );
      const endTime = Date.now(); // Record end time
      const timeTaken = endTime - startTime; // Calculate time taken
      console.log("Time taken:", timeTaken, "milliseconds");
      return response.data;
    } catch (error) {
      console.error(error);
      throw error;
    }
  },
};

export default ViewModel;
