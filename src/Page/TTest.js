import React from "react";
import { Link } from "react-router-dom";

function TTest({ blogs }) {
  return (
    <div className="blog-list">
      {blogs.map((blog) => {
        return (
          <div key={blog.id}>
            <Link to={`/blogs/${blog.id}`}>
              <h1>{blog.name}</h1> {blog.id}{" "}
            </Link>
          </div>
        );
      })}
    </div>
  );
}

export default TTest;
