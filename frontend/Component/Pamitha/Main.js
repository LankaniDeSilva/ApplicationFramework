import React from "react"

import sliit from "./images/SLIIT.png"

function Header(){

    return(
         <div >
           
              <nav class="navbar navbar-expand-lg navbar-dark bg-dark" style={{ borderBottom:"4px solid orange"}}>
                <div class="container-fluid">
                 
                <div class="collapse navbar-collapse" id="navbarSupportedContent">
                   <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                   <li class="nav-item">
                       <a class="nav-link active" aria-current="page" href="/"> Home</a>
                     </li>
                   
                    </ul>
                     <a href="/reg"><button class="btn btn-outline-primary" style={{marginRight:"70px"}}>Sign Up</button></a>
                   
             </div>
          </div>
       </nav>



  
         </div>
    )
}

export default Header;