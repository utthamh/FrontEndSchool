import React from 'react'
import { Link } from 'react-router-dom'

export default function LoginForm() {
    const [show,setshow]=React.useState(false)
    
    return (
        <div className="login-form">
        
        <div className="form-group">
          <label htmlFor="email" className="placeholder"><b>Email</b></label>
          <input id="email" name="email" type="email" className="form-control" required />
        </div>
        <div className="form-group">
          <label htmlFor="passwordsignin" className="placeholder"><b>Password</b></label>
          <div className="position-relative">
            <input id="passwordsignin" name="passwordsignin" type={show?'text':'password'} className="form-control" required />
            <div className="show-password">
              <i className="fa fa-eye"  onClick={()=>setshow(!show)}/>
            </div>
          </div>
        </div>
        <div className="form-group">
          <label htmlFor="role" ><b>Role</b></label>
          <select id="role" name="role" className="form-control">
              <option hidden>Select Role..</option>
              <option>admin</option>
              <option>student</option>
              <option>faculty</option>
              
              </select>
        </div>
        
        
        <div className="row form-action">
         
          <div className="col-md-12">
            <Link to='/admin' className="btn btn-success w-100 fw-bold">Login</Link>
          </div>
        </div>
      </div>        
    )
}
