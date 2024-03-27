// PostController.js
import React, { useState, useEffect } from "react";
import Model from "../models/Model";
import PostListComponent from "../components/PostListComponent";

const PostController = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await Model.fetchPosts();
        setPosts(data);
      } catch (error) {
        console.error("Error fetching posts:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      <PostListComponent posts={posts} />
    </div>
  );
};

export default PostController;
