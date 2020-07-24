import React from 'react'
import LoginForm from '../forms/LoginForm'
export default function Login() {
    return (
     <div className="login">
  <div className="wrapper wrapper-login wrapper-login-full p-0">
    <div className="login-aside w-50 d-flex flex-column align-items-center justify-content-center text-center bg-success-gradient">
      <h1 className="title fw-bold text-white mb-3">Join Our School</h1>
      <p className="subtitle text-white op-7">Ayo bergabung dengan komunitas kami untuk masa depan yang lebih baik</p>
    </div>
    <div className="login-aside w-50 d-flex align-items-center justify-content-center bg-white">
      <div className="container container-login container-transparent animated fadeIn" style={{display: 'block'}}>
        <h3 className="text-center">Login</h3>
       <LoginForm/>
      </div>
     
    </div>
  </div>
</div>
    )
}
