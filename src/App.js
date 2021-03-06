import { Route, Routes } from 'react-router-dom';
import './App.css';
import Aboutus from './pages/Aboutus/Aboutus';
import Header from './Header/Header';
import Home from './pages/Home/Home/Home';
import Footer from './Footer/Footer';
import Menu from './Menu/Menu';
import AnnualTour from './Gallery/AnnualTour/AnnualTour';
import FarewellProgramme from './Gallery/FearwellProgramme/FarewellProgramme';
import JobFair from './Gallery/JobFair/JobFair';
import MouSinging from './Gallery/MouSinging/MouSinging';
import OfficeEnvironment from './Gallery/OfficeEnvironment/OfficeEnvironment';
import OrientationProgramme from './Gallery/OrientationProgramme/OrientationProgramme';
import Seminar from './Gallery/Seminar/Seminar';
import TeachersTraining from './Gallery/TeachersTraining/TeachersTraining';
import ContactPage from './pages/ContactPage/ContactPage';
import Events from './Events/Events';
import CourseDetails from './pages/CourseDetails/CourseDetails';
import NotFound from './pages/NotFound/NotFound';
import AdmissionForm from './pages/AdmissionForm/AdmissionForm';
import Cart from './pages/Cart/Cart';
import Checkout from './pages/Checkout/Checkout';
import AllCourses from './pages/AllCourses/AllCourses';
import WrittenFeedback from './pages/WrittenFeedback/WrittenFeedback';
import VideoFeedback from './pages/VideoFeedback/VideoFeedback';


function App() {
  return (
    <div className="App">
      <Header></Header>
      <Menu></Menu>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/about-us' element={<Aboutus></Aboutus>}></Route>
        <Route path='/annual-tour' element={<AnnualTour></AnnualTour>}></Route>
        <Route path='/farewell' element={<FarewellProgramme></FarewellProgramme>}></Route>
        <Route path='/jobfair' element={<JobFair></JobFair>}></Route>
        <Route path='/mousingingceremony' element={<MouSinging></MouSinging>}></Route>
        <Route path='/officeenvironment' element={<OfficeEnvironment></OfficeEnvironment>}></Route>
        <Route path='/orientation-programme' element={<OrientationProgramme></OrientationProgramme>}></Route>
        <Route path='/seminar' element={<Seminar></Seminar>}></Route>
        <Route path='/teachers-training' element={<TeachersTraining></TeachersTraining>}></Route>
        <Route path='/contact-us' element={<ContactPage></ContactPage>}></Route>
        <Route path='/events' element={<Events></Events>}></Route>
        <Route path='/course/:slug' element={<CourseDetails></CourseDetails>}></Route>
        <Route path='/cart/checkout' element={<Checkout></Checkout>}></Route>
        <Route path='/admission-now' element={<AdmissionForm></AdmissionForm>}></Route>
        <Route path='/cart' element={<Cart></Cart>}></Route>
        <Route path='/written-feedback' element={<WrittenFeedback></WrittenFeedback>}></Route>
        <Route path='/video-feedback' element={<VideoFeedback></VideoFeedback>}></Route>
        <Route path='*' element={<NotFound></NotFound>}></Route>

      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;
