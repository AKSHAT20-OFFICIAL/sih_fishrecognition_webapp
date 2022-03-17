
import './App.css';
import Capture from './components/capture';
import MobileNav from './components/MobileNavbar';
import Upload from './components/upload';
import UploadDesktop from './components/UploadDesktop';

function App() {
  return (
    <div className="w-full h-full bg-[#00232D]">
      <MobileNav/>
      <UploadDesktop/> 
      <Upload />
    </div>
  );
}

export default App;
