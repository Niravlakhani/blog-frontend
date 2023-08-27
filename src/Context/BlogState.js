import React, { useState } from "react";
import BlogContext from "./BlogContext";

const BlogState = (props) => {
  const host = process.env.REACT_APP_PUBLIC_URL;
  console.log("host", host);
  const blogInitials = [];
  const [blogs, setBlogs] = useState(blogInitials);

  // Get Blogs
  const getBlogs = async () => {
    // TODO: call API
    const url = `${host}/all-blogs`;

    const response = await fetch(url, {
      method: "GET",
    });
    const result = await response.json();

    setBlogs(result);
  };

  const addBlog = async (title, description, image) => {
    const url = `${host}/create`;
    const formData = new FormData();
    formData.append("title", title);
    formData.append("description", description);
    formData.append("image", image);
    const response = await fetch(url, {
      method: "POST",

      body: formData,
    });

    const result = await response.json();
    if (result) {
      getBlogs();
    }
  };

  return (
    <BlogContext.Provider value={{ blogs, setBlogs, addBlog, getBlogs }}>
      {props.children}
    </BlogContext.Provider>
  );
};

export default BlogState;
