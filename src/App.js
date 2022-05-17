import { Route, Routes } from 'react-router-dom';
import './App.css';
import Aboutus from './pages/Aboutus/Aboutus';
import Header from './Header/Header';
import Home from './pages/Home/Home/Home';
import Footer from './Footer/Footer';
import ContactUs from './pages/ContactUs/ContactUs';
import Menu from './Menu/Menu';

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Menu></Menu>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/about-us' element={<Aboutus></Aboutus>}></Route>
        <Route path='/contact-us' element={<ContactUs></ContactUs>}></Route>
      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;
