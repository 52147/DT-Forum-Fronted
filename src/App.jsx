import './App.css';
import {BrowserRouter as Router, Routes, Route} from "react-router-dom"
import {NavBar} from "./component/nav-bar/NavBar"
import 'bootstrap/dist/css/bootstrap.min.css';
import {HomePage} from "./page/HomePage"
import {Footer} from "./component/footer/Footer"
function App() {
  return (
    <>
    <Router>
      <NavBar />
      <Routes>
        <Route path = "/" exact element = {<HomePage/>}/>
      </Routes>
      <Footer></Footer>
    </Router>
    </>
  );
}

export default App;
