import logo from './logo.svg';
import './App.css';
import Herosection from './Components/Herosection';
import Servicessection from './Components/Servicessection';
import Region from './Components/Region';
import Footer from './Components/Footer';

function App() {


  return (
    <div className="App">
      <Herosection/>
      <Servicessection/>
      <Region/>

      <Footer/>

    </div>
  );
}

export default App;
