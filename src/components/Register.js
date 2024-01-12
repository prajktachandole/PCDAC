import React, { useRef } from 'react'
import axios from 'axios'


export default function Register() {
  const name=useRef();
    const userName=useRef();
    const age=useRef();
  const handleSubmit=(e)=>{
    e.preventDefault();
    // console.log(name.current.value);
    // console.log(UserName.current.value);
    // console.log(age.current.value);
    axios.post("http://localhost:8787/user/add",{
      name:name.current.value,
      userName:userName.current.value,
      age:age.current.value

    })
    .then((res)=>{
      console.log(res.data);
      
    })
    .catch((err)=>{
      console.log(err);
    });
  }
  return (
    <div>
     <>
      <div className="container">
        <br />
        <h1>Register User</h1>
        <br />
        <div className="row mb-4">
          <div className="col-lg-4 border">
            <form className="mt-2 mb-2">
              <div class="mb-3">
                <label class="form-label">Enter Name</label>
                <input type="text" class="form-control" ref={name} />
              </div>
              <div class="mb-3">
                <label class="form-label">Enter User Name</label>
                <input type="text" class="form-control"ref={userName}/>
              </div>
              <div class="mb-3">
                <label class="form-label">Enter Age</label>
                <input type="text" class="form-control"ref={age} />
              </div>
              <button type="submit" class="btn btn-primary"onClick={handleSubmit}>
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
    </div>
  )
}
