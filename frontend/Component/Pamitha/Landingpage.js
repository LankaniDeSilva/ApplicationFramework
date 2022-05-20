import React, { Component } from "react";
import background from "./images/load.jpg";

export default class LandingPage extends Component {
  render() {
    return (
      // <div class="container-fluid bg-secondary bg-gradient" style={{textAlign: "center", height: "100%"}}>
      <div
        className="container-fluid"
        style={{
          backgroundImage: `url(${background})`,
          height: "700px",
          width: "1000px",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
        }}
      >
 
        <h1 style={{ textAlign: "center", paddingTop: "50px" }}>
          {" "}
          Research Management Tool
        </h1>
        <hr class="border-primary border-3 opacity-75"></hr>
        <br />
        <br />

        <div class="container">
          <div
            class="col-10"
            style={{
              margin: "auto",
              backgroundColor: "",
              border: "2px solid black",
            }}
          >
            <div class="p-3 border">
              <a
                href="/slogin"
                style={{ width: "100%", border: "none" }}
                type="button"
                class="btn btn-outline-dark"
              >
                {" "}
                <p class="fw-bold fs-4"> For Students </p>
              </a>
            </div>
          </div>
          <br />
          <br />
          <div
            class="col-10"
            style={{
              margin: "auto",
              backgroundColor: "",
              border: "2px solid black",
            }}
          >
            <div class="p-3 border">
              <a
                href="/stafflogin"
                style={{ width: "100%", border: "none" }}
                type="button"
                class="btn btn-outline-dark"
              >
                <p class="fw-bold fs-4"> For Staff </p>
              </a>
            </div>
          </div>
          <br />
          <br />
          <div
            class="col-10"
            style={{
              margin: "auto",
              backgroundColor: "",
              border: "2px solid black",
            }}
          >
            <div class="p-3 border">
              <a
                href="/rlogin"
                style={{ width: "100%", border: "none" }}
                type="button"
                class="btn btn-outline-dark"
              >
                <p class="fw-bold fs-4"> For Admin </p>
              </a>
            </div>
          </div>
        </div>
        <br />
        <br />
      </div>
    );
  }
}
