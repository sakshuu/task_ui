import React from 'react'
import Background from "./../img/Background.png";

const Home = () => {
  return <>

   <div className="main">
   <img src={Background} className="heroBackground" alt="" />
   <div className="sub">
   <h1 className="text-white text-bold">Computer Engineering</h1>
   <p className="text-white">142,765 Computer Engineers follow this</p>
   </div>
   </div>
   
  </>
}

export default Home