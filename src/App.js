import logo from './Images/Logo.jpg';
import Nav from './components/Nav';
import Home from './components/Home';
import Footer from './components/Footer';
import Tour from "./Images/Tour.jpg"
import './style/Home.css';

function App() {
  return (
    <div>
      <div className='text-center'>
        <img src={logo} className='home-logo img-fluid' alt="" />
      </div>

      <div>
        <Nav />
      </div>

      <div>
        <Home />
      </div>

      <br />
      <br />
      <br />
      <br />
      <br />

      <div>
        <Footer />
      </div>
      
    </div>
  );
}

export default App;