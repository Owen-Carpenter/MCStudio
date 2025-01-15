import { Home } from "./pages/Home";
import { About } from "./pages/About";
import { Services } from "./pages/Services";
import { Contact } from "./pages/Contact";
import { Gallery } from "./pages/Gallery";
import './Styles/General.css';

import { HashRouter as Router, Route, Routes } from "react-router-dom";
function App() {
  return (<>
    <Router>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/About" element={<About/>}/>
        <Route path="/Contact" element={<Contact/>}/>
        <Route path="/Services" element={<Services/>}/>
        <Route path="/Gallery" element={<Gallery/>}/>
      </Routes>
    </Router>
  </>)
}

export default App;