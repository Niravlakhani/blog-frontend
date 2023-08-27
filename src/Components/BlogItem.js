import React, { useEffect, useState } from "react";

export default function BlogItem(props) {
  const { blog } = props;
  const [imageUrl, setImageUrl] = useState();

  useEffect(() => {
    if (blog?.image) {
      fetch(`http://localhost:3010/blog/getResourcesByEntity/${blog?.image}`, {
        method: "GET",
      })
        .then((data) => setImageUrl(data?.url))
        .catch((err) => console.log("Error fetching image:", err));
    }
  }, [blog?.image]);

  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col-md-12 my-3">
            <div className="row">
              <div className="col-md-8">
                <h5 className="card-title">{blog.title}</h5>
                <p className="card-text">{blog.description}</p>
              </div>
              <div className="col-md-4">
                <img
                  src={imageUrl}
                  className="card-img-top"
                  alt={blog.title}
                  title={blog.title}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
