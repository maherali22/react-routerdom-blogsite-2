import React, { useContext } from "react";
import { BlogContext } from "./BlogContext";
import { Link } from "react-router-dom";

const Blogs = () => {
  const { blogs } = useContext(BlogContext);

  return (
    <div>
      <h2>All Blogs</h2>
      <ul>
        {blogs.map((blog) => (
          <li key={blog.id}>
            <Link to={`/blogs/${blog.id}`}>
              <h3>{blog.title}</h3>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Blogs;
