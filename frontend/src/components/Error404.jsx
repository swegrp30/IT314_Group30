import React from 'react';
import '../style/404.css'
import errorImage from '../Images/401.jpg';
import { Link } from 'react-router-dom';
const Error404 = () => {




  return (
    <div >
      <div className="d-flex flex-column justify-content-center align-items-center page_404 ">
        <div className="">
          <div className="row">
            <div className="col-sm-12 ">
              <div className="col-sm-12 col-sm-offset-1  text-center">
                  <h1 className="text-center  ">404 - Page Not Found</h1>
                <div className="four_zero_four_bg">


                </div>

                <div className="contant_box_404">
                    <br />
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

export default Error404;
