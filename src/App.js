import { Route, Routes } from 'react-router-dom';
import './App.css';
import Aboutus from './pages/Aboutus/Aboutus';
import Header from './Header/Header';
import Home from './pages/Home/Home/Home';
import Footer from './Footer/Footer';

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/about' element={<Aboutus></Aboutus>}></Route>
      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;
