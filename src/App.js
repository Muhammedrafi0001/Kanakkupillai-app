
import './App.css';
import Navbar from './component/navbar/Navbar';
import {
  Link, Route, BrowserRouter
  , Routes
} from 'react-router-dom';
import Home from './component/home/Home';
import Footer from './component/footer/Footer';
import Ragistration from './component/registration/Ragistration'
import ThankYou from './component/thank-you/ThankYou';

function App() {
  return (
   
    <div>
      <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/registration" element={<Ragistration/>}/>
        <Route path="/thank-you" element={<ThankYou/>}/>
      </Routes>
      </BrowserRouter>

    </div>
  );
}

export default App;
