import React from "react";
import "./CSS/footer.css";
import sliit from "./images/SLIIT.png";

function Header() {
  return (
    <div>
        <br />
    <br />
    <br />
    <br />
      <div class="foot">
        <footer class="footer-distributed">
        <a href="/feedbackadd">
               <button class="btn btn-warning" style={{width:"200px", color:"white", fontSize:"18px"}}>Feedback</button>
            </a>
          <div class="footer-right">
          
            <a href="#">
              <i class="fa fa-facebook"></i>
            </a>
            <a href="#">
              <i class="fa fa-twitter"></i>
            </a>
            <a href="#">
              <i class="fa fa-instagram"></i>
            </a>
            <a href="#">
              <i class="fa fa-linkedin"></i>
            </a>
            <a href="#">
              <i class="fa fa-github"></i>
            </a>
          </div>
         
          <div class="footer-left">
          <br/>
            <p>Research Management Tool &copy; 2021</p>
          </div>
        </footer>
      </div>
    </div>
  );
}

export default Header;
