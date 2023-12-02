import React, { useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Comments =  () => {
  const token = localStorage.getItem('authToken')
  const params = useParams();
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
    
      const res = await axios.get('https://sharebb-production.up.railway.app/getuser',{headers})
    console.log(res)
    const username = res.data.username
    
    return username
  }
  catch(error){
    console.log(error)
  }
  }
  const handleAdd = async () => {
    // Check if the comment is empty or contains only whitespace characters
    if (!comments || !comments.trim()) {
      // You can customize this error handling as per your requirements
      // alert("Please enter a non-empty comment");

      toast.error("Please enter a non-empty comment")
      

      return;
    }
  
    const username = await handleUser();
  
    try {
      const res = await axios.post(
        'https://sharebb-production.up.railway.app/addComments',
        { comment: comments, company: `${params.id}`, username: username },
        { headers: headers }
      );
  
      setComments('');
    } catch (error) {
      console.error(error);
      // Handle error appropriately, e.g., show an error message to the user
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault(); // prevent new line
      handleAdd();
    }
  };

  

  return (
    <div>
      <section>
        <div >
          <div className="row d-flex justify-content-center">
            <div className="col-md-12 col-lg-10 col-xl-8">
              <div className="cardComment" >
                <div className="card-footer py-3 border-0" style={{backgroundColor:"white"}}>
                  <div className="d-flex flex-column flex-start w-100">
                    <ToastContainer/>
                    <h3>Add Comment</h3>
                    <div className="form-outline w-100">
                      <textarea
                        className="form-control"
                        id="comments"
                        name="comments"
                        value={comments}
                        onChange={handleChange}
                        onKeyPress={handleKeyPress}
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
