import { Home } from "./pages/Home";
import { About } from "./pages/About";
import { Services } from "./pages/Services";
import { Contact } from "./pages/Contact";
import { Gallery } from "./pages/Gallery";
import { Waxing } from "./pages/Waxing";
import { Facials } from "./pages/Facials";
import { Lashes } from "./pages/Lashes";
import { Other } from "./pages/Other";
import { Login } from "./pages/Login";
import { SignUp } from "./pages/SignUp";
import './Styles/General.css';

import { HashRouter as Router, Route, Routes } from "react-router-dom";
function App() {
  return (<>
    <Router>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/Home" element={<Home/>}/>
        <Route path="/About" element={<About/>}/>
        <Route path="/Contact" element={<Contact/>}/>
        <Route path="/Services" element={<Services/>}/>
        <Route path="/Gallery" element={<Gallery/>}/>
        <Route path="/Services/Facials" element={<Facials/>}/>
        <Route path="/Services/Waxing" element={<Waxing/>}/>
        <Route path="/Services/Lashes" element={<Lashes/>}/>
        <Route path="/Login" element={<Login/>}/>
        <Route path="/SignUp" element={<SignUp/>}/>
      </Routes>
    </Router>
  </>)
}

export default App;