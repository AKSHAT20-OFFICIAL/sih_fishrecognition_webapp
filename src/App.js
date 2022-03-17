
import './App.css';
import Capture from './components/capture';
import Footer from './components/Footer';
import MobileNav from './components/MobileNavbar';
import Upload from './components/upload';
import UploadDesktop from './components/UploadDesktop';

function App() {
  return (
    <div className="w-full h-screen bg-[#00232D]">
      {/* <MobileNav/> */}
      <UploadDesktop/> 
      <Footer/>
      {/* <Upload /> */}
    </div>
  );
}

export default App;
