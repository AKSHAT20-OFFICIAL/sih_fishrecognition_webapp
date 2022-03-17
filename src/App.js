import './App.css';
import React,{useState} from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Capture from './components/capture';
import Footer from './components/Footer';
// import MobileNav from './components/MobileNavbar';
import Navbar from './components/Navbar';
import Upload from './components/upload';
import UploadDesktop from './components/UploadDesktop';
import Details from './components/Details';

function App() {

  const [image, setImage] = useState('');


  return (
    <div className="w-full ">
      <BrowserRouter>
      <Routes>
        {/* <MobileNav/> */}
        {/* <Navbar/> */}
        {/* <UploadDesktop /> */}
        {/* <Upload /> */}
        <Route path='/' element={<UploadDesktop />}/>
        <Route path='/capture' element={<Capture image={image} setImage={setImage}/>}/>
        <Route path='/details' element={<Details image={image}/>}/>
        </Routes>
      </BrowserRouter>
      
      <Footer />
    </div>
  );
}

export default App;
