import React from "react";

export default function Cursol(){
    return(<>
       <div id="carouselExampleControls" className="carousel slide " data-ride="carousel">
  <div className="carousel-inner">
    <div className="carousel-item active">
      <img className="d-block w-100" src="https://th.bing.com/th/id/OIP.bso0W6RUjvIhDlp5Y4TkxAHaE8?w=275&h=183&c=7&r=0&o=5&pid=1.7" alt="First slide"/>
    </div>
    <div className="carousel-item">
      <img className="d-block w-100" src="https://th.bing.com/th/id/OIP.uYLZRXytpaJr-QyFW1QHEwHaEo?w=344&h=180&c=7&r=0&o=5&pid=1.7" alt="Second slide"/>
    </div>
    <div className="carousel-item">
      <img className="d-block w-100" src="https://th.bing.com/th/id/OIP.k-yr71qjLQpcHhzZkLkiYgHaE_?w=292&h=197&c=7&r=0&o=5&pid=1.7" alt="Third slide"/>
    </div>
  </div>
  <a className="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="sr-only">Previous</span>
  </a>
  <a className="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="sr-only">Next</span>
  </a>
</div></>
    );
}