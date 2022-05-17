import { Route, Routes } from 'react-router-dom';
import './App.css';
import Aboutus from './pages/Aboutus/Aboutus';
import Header from './Header/Header';
import Home from './pages/Home/Home/Home';
import Footer from './Footer/Footer';
import ContactUs from './pages/ContactUs/ContactUs';
import Menu from './Menu/Menu';
import AnnualTour from './Gallery/AnnualTour/AnnualTour';

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Menu></Menu>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/about-us' element={<Aboutus></Aboutus>}></Route>
        <Route path='/contact-us' element={<ContactUs></ContactUs>}></Route>
        <Route path='/annual-tour' element={<AnnualTour></AnnualTour>}></Route>
      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;
