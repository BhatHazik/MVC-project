// App.js
import React from "react";
import PostController from "./controllers/PostController";

const App = () => {
  return (
    <div className="App">
      <h1>Posts from jsonplaceholder.typicode.com</h1>
      <PostController />
    </div>
  );
};

export default App;
