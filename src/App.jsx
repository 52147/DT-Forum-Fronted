import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { NavBar } from "./component/nav-bar/NavBar";
import "bootstrap/dist/css/bootstrap.min.css";
import { HomePage } from "./page/HomePage";
import { PostPage } from "./page/PostPage";

import { Footer } from "./component/footer/Footer";
function App() {
  return (
    <>
      <Router>
        <NavBar />
        <Routes>
          <Route path="/" exact element={<HomePage />} />
          <Route
            path="/post/:authorName/:name/:postId"
            element={<PostPage />}
          />
        </Routes>
        <Footer></Footer>
      </Router>
    </>
  );
}

export default App;
