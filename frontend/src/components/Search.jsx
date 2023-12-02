import React from 'react'

const Search = () => {
  return (
    <div className="row height  d-flex justify-content-center align-items-center  ">
    <div className="col-md-6 ">
      <div className="form mt-5 mb-2 ">
        <i className="fa fa-search"></i>
        <input type="text" className="form-control form-input" placeholder="Search anything..." />
        <span className="left-pan"></span>
      </div>
    </div>
  </div>
  )
}

export default Search