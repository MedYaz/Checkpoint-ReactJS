
import "./App.css"
import NavBar from "./NavBar"
import Cards from "./Cards"
import Slider from "./Caroussel";

function App() {
  return (
    <div className="App">
      <div>
        <NavBar/>
      </div>
      <h1> Ceci est un exemple de Caroussel</h1>
      <div className="Caroussel">
       <Slider/>           
      </div>

      <div className="Cards">
       <Cards/>           
      </div>
      <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      
    </div>
  );
}

export default App
