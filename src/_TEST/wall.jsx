import "./test.styles.scss";
import Header from "./header";
import PostWall from "./posts/post-wall";
import { useEffect, useState } from "react";

const Wall = () => {
  const [posts, fetchPosts] = useState([]);

  const loadPosts = () => {
    fetch("http://localhost:4000/getposts?userid=1")
      .then((response) => response.json())
      .then((data) => fetchPosts(data));
  };

  useEffect(() => {
    loadPosts();
  }, []);

  // useEffect(() => {
  //   loadNews();
  // }, []);

  return (
    <div className="container-main">
      <Header />
      <div className="body-main">
        <div className="wall">
          <div className="post-body">
            <h4>Posts:</h4> <br />
            {posts.map((post) => {
              console.log(post);
              return <PostWall data={post} />;
            })}
          </div>

          <div className="body-left-pane">
            <h2> left-pane </h2>
          </div>

          <div className="body-right-pane">
            <h2> right-pane </h2>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Wall;
