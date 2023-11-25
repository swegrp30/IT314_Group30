import Nav from './components/Nav';
import Home from './components/Home';
import Footer from './components/Footer';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import 'react-toastify/dist/ReactToastify.css';
import News from './components/News';
import NewsDetail from './components/NewsDetail';
import Notes from './components/Notes';
import Comments from './components/Comments';
import AboutUs from './components/AboutUs';
import ContactUs from './components/ContactUs';
import Share from './components/Share';
import ShareDetails from './components/ShareDetails';
import Signup from './components/Signup';
import Login from './components/Login';
import ShowNavbar from './components/Show/ShowNavbar';
import ShowFooter from './components/Show/ShowFooter';
import Profile from './components/Profile';
import Changepassword from './components/Changepassword';
import Forgotpassword from './components/ForgotPassword';
import { WishlistProvider, useWishlist, Wishlist } from './components/Wishlist';
import Signupemail from './components/Signupemail'
import ShowComments from './components/ShowComments';
import Error401 from './components/Error401';
import MyComments from './components/MyComments';
import { useEffect, useState } from 'react';
import TempNewNews from './components/TempNewNews';
import CompanyNewsPage from './components/CompanyNewsPage';
import PriceAnalysis from './components/PriceAnalysis'
import StockDetails from './components/StockDetails.jsx'
import Stock from './components/Stock.jsx';
function App() {
  const isAuthenticated = () => {
    const authToken = localStorage.getItem('authToken');
    return authToken !== null && authToken !== undefined;
  };

  const [token, setToken] = useState(isAuthenticated())
  setInterval(() => { setToken(isAuthenticated()) }, 1000);
  return (
    <>

        <Router>
            {
              token ? (
                <>
                  <ShowNavbar>
                    <Nav />
                  </ShowNavbar>
                  <Routes>
                    <Route path='/' element={<Home />} />
                    {/* <Route path='/news' element={<News />} /> */}
                    <Route path='/news' element={<TempNewNews />} />
                    <Route path='/:companyName' element={<CompanyNewsPage />} />
                    {/* <Route path='/news/:title' element={<NewsDetail />} /> */}
                    <Route path='/wishlist' element={<Wishlist />} />
                    <Route path='/aboutus' element={<AboutUs />} />
                    <Route path='/login' element={<Login />} />
                    <Route path='/signup' element={<Signup />} />
                    <Route path='/contactus' element={<ContactUs />} />
                    <Route path='/priceanalysis' element={<PriceAnalysis />} />
                    <Route path='/Profile' element={<Profile />} />
                    <Route path='/share/:id' element={<StockDetails />} />
                    <Route path='/changePassword' element={<Changepassword />} />
                    <Route path='/forgotPassword' element={<Forgotpassword />} />
                    <Route path='/signupwithemail' element={<Signupemail />} />
                    <Route path='/showcomments' element={<ShowComments />} />
                    <Route path='/mycomments' element={<MyComments />} />
                    {/* <Route path='/priceanalysis' element={<PriceAnalysis />} /> */}
                    

                  </Routes>
                  <ShowFooter>
                    <Footer />
                  </ShowFooter>

                </>
              ) : (
                <>
                  <ShowNavbar>
                    <Nav />
                  </ShowNavbar>
                  <Routes>
                    <Route path='/' element={<Home />} />
                    <Route path='/news/:title' element={<NewsDetail />} />
                    <Route path='/tempnews' element={<TempNewNews />} />
                    <Route path='/aboutus' element={<AboutUs />} />
                    <Route path='/login' element={<Login />} />
                    <Route path='/signup' element={<Signup />} />
                    <Route path='/contactus' element={<ContactUs />} />
                    <Route path='/forgotPassword' element={<Forgotpassword />} />
                    <Route path='/signupwithemail' element={<Signupemail />} />
                    {/* <Route path='/Profile' element={<Profile />} /> */}
                    {/* <Route path='/news' element={<News />} /> */}
                    <Route path='*' element={<Error401 />} />

                  </Routes>
                  <ShowFooter>
                    <Footer />
                  </ShowFooter>
                </>
              )
            }
        </Router>

    </>
  );
}

export default App; 