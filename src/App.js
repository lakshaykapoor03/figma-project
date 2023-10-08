
import './App.css';
import MainContainer from './components/MainContainer';
import Navbar from './components/Navbar';
import SecondContainer from './components/SecondContainer';
import SecondNavbar from './components/SecondNavbar';
import ThirdContainer from "./components/ThirdContainer";
import FourthContainer from './components/FourthContainer';
import FifthContainer from './components/FifthContainer';
import Footer from './components/Footer';
import Popover from './components/Popover';

function App() {
  return (
    <div className="App">
     <Navbar/>

     <SecondNavbar abc="xyz" />
     <MainContainer abc="ghfjghfjg" />
     <SecondContainer/>
     <ThirdContainer/>
     <FourthContainer/>
     <FifthContainer/>
     <Footer/>
    
         </div>
  );
}

export default App;
