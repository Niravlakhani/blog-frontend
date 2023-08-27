import "./App.css";
import About from "./Components/About";
import Home from "./Components/Home";
import Navbar from "./Components/Navbar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import BlogState from "./Context/BlogState";
import AddBlog from "./Components/AddBlog";

function App() {
  return (
    <>
      <BlogState>
        <Router>
          <Navbar />
          <div className="container">
            <Routes>
              <Route exact path="/" element={<Home />} />
              <Route exact path="/write-blog" element={<AddBlog />} />
            </Routes>
          </div>
        </Router>
      </BlogState>
    </>
  );
}

export default App;
