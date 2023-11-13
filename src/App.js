import Nav from './components/Nav';
import Home from './components/Home';
import Footer from './components/Footer';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import News from './components/News';
import NewsDetail from './components/NewsDetail';
import Notes from './components/Notes';
import AboutUs from './components/AboutUs';
import ContactUs from './components/ContactUs';
import Share from './components/Share';
import ShareDetails from './components/ShareDetails';
import Signup from './components/Signup';
import Login from './components/Login';
import ShowNavbar from './components/Show/ShowNavbar';
import ShowFooter from './components/Show/ShowFooter';

function App() {
  return (
    <Router>
      <ShowNavbar>
      <Nav />
      </ShowNavbar>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/news' element={<News />} />
        <Route path='/news/:title' element={<NewsDetail />} />
        <Route path='/wishlist' element={<Notes />} />
        <Route path='/aboutus' element={<AboutUs />} />
        <Route path='/login' element={<Login />} />
        <Route path='/signup' element={<Signup />} />
        <Route path='/contactus' element={<ContactUs />} />
        <Route path='/PriceAndAnalysis' element={<Share />} />
        <Route path='/share/:id' element={<ShareDetails  />} />

      </Routes>
      <ShowFooter>
      <Footer />
      </ShowFooter>
    </Router>
  );
}

export default App; 