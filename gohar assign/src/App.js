import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './component/Navbar';
import Living from './component/Living';
import Slider from './component/Slider';
function App() {
  return (
   <>
   <div className='all-components'>
    <Navbar/>
    <Living/>
    <Slider/>
   </div>
   </>
  );
}

export default App;
