import React from "react";
import "./style.css"

function Card() {
    return (
        <div className="card" style={{}}>
        <img src="..." className="card-img-top" alt="..." />
        <div className="card-body">
          <h5 class="card-title">Card title</h5>
          <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
          <a href="#" className="btn btn-primary">Go somewhere</a>
        </div>
      </div>
    )
}

export default Card;