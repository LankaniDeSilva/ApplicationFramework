import React from "react"

import sliit from "../Pamitha/images/SLIIT.png";
import "./CSS/StudentHome.css";

export default function StudentHome(){
    return(
        <div>
            <table>
             <tr>
               <td>
             <img src={sliit} style={{width:"300px", height:"90px", marginLeft:"70px",marginTop:"20px", marginBottom:"20px"}}/>
             </td>
             <td>
             <div >
             
             <button class="btn btn-outline-primary">Sign Out</button >&nbsp; 
             
           
             </div>
             </td>
             </tr>
             </table>

             <div>
                <div class="jumbotron jumbotron-fluid">
                    <div class="container">
                        <h3 class="display-4">Group Registration</h3>
                    </div>
                </div>
                <br/>
                <div class="jumbotron jumbotron-fluid">
                    <div class="container">
                        <h3 class="display-4">Register Research Topic</h3>
                    </div>
                    <p><a href="/researchtopic">Click Here</a></p>
                </div>
                <br/>
                <div class="jumbotron jumbotron-fluid">
                    <div class="container">
                        <h3 class="display-4">Request Supervisor</h3>
                    </div>
                </div>
                <br/>
                <div class="jumbotron jumbotron-fluid">
                    <div class="container">
                        <h3 class="display-4">Request Co-Supervisor</h3>
                    </div>
                </div>
                <br/>
                <div class="jumbotron jumbotron-fluid">
                    <div class="container">
                        <h3 class="display-4">Download Document</h3>
                    </div>
                    
                </div>
                <br/>
                <div class="jumbotron jumbotron-fluid">
                    <div class="container">
                        <h3 class="display-4">Submit Document</h3>
                    </div>
                    <p><a href="/studentsub">Click here</a></p>
                </div>
                <br/>
                <div class="jumbotron jumbotron-fluid">
                    <div class="container">
                        <h3 class="display-4">Evaluation Panel Feedback</h3>
                    </div>
                </div>
                <br/>
                <div class="jumbotron jumbotron-fluid">
                    <div class="container">
                        <h3 class="display-4">Download Template</h3>
                    </div>
                </div>
                <br/>
                <div class="jumbotron jumbotron-fluid">
                    <div class="container">
                        <h3 class="display-4">Submit Presentation</h3>
                    </div>
                    <p><a href="/studentsub">Click here</a></p>
                </div>
                <br/>
                <div class="jumbotron jumbotron-fluid">
                    <div class="container">
                        <h3 class="display-4">Submit Final Thesis</h3>
                    </div>
                    <p><a href="/studentsub">Click here</a></p>
                </div>
                <br/>
            </div>
                
                
        </div>
    )
}