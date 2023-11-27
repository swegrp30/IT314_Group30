import React from 'react';
import '../style/error.css'
import errorImage from '../Images/401.jpg';
import { Link } from 'react-router-dom';
const Error401 = () => {




  return (
    <div >
      <div className="d-flex flex-column justify-content-center align-items-center page_404 ">
        <div className="">
          <div className="row">
            <div className="col-sm-12 ">
              <div className="col-sm-12 col-sm-offset-1  text-center">
                <div className="four_zero_four_bg">
                  <h1 className="text-center  ">401-Unauthorized</h1>


                </div>

                <div className="contant_box_404">
                  <h3 className="h2">
                    Looks like you're an alien
                  </h3>

                  <p>the page you are looking for is Unauthorized!</p>

                  <Link className="link_404" to='/login' style={{ marginRight: '10px' }}>Go to Login</Link>
                  <Link className="link_404" to='/'>Go to Home Page</Link>

                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Error401;
