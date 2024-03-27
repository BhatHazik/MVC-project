// Model.js
const Model = {
  fetchPosts: async () => {
    const startTime = new Date();
    try {
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/posts"
      );
      const data = await response.json();
      const endTime = new Date(); // Record end time
      const duration = endTime - startTime; // Calculate duration in milliseconds
      console.log("Time taken to fetch data:", duration, "ms");
      return data;
    } catch (error) {
      console.error("Error fetching posts:", error);
      throw error;
    }
  },
};

export default Model;
