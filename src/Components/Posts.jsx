import React from 'react'
import article from "./../img/article.png";
import PostNavbar from './PostNavbar';
import Ieisure from "./../img/Ieisure.png";
import activism from "./../img/activism.png";
import mba from "./../img/mba.png";
import philosophy from "./../img/philosophy.png";
import education from "./../img/education.png";
import sarthak from "./../img/sarthak.png";
import sarah from "./../img/sarah.png";
import ronal from "./../img/ronal.png";
import meetup from "./../img/meetup.png";
import Vector from "./../img/Vector.png"


const Posts = () => {
  return <>
  <div className="container mt-4">
    <PostNavbar/>
    <div className="row mt-4 mb-4">
        <div className="col-md-8 col-sm-12">
            <div class="card mb-4">
<img src={article} alt="" />
<div className='main-card'>
    <div className='spaces'>
<div><i class="bi bi-pencil-square"></i></div>
    <h6>Artical</h6>
    </div>

    <div className='main-inline'>
    <h2>What if famous brands had regular fonts? Meet RegulaBrands!</h2>
    <div class="dropdown">
      <div class="dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" >
      <i class="bi bi-three-dots-vertical"></i>
      </div>
      <ul class="dropdown-menu">
        <li><a class="dropdown-item" href="#">Edit</a></li>
        <li><a class="dropdown-item" href="#">Report</a></li>
        <li><a class="dropdown-item" href="#">Opations 3</a></li>
      </ul>
    </div>
    </div>

    <p>I’ve worked in UX for the better part of a decade. From now on, I plan to rei…</p>

<div className='main-inline'>
<div className='spaces'>
    <img src={sarthak} alt="" />
    <h6>Sarthak Kamra</h6>
</div>
<div className='spaces'>
    <p><i class="bi bi-eye-fill"></i></p>
    <p> 1.4k views</p>
</div>
<i class="bi bi-share"></i>
</div>
</div>
            </div>
            <div class="card mb-4">
<img src={education}  alt="" />
<div className='main-card'>
    <div className='spaces'>
<div><i class="bi bi-pencil-square"></i></div>
    <h6>Education</h6>
    </div>

    <div className='main-inline'>
    <h2>Tax Benefits for Investment under National Pension Scheme launched by Government</h2>
    <div class="dropdown">
      <div class="dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" >
      <i class="bi bi-three-dots-vertical"></i>
      </div>
      <ul class="dropdown-menu">
        <li><a class="dropdown-item" href="#">Edit</a></li>
        <li><a class="dropdown-item" href="#">Report</a></li>
        <li><a class="dropdown-item" href="#">Opations 3</a></li>
      </ul>
    </div>
    </div>

    <p>I’ve worked in UX for the better part of a decade. From now on, I plan to rei…</p>

<div className='main-inline'>
<div className='spaces'>
    <img src={sarah} alt="" />
    <h6>Sarah West</h6>
</div>
<div className='spaces'>
    <p><i class="bi bi-eye-fill"></i></p>
    <p> 1.4k views</p>
</div>
<i class="bi bi-share"></i>
</div>
</div>
            </div>

            <div class="card mb-4">
<img src={meetup} alt="" />
<div className='main-card'>
    <div className='spaces'>
<div><i class="bi bi-pencil-square"></i></div>
    <h6>Meetup</h6>
    </div>

    <div className='main-inline'>
    <h2>Finance & Investment Elite Social Mixer @Lujiazui</h2>
    <div class="dropdown">
      <div class="dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" >
      <i class="bi bi-three-dots-vertical"></i>
      </div>
      <ul class="dropdown-menu">
        <li><a class="dropdown-item" href="#">Edit</a></li>
        <li><a class="dropdown-item" href="#">Report</a></li>
        <li><a class="dropdown-item" href="#">Opations 3</a></li>
      </ul>
    </div>
    </div>

<div className='mt-4 mb-4'>
  <div className='main-inline'>
    <p>
  <span><i class="bi bi-calendar2-event-fill"></i></span>
  <span> Fri, 12 Oct, 2018</span>
  
    </p>
    <p>
  <span><i class="bi bi-geo-alt"></i></span>
    Ahmedabad, India
    </p>
  </div>
</div>

<div className="d-grid">
<button type="button" class="mb-4 btn btn-outline-danger">Visit Website</button>
</div>



<div className='main-inline'>
<div className='spaces'>
    <img src={ronal} alt="" />
    <h6>Ronal Jones</h6>
</div>
<div className='spaces'>
    <p><i class="bi bi-eye-fill"></i></p>
    <p> 1.4k views</p>
</div>
<i class="bi bi-share"></i>
</div>
</div>
            </div>


            {/* <div class="card mb-4">
<img src={meetup} alt="" />
<div className='main-card'>
    <div className='spaces'>
<div><i class="bi bi-pencil-square"></i></div>
    <h6>Meetup</h6>
    </div>

    <div className='main-inline'>
    <h2>Finance & Investment Elite Social Mixer @Lujiazui</h2>
    <div class="dropdown">
      <div class="dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" >
      <i class="bi bi-three-dots-vertical"></i>
      </div>
      <ul class="dropdown-menu">
        <li><a class="dropdown-item" href="#">Edit</a></li>
        <li><a class="dropdown-item" href="#">Report</a></li>
        <li><a class="dropdown-item" href="#">Opations 3</a></li>
      </ul>
    </div>
    </div>

<div className='mt-4 mb-4'>
  <div className='main-inline'>
    <p>
  <span><i class="bi bi-calendar2-event-fill"></i></span>
  <span> Fri, 12 Oct, 2018</span>
  
    </p>
    <p>
  <span><i class="bi bi-geo-alt"></i></span>
    Ahmedabad, India
    </p>
  </div>
</div>

<div className="d-grid">
<button type="button" class="mb-4 btn btn-outline-danger">Visit Website</button>
</div>



<div className='main-inline'>
<div className='spaces'>
    <img src={ronal} alt="" />
    <h6>Ronal Jones</h6>
</div>
<div className='spaces'>
    <p><i class="bi bi-eye-fill"></i></p>
    <p> 1.4k views</p>
</div>
<i class="bi bi-share"></i>
</div>
</div>
            </div> */}
        </div>
        <div className="col-md-4 center">
<div>

                <div className='center'>
                <div class="horizontal-line">
                  <span className='icons-search'>
                <i class="bi bi-geo-alt-fill"></i>
                  </span>
  {/* <input type="text" id="name" name="name" class="input-field" placeholder="Noida India"/> */}
  <div  className='location-para'>
                  <p><i class="bi bi-geo-alt-fill">Noida India</i> <i class="bi bi-pencil"></i></p>
                  </div>
</div>
                </div>
                <div></div>
<p className='mt-2 mb-2'> <span><img src={Vector} width={16} alt="" /></span> Your location will help us serve better and extend a personalised experience.</p>

<div className='center'>
<h6 className='mt-4 mb-4'> <span><i class="bi bi-hand-thumbs-up p-3"></i></span>  REcommended Groups</h6>
</div>

<div className='main-inline'>
<div className='spaces'>
  <img src={Ieisure} alt="" />
  <h6>Leisure</h6>
</div>
  <div className='batch'>follow</div>
</div>
<div className='main-inline'>
<div className='spaces'>
  <img src={activism} alt="" />
  <h6>Activism</h6>
</div>
  <div className='batch'>follow</div>
</div>
<div className='main-inline'>
<div className='spaces'>
  <img src={mba} alt="" />
  <h6>MBA</h6>
</div>
  <div className='batch'>follow</div>
</div>
<div className='main-inline'>
<div className='spaces'>
  <img src={philosophy} alt="" />
  <h6>Philosophy</h6>
</div>
  <div className='batch'>follow</div>
</div>
            </div>
        </div>
    </div>
  </div>






 
  </>
}

export default Posts