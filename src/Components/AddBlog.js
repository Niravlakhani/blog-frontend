import React, { useContext, useState, useEffect } from "react";
import blogContext from "../Context/BlogContext";
import BlogItem from "./BlogItem";
import { useNavigate } from "react-router-dom";

export default function AddBlog() {
  const navigate = useNavigate();
  const [IsAddBlog, setAddBlog] = useState(false);
  const [blog, setBlog] = useState({
    title: "",
    description: "",
    image: "",
  });
  const [Image, setImage] = useState(null);
  const context = useContext(blogContext);
  const { blogs, addBlog, getBlogs } = context;
  const handleClick = (e) => {
    e.preventDefault();
    addBlog(blog.title, blog.description, Image);
    setBlog({ title: "", description: "", image: "" });
    setImage(null);
    navigate("/");
  };
  const onChange = (e) => {
    setBlog({ ...blog, [e.target.name]: e.target.value });
  };
  return (
    <div className="my-3">
      <div className="row justify-content-between align-items-center">
        <div className="col-md-2">
          <h4>Add your blog</h4>
        </div>
        <button
          style={{
            width: "70px",
            padding: "7px 15px",
            backgroundColor: "#edeff2",
            border: "1px solid black",
            borderRadius: "5px",
          }}
          className="col-md-10"
          onClick={() => navigate("/")}
        >
          Back
        </button>
      </div>
      <form>
        <div className="mb-3">
          <label htmlFor="title" className="form-label">
            Title
          </label>
          <input
            type="text"
            className="form-control"
            id="title"
            name="title"
            aria-describedby="title"
            value={blog.title}
            onChange={onChange}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="description" className="form-label">
            Description
          </label>
          <textarea
            rows="4"
            cols="50"
            className="form-control"
            id="description"
            name="description"
            value={blog.description}
            onChange={onChange}
          />
        </div>

        <div className="mb-3">
          <label htmlFor="image" className="form-label">
            Upload Image
          </label>
          <input
            type="file"
            className="form-control"
            id="image"
            name="image"
            multiple
            onChange={(e) => setImage(e.target.files[0])}
          />
        </div>

        <button type="submit" className="btn btn-primary" onClick={handleClick}>
          Submit
        </button>
      </form>
    </div>
  );
}
