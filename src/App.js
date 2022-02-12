import Intro from "./Components/Intro/Intro";
import About from "./Components/About/About";
import ProjectList from "./Components/ProjectList/ProjectList";
import Contact from "./Components/Contact/Contact";
import Navbar from "./Components/Navbar/Navbar";
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";



function App() {
  
  return (
    <>
    <Router>
    <Navbar/>
    <Routes>
    <Route exact path="/" element={<Intro/>}></Route>
    <Route exact path="/about" element={<About/>}></Route>
    <Route exact path="/work" element={<ProjectList/>}></Route>
    <Route exact path="/contact" element={<Contact/>}></Route>
    </Routes>
    </Router>
    </>
  );
}

export default App;
