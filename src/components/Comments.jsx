import React, { useState } from "react";
import axios from "axios";
const Comments =  () => {
  const token = localStorage.getItem('authToken')
  
  const headers = {
    'Content-Type': 'application/json',
    'auth-token': token,
    
  }
  const [comments, setComments] = useState();
  const handleChange = (e) => {
    // 👇️ access textarea value
    setComments(e.target.value);
    
  };
  const handleClear=()=>{
    setComments('')
  }
  const handleUser=async (e)=>{
    try{
    
      const res = await axios.get('http://localhost:7000/getuser',{headers})
    console.log(res)
    const username = res.data.username
    
    return username
  }
  catch(error){
    console.log(error)
  }
  }
  const handleAdd = async (e) => {
    const username = await handleUser();
    
    
    const res = await axios.post('http://localhost:7000/addComments', { comment: comments, company: 'SBI', username: username}, { headers: headers })
    
    setComments('')
  }
  return (
    <div>
      <section>
        <div >
          <div className="row d-flex justify-content-left">
            <div className="col-md-12 col-lg-10 col-xl-8">
              <div className="cardComment" style={{marginLeft:100}}>
                <div className="card-footer py-3 border-0" style={{backgroundColor:"white"}}>
                  <div className="d-flex flex-column flex-start w-100">
                    <h3>Add Comment</h3>
                    <div className="form-outline w-100">
                      <textarea
                        className="form-control"
                        id="comments"
                        name="comments"
                        value={comments}
                        onChange={handleChange}
                        rows="3"
                      ></textarea>
                    </div>
                  </div>
                  <div className="d-flex flex-row  mt-2 pt-1">
                    <button type="button" className="btn btn-primary  me-2 " onClick={handleAdd}>
                      Add comment
                    </button>
                    <button type="button" className="btn btn-primary" onClick={handleClear}>
                      Clear
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Comments;
