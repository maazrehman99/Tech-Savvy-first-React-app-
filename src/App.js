
import { BrowserRouter as Router,Routes,Route } from "react-router-dom";
import  Header  from "./Components/Header";
import Home from "./Components/Home"
import Footer from "./Components/Footer"
import Services from "./Components/Services";
import Contact from "./Components/Contact"


import "./styles/app.scss"
import "./styles/Header.scss"
import "./styles/Home.scss"
import "./styles/Footer.scss"
import "./styles/Contact.scss"
import "./styles/mediaquery.scss"




function App() {
  return (
    <Router>
      <Header/>
       <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/contact" element={<Contact/>} />
        <Route path="/services" element={<Services/>} />
      
       </Routes>
           <Footer/>
      </Router>
  
  );
}

export default App;
