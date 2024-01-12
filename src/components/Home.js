import React from 'react'
import { Link } from 'react-router-dom'


export default function Home() {
  return (
    <>
      <div className='conatiner'>
        <br/>
        <h1>User Management System</h1>
        <br/>
        <div class='row '>
            <div class='col-xl-6 '><div class="card">
      <div class="card-body">
        <h5 class="card-title">User</h5>
        <p class="card-text">With supporting text below as a natural lead-in to additional content.</p>
        <Link to="/user" class="btn btn-primary">Get Users</Link>
      </div>
    </div></div>
        
        <div class=' col-xl-6 '><div class="card">
      <div class="card-body">
        <h5 class="card-title">Register User</h5>
        <p class="card-text">With supporting text below as a natural lead-in to additional content.</p>
        <Link to="/register" class="btn btn-primary">Register</Link>
      </div>
    </div>
    </div>
        </div>
      </div>


    </>
  )
}
