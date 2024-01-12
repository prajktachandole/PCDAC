import axios from 'axios';
import React, { useEffect, useState } from 'react'

export default function Update() {
  const[id,setID]=useState('');
  const [name, setName] = useState('');
  const [userName, setuserName] = useState('');
  const [age, setAge] = useState('');
  useEffect(()=>{
    setID(localStorage.getItem("ID"));
    setName(localStorage.getItem("NAME"));
    setuserName(localStorage.getItem("USERNAME"));
    setAge(localStorage.getItem("AGE"));

  },[])
  const handleUpdate=(e)=>{
    e.preventDefault();
    //console.log("working");
    axios.put('http://localhost:8787/user/updated/'+id,{
      userName:userName,
      age:age
    }).then((response)=>{
      console.log(response.data);
    }).catch((error)=>{
      console.log(error);
    })
  }
  return (
    <div>
      <>
      <div className="container">
        <br />
        <h1>Update User</h1>
        <br />
        <div className="row mb-4">
          <div className="col-lg-4 border">
            <form className="mt-2 mb-2" onSubmit={handleUpdate}>
            <div class="mb-3">
                <label class="form-label"> Id</label>
                <input type="text" class="form-control" value={id} />
              </div>
              <div class="mb-3">
                <label class="form-label"> Name</label>
                <input type="text" class="form-control" value={name} />
              </div>
              <div class="mb-3">
                <label class="form-label">Enter User Name</label>
                <input type="text" class="form-control" value={userName} onChange={(e)=>{
                  setuserName(e.target.value);
                }} />
              </div>
              <div class="mb-3">
                <label class="form-label">Enter Age</label>
                <input type="text" class="form-control" value={age} onChange={(e)=>{
                  setAge(e.target.value);
                }} />
              </div>
              <button type="submit" class="btn btn-primary">
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
