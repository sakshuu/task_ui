import React from 'react'

const PostNavbar = () => {
  return <>
  <nav class="navbar navbar-expand-lg bg navbar-light mb-4">
    <div class="container-fluid">
      <a class="navbar-brand underline" href="#">All Posted (32)</a>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
        <div class="navbar-nav">
          <a class="nav-link active" href="#">Artical</a>
          <a class="nav-link" href="#">Event</a>
          <a class="nav-link" href="#">Education</a>
          <a class="nav-link" href="#">Job</a>
        </div>
        <div className="ms-auto d-flex gap-4">
            <div class="dropdown">
              <button class="btn btn-light dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" >
Write a post
              </button>
              <ul class="dropdown-menu">
                <li><a class="dropdown-item" href="#">Action</a></li>
                <li><a class="dropdown-item" href="#">Another action</a></li>
                <li><a class="dropdown-item" href="#">Something else here</a></li>
              </ul>
            </div>
            <button type="button" class="btn btn-primary"><i class="bi bi-people-fill"></i> Join Group</button>
        </div>
      </div>
    </div>
  </nav>
  </>
}

export default PostNavbar