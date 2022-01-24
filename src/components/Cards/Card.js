import React from "react";
import "./Card.css";
function Card({ img, title, insta, line, name, linekdin }) {
  return (
    <div className="col-lg-4 col-md-6 py-6" style={{ marginTop: "4rem", }}>
      <div className="card baseBlock border-0" style={{ width: "20rem", backgroundColor:"white" }}>
        <div style={{ borderRadius: "200px", backgroundColor:"white" }}>
          <img
            className="card-img-top img-fluid"
            src={img}
            alt="Card image cap"
          />
        </div>

        <div className="card-body " style={{ backgroundColor:"white"}}>
          <div style={{ textAlign: "center", backgroundColor:"white" }}>
            {" "}
            <h4 className="card-title" style={{ backgroundColor:"white"}}>{name}</h4>
            <h4 className="card-title" style={{ backgroundColor:"white"}}>{title}</h4>
          </div>

          <p className="card-text" style={{ backgroundColor:"white"}}>{line}</p>
          <div className="p-2" style={{ backgroundColor:"white"}}>
            <a href={linekdin}>
              {" "}
              <i class="fab fa-linkedin" style={{ fontSize: "2rem",backgroundColor:"white" }}></i>
            </a>
            <a href={insta}>
              <i
                class="fab fa-instagram"
                style={{ fontSize: "2rem", marginLeft: "5px",backgroundColor:"white" }}
              ></i>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Card;
