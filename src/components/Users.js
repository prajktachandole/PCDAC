import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { Link } from 'react-router-dom';

export default function Users() {
  const [users, setUsers] = useState([]);


  useEffect(() => {
    axios.get("http://localhost:8787/user/getUsers").then((res) => {
      console.log(res.data);
      setUsers(res.data);
    }).catch((err) => {
      console.log(err);
    })
  }, []);
  const setDataToLocalStorage=(id,name,userName,age)=>{
    localStorage.setItem('ID', id);
    localStorage.setItem('NAME', name);
    localStorage.setItem('USERNAME', userName);
    localStorage.setItem('AGE', age);
  }
  return (
    <>
      <div className='container'>
        <br />
        <h1>Users</h1>
        <br />
        <div className='row'>
          <table class="table table-striped">
            <thead>
              <tr>
                <th scope="col">Id</th>
                <th scope="col">Name</th>
                <th scope="col">UserName</th>
                <th scope="col">Age</th>
                <th scope="col">Edit</th>
                <th scope="col">Delete</th>
              </tr>
            </thead>
            <tbody>

              {
                users.map((user) => {
                  return (
                    <tr>
                      <td>{user.id}</td>
                      <td>{user.name}</td>
                      <td>{user.userName}</td>
                      <td>{user.age}</td>
                      <td><Link to="/update">
                        <button className='btn btn-primary' onClick={()=>{setDataToLocalStorage(user.id,user.name,user.userName,user.age)}}>
                          Update</button>
                      </Link>
                      </td>
                      <td> 
                        <button className='btn btn-danger'>Delete</button>
                      </td>
                    </tr>
                  )
                })
              }

              <tr>

              </tr>
              <tr>

              </tr>
            </tbody>
          </table>

        </div>

      </div>

    </>
  )
}
