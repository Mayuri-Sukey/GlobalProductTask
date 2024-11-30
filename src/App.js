import logo from './logo.svg';
import './App.css';
import Herosection from './Components/Herosection';
import Servicessection from './Components/Servicessection';
import Region from './Components/Region';
import Footer from './Components/Footer';
import Social from './Components/Social';
import Aboutus from './Components/Aboutus';
import Secondsection from './Components/Secondsection';

function App() {


  return (
    <div className="App">
      <Herosection/>
      <Social/>
      <Secondsection/>
      <Servicessection/>
      <Region/>
      <Aboutus/>

      <Footer/>

    </div>
  );
}

export default App;
