import React , {useContext} from 'react';
import Tour from "../Images/Tour.jpg"
import '../style/Home.css';
import '../style/App.css'
import search from '../Images/search.png'
import Nav from './Nav';
import Footer from './Footer';
function Home() {
    
    return (
        <div>
            
            <div>
                <h1 className='home-h1'>Stock market analysis for the <br /> serious part-time investor</h1>
                <h4 className='home-h4'>We use intuitive data visualizations and automated stock analysis to help <br /> you understand a stock's fundamentals within minutes.</h4>
            </div>


            <div>
                <h1 className='home-h1'>A quick guide to our product</h1>
                <img src={Tour} className="home-guide-image rounded mx-auto d-block" alt="" />
            </div>

            <div className="row justify-content-evenly mt-5">
                <div className="col-md-4 text-center home-para-brdr text-white">
                    <h4>I was a finance major many moons ago, but your analysis just makes it very easy to make quick informative decisions...good job!!</h4>
                    <p >Jake Wood <br /> Anonymous User</p>
                </div>
                <div className="col-md-4 text-center home-para-without-brdr">
                    <h4>You're just 30 seconds away from unlocking <span style={{ color: 'rgb(' + 172 + ',' + 0 + ',' + 172 + ')' }}>the best stock analysis tool for part-time investors</span></h4>
                </div>
            </div>

            <div className="row justify-content-evenly mt-5">
                <div className="col-md-4 text-center home-para-without-brdr">
                    <h4>You're just 30 seconds away from unlocking <span style={{ color: 'rgb(' + 172 + ',' + 0 + ',' + 172 + ')' }}>the best stock analysis tool for part-time investors</span></h4>
                </div>
                <div className="col-md-4 text-center home-para-brdr text-white">
                    <h4 >I was a finance major many moons ago, but your analysis just makes it very easy to make quick informative decisions...good job!!</h4>
                    <p>Jake Wood <br /> Anonymous User</p>
                </div>
            </div>
            
        </div>
    )
}

export default Home;