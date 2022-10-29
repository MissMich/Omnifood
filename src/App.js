import './App.css';
import Cta from './components/Cta/Cta';
import Featured from './components/Featured/Featured';
import Footer from './components/Footer/Footer';
import Hero from './components/Hero/Hero';
import How from './components/How/How';
import Meals from './components/Meals/Meals';
import Navbar from './components/Navbar/Navbar';
import Pricing from './components/Pricing/Pricing';
import ImageSlider from './components/Slider/ImageSlider';
import Testimonials from './components/Testimonials/Testimonials';

function App() {
  return (
    <>
      <div className="App">
        <Navbar/>
        <Hero/>
        <Featured/>
        <How/>
        <Meals/>
        <Testimonials/>
        <ImageSlider/>
        <Pricing/>
        <Cta/>
        <Footer/>
      </div>
    </>
  );
}

export default App;
