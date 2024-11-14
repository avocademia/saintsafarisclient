import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { ToastContainer} from 'react-toastify';
import Home from "./pages/Home/Home"
import SignupSignin from "./pages/User Auth/SignunSignin"
import Tours from './pages/Tours/Tours'
import Tour from "./pages/Tour/Tour"
import About from "./pages/About Us/About"
import TermsConditions from "./pages/Terms & Conditions/TermsConditions"
import PrivacyPolicy from "./pages/Privacy Policy/PrivacyPolicy"
import Contact from "./pages/Contact/Contact"
import TourBooking from "./pages/Tour Booking/TourBooking"
import UserDashboard from './pages/User DashBoard/UserDashboard';
import AccommodationBooking from './pages/Accommodation Booking/AccommodationBooking';

function App() {

  return (
    <BrowserRouter>
        <ToastContainer style={{zIndex: 100}}/>
        <Routes>
          <Route exact path="/" element={<Home/>}/>
          <Route path="/userauth" element={<SignupSignin/>}/>
          <Route path="/tours" element={<Tours/>}/>
          <Route path="tours/tour/:id" element={<Tour/>}/>
          <Route path="/about" element={<About/>}/>
          <Route path="/terms+conditions" element={<TermsConditions/>}/>
          <Route path="/privacypolicy" element={<PrivacyPolicy/>}/>
          <Route path="/contact" element={<Contact/>}/>
          <Route path="/tourbooking" element={<TourBooking/>}/>
          {/* <Route path="/accommodationbooking" element={<AccommodationBooking/>}/> */}
          <Route path="/userdash" element={<UserDashboard/>}/>
        </Routes>
   </BrowserRouter> 
  )
}

export default App

/*

*/