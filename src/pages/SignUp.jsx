import React from 'react'
import sign from "./../img/sign.png";
import { Link } from 'react-router-dom';
import Facebook from "./../img/Facebook.png"
import Googl from "./../img/Googl.webp"

const SignUp = () => {
  return <>
  <div className="row">
    <div className="col-md-6 signup">
      <h3 className='text-bold mt-2 mb-4'>Create Account</h3>
      <div className='p-2'>


                <div className='d-flex'>
                  <input
                    type="text"
                    class="w-50 p-2 form-control py-2"
                    id="name"
                    placeholder="First Name"
                    />
                  <input
                    type="text"
                    class="w-50 p-2 form-control py-2"
                    id="email"
                    placeholder="Last Name"
                    />
                    </div>
                  <input
                    type="text"
                    class="form-control py-2"
                    id="password"
                    placeholder="Email"
                    />
                 
                  <input
                    type="text"
                    class="form-control py-2"
                    id="cpassword"
                    placeholder="Password"
                  />
                  <input
                    type="text"
                    class="form-control py-2"
                    id="cpassword"
                    placeholder="Confirm Password"
                  />
      </div>
                <button type="button" class="btn btn-primary btn-c w-100 mt-3">
                Create Account
                </button> 
                <div className='mt-4 center gap-3'>
                <img src={Facebook} width={30} alt="" /> <span>Sign up with Facebook</span> 
                </div>
                <div className='mt-4 center gap-3'>
                <img src={Googl} width={40} alt="" /> <span>Sign up with Google</span> 
                </div>

                
                <button type="button" class="btn btn-light w-100 mt-3">
                
                </button>

  </div>
            <div className="col-md-6 signup-img">
                <p class="text-center mt-3">
                  Already Have Account? <Link to="/login">Login</Link>
                </p>
            <img src={sign} width={350} alt="" />
            <p className='alert-fonts'>By signing up, you agree to our Terms & conditions, Privacy policy</p>
        </div>
                    </div>
  </>
}

export default SignUp