import Nav from './components/Nav';
import Home from './components/Home';
import Footer from './components/Footer';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import News from './components/News';
import NewsDetail from './components/NewsDetail';
import Wishlist from './components/Wishlist';
import AboutUs from './components/AboutUs';
import ContactUs from './components/ContactUs';
import Share from './components/Share';
import ShareDetails from './components/ShareDetails';
function App() {
  return (
    <Router>
      <Nav />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/news' element={<News />} />
        <Route path='/news/:title' element={<NewsDetail />} />
        <Route path='/wishlist' element={<Wishlist />} />
        <Route path='/aboutus' element={<AboutUs />} />
        <Route path='/contactus' element={<ContactUs />} />
        <Route path='/PriceAndAnalysis' element={<Share />} />
        <Route path='/share/:id' element={<ShareDetails  />} />

      </Routes>
      <Footer />
    </Router>
  );
}

export default App; 