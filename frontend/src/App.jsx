import Nav from './components/Nav';
import Footer from './components/Footer';
import { BrowserRouter as Router, Routes, Route, useNavigate } from 'react-router-dom';
import 'react-toastify/dist/ReactToastify.css';
import Notes from './components/Notes';
import Comments from './components/Comments';
import AboutUs from './components/AboutUs';
import ContactUs from './components/ContactUs';
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
import Error404 from './components/Error404';
import MyComments from './components/MyComments';
import { useEffect, useState } from 'react';
import TempNewNews from './components/TempNewNews';
import CompanyNewsPage from './components/CompanyNewsPage';
import PriceAnalysis from './components/PriceAnalysis'
import StockDetails from './components/StockDetails.jsx'
import Stock from './components/Stock.jsx';
import NewHome from './components/NewHome.jsx';
import FAQs from './components/FAQs.jsx';
function App() {
  const isAuthenticated = () => {
    const authToken = localStorage.getItem('authToken');
    return authToken !== null && authToken !== undefined;
  };
  // useEffect(() => {
  //   // Function to clear localStorage
  //   // Check and clear localStorage when the component mounts
  //   // checkAndClearLocalStorage();

  //   // Attach the event listener to the window
  //   // window.addEventListener('beforeunload', clearLocalStorage);

  //   // Cleanup function to remove the event listener when the component is unmounted
  //   // return () => {
  //     // window.removeEventListener('beforeunload', clearLocalStorage);
  //   };
  // }, []);
  const clearLocalStorage = () => {
    localStorage.clear();
  };
  const checkAndClearLocalStorage = () => {
    const currentTime = new Date().getTime();
    const storedTime = localStorage.getItem('storageInitializedTime');
    console.log(currentTime);
    console.log(storedTime);
    if (storedTime && currentTime - parseInt(storedTime, 10) > 3600*1000) {
      // Clear localStorage if more than an hour has passed
      clearLocalStorage();
    }
  };
  const [token, setToken] = useState(isAuthenticated())
  setInterval(() => { setToken(isAuthenticated()) }, 1000);
  setInterval(() => { checkAndClearLocalStorage() }, 5000);
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
                    <Route path='/' element={<NewHome />} />
                    <Route path='/newhome' element={<NewHome />} />
                    
                    <Route path='/news' element={<TempNewNews />} />
                    <Route path='/:companyName' element={<CompanyNewsPage />} />
                   
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
                    <Route path='/faqs' element={<FAQs />} />
                    <Route path='*' element={<Error404 />} />
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
                    <Route path='/' element={<NewHome />} />
                    <Route path='/tempnews' element={<TempNewNews />} />
                    <Route path='/aboutus' element={<AboutUs />} />
                    <Route path='/login' element={<Login />} />
                    <Route path='/signup' element={<Signup />} />
                    <Route path='/contactus' element={<ContactUs />} />
                    <Route path='/forgotPassword' element={<Forgotpassword />} />
                    <Route path='/signupwithemail' element={<Signupemail />} />
                    <Route path='/share/:id' element={<Error401 />} />
                    <Route path='/changePassword' element={<Error401 />} />
                    <Route path='/showcomments' element={<Error401 />} />
                    <Route path='/mycomments' element={<Error401 />} />
                    <Route path='/priceanalysis' element={<Error401 />} />
                    <Route path='/Profile' element={<Error401 />} />
                    <Route path='/wishlist' element={<Error401 />} />
                    <Route path='/faqs' element={<FAQs />} />
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