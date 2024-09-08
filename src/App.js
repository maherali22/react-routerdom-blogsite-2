import "./App.css";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
  Link,
} from "react-router-dom";
import { BlogProvider } from "./Blogsite/BlogContext";
import CreateBlog from "./Blogsite/CreateBlog";
import Blogs from "./Blogsite/Blogs";
import BlogDetail from "./Blogsite/BlogDetail";

function App() {
  return (
    <div className="App">
      <BlogProvider>
        <Router>
          <nav>
            <button>
              <Link to="/createblog">Create</Link>
            </button>
            <button>
              <Link to="/blogs">Blogs</Link>
            </button>
            <button>
              <Link to="/blogs/:id">Blog Details</Link>
            </button>
          </nav>
          <Routes>
            <Route path="/" element={<Navigate to="/createblog" />} />
            <Route path="/createblog" element={<CreateBlog />} />
            <Route path="/blogs" element={<Blogs />} />
            <Route path="/blogs/:id" element={<BlogDetail />} />
          </Routes>
        </Router>
      </BlogProvider>
    </div>
  );
}

export default App;
