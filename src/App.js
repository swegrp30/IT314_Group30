import Nav from './components/Nav';
import Home from './components/Home';
import Footer from './components/Footer';
// import './style/Home.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import News from './components/News';
import NewsDetail from './components/NewsDetail';
function App() {
  return (
    <Router>
      <Nav />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/news' element={<News />} />
        <Route path='/news/:title' element={<NewsDetail />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;