import React from 'react'
import icon from "./../img/icon.png";
import SignUp from '../pages/SignUp';

const MyNavbar = () => {
  return <>

<nav className="navbar navbar-expand-lg navbar-light ">
      <div className="container">
        <a className="navbar-brand" href="#">
          <img src={icon} width={170} alt="" />
        </a>

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse ms-auto" id="navbarNav">
            <div className='inp navbar-nav ms-auto'>
            <input
              type="text"
              className="rounded-inp"
              placeholder="Search for your favorite groups in ATG"
              aria-label="Search"
              aria-describedby="searchIcon"
              />
            <div> <i className="bi bi-search"></i></div>
              
          </div>
<div className="navbar-nav ms-auto">

        <div className="mt-3 mt-lg-0">
          <a
            className="nav-link"
            href="#"
            data-bs-toggle="modal"
            data-bs-target="#exampleModal"
            >
            Create an Account. <span className='blue'>It's Free</span> 
          </a>
        </div>
        </div>
            </div>
        </div>
    </nav>


    <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
    <div class="modal-dialog">
      
<div className="row">
  <div className="col-sm-12 col-md-12">
      <div class="modal-content">
            <span class="modal-title alert-font alert alert-success text-bold" id="exampleModalLabel" >
              Let's learn, share & inspire each other with our passion for computer engineering. Sign up now 🤘🏼
            </span>
      <div className='brn-end'>
          <button type="button" class="btn-close btn-primary" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
        <div class="modal-body">
          <SignUp/>
        </div>
      </div>
    </div>
  </div>
  </div>
</div>














  
  </>
}

export default MyNavbar