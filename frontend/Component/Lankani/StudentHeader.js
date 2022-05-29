import React from "react"



function Header(){

    return(
         <div >
           
              <nav class="navbar navbar-expand-lg navbar-dark bg-dark" style={{ borderBottom:"4px solid orange"}}>
                <div class="container-fluid">
                 
                <div class="collapse navbar-collapse" id="navbarSupportedContent">
                   <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                     
                     <li class="nav-item">
                 
                       <a class="nav-link" href="/studenthome" >Student Home</a>
                     
                     </li>
                     <li class="nav-item">
                       <a class="nav-link" href="/stnotice">Notice</a>
                     </li>
                     
                     <li class="nav-item">
                       <a class="nav-link" href="/studentmark">Marks</a>
                     </li>
                   
                     <li class="nav-item">
                       <a class="nav-link" href="/register">Group Register</a>
                     </li>
                    
                     <li class="nav-item dropdown">
                        <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                        Dropdown
                        </a>
                    <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
                        <li><a class="dropdown-item" href="">Link</a></li>
                        <li><a class="dropdown-item" href="#">Link</a></li>
                        <li><hr class="dropdown-divider"/></li>
                        <li><a class="dropdown-item" href="#">Link</a></li>
                    </ul>
                    </li>
                   
                    </ul>
                     <a href="/rlogin"><button class="btn btn-outline-primary">Sign Out</button></a>&nbsp;
                   <form class="d-flex">
                       
                       <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
                       <button class="btn btn-outline-success" type="submit">Search</button>
                   </form>
             </div>
          </div>
       </nav>



  
         </div>
    )
}

export default Header;