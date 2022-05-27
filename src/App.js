import './App.css';
import Waves from './components/Waves';
import Navigation from './components/Navigation/Navigation';
import AboutUs from './components/AboutUs/AboutUs';
import Carts from './components/carts/Carts';
import Offer from './components/offer/Offer';
import Footer from './components/Footer/Footer';
import Contact from './components/Contact/Contact';
import Price from './components/Price/Price';


function App() {

  return (
    <div className="App">
      <Navigation/>
      <Waves/>
      <AboutUs/>
      <Carts/>
      <Offer/>
      <Contact/>
      <Price/>
      <Footer/>
      

    </div>
  );
}

export default App;
