import Navbar from "./Components/Navbar.jsx";
import './App.css'
import Intro from "./Components/Intro/intro.jsx";
import Services from "./Services/Services.jsx";
import Experience from "./Components/Experience/Experience.jsx";
import Works from "./Components/Works/Works.jsx";
function App() {
  return (
    <div className="App">
      <Navbar/>
      <Intro/>
      <Services/>
      <Experience/>
      <Works/>
    </div>
  );
}

export default App;
