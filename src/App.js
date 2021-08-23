import './App.css';
import Contact from './components/Contact';
import Hero from './components/Hero';
import Navbar from './components/Navbar';
import MyCarousel from './components/Work';


function App() {
  return (
    <div className="App">
     <Navbar/>
     <Hero/>
     <MyCarousel/>
     <Contact/>
    </div>
  );
}

export default App;
