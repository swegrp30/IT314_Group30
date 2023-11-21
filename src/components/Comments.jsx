import React, { useState } from "react";
import axios from "axios";
const Comments =  () => {
  const [comments, setComments] = useState();
  const handleChange = (e) => {
    // 👇️ access textarea value
    setComments(e.target.value);

  };
  const token = localStorage.getItem('authToken')
  // console.log(token)

  const headers = {
    'Content-Type': 'application/json',
    'auth-token': token,

  }
  const handleClear=()=>{
    setComments('')
  }
  const handleUser=async (e)=>{
    const res = await axios.get('http://localhost:7000/getuser',{headers})
    const username = res.data[0].username
    // console.log(username)
    return username
  }
  const handleAdd = async (e) => {
    const username = await handleUser();
    
    // console.log(username)
    const res = await axios.post('http://localhost:7000/addComments', { comment: comments, company: 'SBI', username: username}, { headers: headers })
    console.log(res.status)
    setComments('')
  }
  return (
    <div>
      <section>
        <div >
          <div className="row d-flex justify-content-start">
            <div className="col-md-12 col-lg-10 col-xl-8">
              <div className="card">
                <div className="card-footer py-3 border-0">
                  <div className="d-flex flex-column flex-start w-100">
                    <h3>Add Comment</h3>
                    <div className="form-outline w-100">
                      <textarea
                        className="form-control"
                        id="comments"
                        name="comments"
                        value={comments}
                        onChange={handleChange}
                        rows="4"
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
