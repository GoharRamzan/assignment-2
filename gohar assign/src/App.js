import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './component/Navbar';
import Living from './component/Living';
import Slider from './component/Slider';
import AllProducts from './component/AllProducts';
function App() {
  return (
   <>
   <div className='all-components'>
    <Navbar/>
    <Living/>
    <Slider/>
    <AllProducts/>
   </div>
   </>
  );
}

export default App;
