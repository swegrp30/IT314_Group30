
// import React from "react";
// import { Link } from "react-router-dom";
// import '../style/stock.css';

// const Stock = (prop) => {
//   return (
//     <div className="col-lg-4 col-md-6 col-sm-12">
//       <div className="card l-bg-blue-dark">
//         <div className="card-statistic-3 p-4">
//           <div className="card-icon card-icon-large">
//             <i className="fas fa-users"></i>
//           </div>
//           <Link to={`/share/${prop.name}`}>
//             <div className="mb-4">
//               <h5 className="card-title mb-0">{prop.name}</h5>
//             </div>
//             <div className="row align-items-center mb-2 d-flex">
//               <div className="col-8">
//                 <h2 className="d-flex align-items-center mb-0">$ {prop.lastClose}</h2>
//               </div>
//               <div className="col-4 text-right">
//                 <span>
//                   {prop.lastChange}% <i className="fa fa-arrow-up"></i>
//                 </span>
//               </div>
//             </div>
//             <div>
//               <button>Redirect</button>
//             </div>
//           </Link>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Stock;


import React from "react";
import { Link } from "react-router-dom";
import '../style/stock.css';
import { textDecoration } from "@chakra-ui/react";

const Stock = (prop) => {
  const isPositiveChange = prop.lastChange > 0;
  const arrowIconClass = isPositiveChange ? "fa-arrow-up text-success" : "fa-arrow-down text-danger";
  const percentageChangeColor = isPositiveChange ? "text-success" : "text-danger";

  return (
    <div className="col-lg-4 col-md-6 col-sm-12">
      <div className="card l-bg-blue-dark">
        <div className="card-statistic-3 p-4">
          <div className="card-icon card-icon-large">
            <i className="fas fa-users"></i>
          </div>
          <Link to={`/share/${prop.name}`}>
            <div className="mb-4">
              <h5 className="card-title mb-0">{prop.name}</h5>
            </div>
            <div className="row align-items-center mb-2 d-flex">
              <div className="col-8">
                <h2 className="d-flex align-items-center mb-0">$ {prop.lastClose}</h2>
              </div>
              <div className="col-4 text-right">
                <span className={percentageChangeColor} style={{ fontWeight: 'bold', fontSize: '20px' }}>
                  {prop.lastChange}%<i className={`fa ${arrowIconClass}`}></i>
                </span>
              </div>
            </div>
            <div>
              <button>Redirect</button>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Stock;
