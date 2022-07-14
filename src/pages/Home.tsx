import React, { useEffect, useState } from "react";
import Card from "../components/Card";
import { PostModel } from "../models/postModel";
import { PostService } from "../services/post.service";

function Home() {
  
  const [posts, setPosts] = useState<PostModel[]>([]);
  
  
  useEffect(() => {
    const postService = new PostService();
    postService
      .getAllPosts()
      .then((response) => {
          setPosts(response.data);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <div>
      Home
      {posts.map((post) => (
        <Card key={post.id} post={post}></Card>
      ))}
    </div>
  );
}

export default Home;
