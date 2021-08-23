import './App.css';
import Hero from './components/Hero';
import Navbar from './components/Navbar';
import MyCarousel from './components/Work';


function App() {
  return (
    <div className="App">
     <Navbar/>
     <Hero/>
     <MyCarousel/>
    </div>
  );
}

export default App;
