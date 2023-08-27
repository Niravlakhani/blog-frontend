import React, { useContext, useState, useEffect } from "react";
import blogContext from "../Context/BlogContext";
import BlogItem from "./BlogItem";

export default function Blogs() {
  const [IsAddBlog, setAddBlog] = useState(false);
  const [blog, setBlog] = useState({ title: "", description: "", image: "" });
  const [Image, setImage] = useState(null);
  const context = useContext(blogContext);
  const { blogs, addBlog, getBlogs } = context;

  useEffect(() => {
    getBlogs();
  }, []);
  const handleClick = (e) => {
    e.preventDefault();
    addBlog(blog.title, blog.description, Image);
    setBlog({ title: "", description: "", image: "" });
    setImage(null);
  };
  const onChange = (e) => {
    setBlog({ ...blog, [e.target.name]: e.target.value });
  };

  const setAddBlogsForm = () => {
    setAddBlog(!IsAddBlog);
  };
  return (
    <>
      <div className="row my-3 justify-content-between align-items-center">
        <h2 className="col-md-11">Your Blogs</h2>
      </div>
      <div className="row ">
        {blogs?.map((blog) => {
          return <BlogItem key={blog.id} blog={blog} />;
        })}
      </div>
    </>
  );
}
