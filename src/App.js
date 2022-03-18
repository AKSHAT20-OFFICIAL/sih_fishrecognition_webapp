import './App.css';
import React,{useState} from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import axios from 'axios'

import Capture from './components/capture';
import Footer from './components/Footer';
// import MobileNav from './components/MobileNavbar';
import Navbar from './components/Navbar';
import Upload from './components/upload';
import UploadDesktop from './components/UploadDesktop';
import Details from './components/Details';

function App() {

  const [image, setImage] = useState('');

  const getDetails = async ()=>{
    axios.get('http://127.0.0.1:8000/')
    .then(function (response){
      console.log(response);
    })
    .catch(function (error){
      console.log(error)
    })
  }



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
      <button className= 'text-black' onClick={getDetails}>GET</button>
      <Footer />
    </div>
  );
}

export default App;
