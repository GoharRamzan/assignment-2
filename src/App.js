import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './component/Navbar';
import Living from './component/Living';
import Slider from './component/Slider';
import AllProducts from './component/AllProducts';
import SecondSlider from '../src/component/SecondSlider'
import Blog from '../src/component/Blog';
import Footer from './component/Footer'
function App() {
  return (
   <>
   <div className='all-components'>
    <Navbar/>
    <Living/>
    <Slider/>
    <AllProducts/>
    <SecondSlider/>
    <Blog/>
    <Footer/>
   </div>
   </>
  );
}

export default App;
