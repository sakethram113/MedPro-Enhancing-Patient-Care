import Contact from '../pages/Contact';
import Services from '../pages/Services';
import Login from '../pages/Login';
import SignUp from '../pages/SignUp';
import Doctors from '../pages/Doctors/Doctors';
import Doctorsdetails from '../pages/Doctors/Doctorsdetails';
import Home from '../pages/Home';
import MyAccount from '../Dashboard/user-account/MyAccount';
import Dashboard from '../Dashboard/doctor-account/Dashboard';

import { Routes, Route } from 'react-router-dom';

const Routers = () => {
  return <Routes>
    <Route path="/" element={<Home/>}/>
    <Route path="/home" element={<Home/>}/>
    <Route path="/doctors" element={<Doctors/>}/>
    <Route path="/doctors/:id" element={<Doctorsdetails/>}/>
    <Route path="/login" element={<Login/>}/>
    <Route path="/register" element={<SignUp/>}/>
    <Route path="/contact" element={<Contact/>}/>
    <Route path="/services" element={<Services/>}/>
    <Route path="/users/profile/me" element={<MyAccount/>}/>
    <Route path="/doctors/profile/me" element={<Dashboard/>}/>
  </Routes>
};

export default Routers