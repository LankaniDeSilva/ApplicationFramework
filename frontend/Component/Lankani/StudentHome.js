import React from "react"

import sliit from "../Pamitha/images/SLIIT.png";
import "./CSS/StudentHome.css";
import AdminNoticeDisplay from "./AdminNoticeDisplay";


export default function StudentHome(){
    return(
        <div>
    
             <div>
                <AdminNoticeDisplay data={'main'} />
             </div>
             <br/>

             <div>

             <div class="jumbotron jumbotron-fluid">
                    <div class="container">
                        <h3 class="display-4">Student Registration</h3>
                    </div>
                </div>
                <br/>
                <div class="jumbotron1">
                    <AdminNoticeDisplay data={'streg'} />
                    <p><a href="/Student">Click Here</a></p>
                    </div>             
                <br/>
                <br/>
                <div class="jumbotron jumbotron-fluid">
                    <div class="container">
                        <h3 class="display-4">Group Registration</h3>
                    </div>
                </div>
                <br/>
                <div class="jumbotron1">
                    <AdminNoticeDisplay data={'groupreg'} />
                    <p><a href="/register">Click Here</a></p>
                    </div>             
                <br/>
                <br/>
                <div class="jumbotron jumbotron-fluid">
                    <div class="container">
                        <h3 class="display-4">Register Research Topic</h3>
                    </div>
                   
                </div>
                <br/>
                <div class="jumbotron1">
                    <AdminNoticeDisplay data={'researchtopic'} />
                    <p><a href="/researchtopic">Click Here</a></p>
                </div>             
                <br/>
                <br/>
                
                <div class="jumbotron jumbotron-fluid">
                    <div class="container">
                        <h3 class="display-4">Request Supervisor</h3>
                    </div>
                    
                </div>
                <br/>
                <div class="jumbotron1">
                    <AdminNoticeDisplay data={'supervisor'} />
                    <p><a href="/requestsupervisor">Click here</a></p>
                    </div>             
                <br/>

                <br/>
                <div class="jumbotron jumbotron-fluid">
                    <div class="container">
                        <h3 class="display-4">Request Co-Supervisor</h3>
                    </div>
                   
                </div>
                <br/>
                <div class="jumbotron1">
                    <AdminNoticeDisplay data={'cosupervisor'} />
                    <p><a href="/requestcosupervisor">Click Here</a></p>
                    </div>             
                <br/>
                <br/>
                <div class="jumbotron jumbotron-fluid">
                    <div class="container">
                        <h3 class="display-4">Download Document</h3>
                    </div>
                    
                </div>
                <div class="jumbotron1">
                    <AdminNoticeDisplay data={'document'} />
                    </div> 
                <br/>
                <div class="jumbotron jumbotron-fluid">
                    <div class="container">
                        <h3 class="display-4">Submit Document</h3>
                    </div>
                    
                </div>
                <div class="jumbotron1">
                    <AdminNoticeDisplay data={'submitdoc'} />
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
                <div class="jumbotron1">
                    <AdminNoticeDisplay data={'template'} />
                    </div>
                <br/>
                <div class="jumbotron jumbotron-fluid">
                    <div class="container">
                        <h3 class="display-4">Submit Presentation</h3>
                    </div>
                   
                </div>
                <div class="jumbotron1">
                    <AdminNoticeDisplay data={'submitpresentation'} />
                    <p><a href="/studentpresentation">Click here</a></p>
                    </div>
                <br/>
                <div class="jumbotron jumbotron-fluid">
                    <div class="container">
                        <h3 class="display-4">Submit Final Thesis</h3>
                    </div>
                   
                </div>
                <div class="jumbotron1">
                    <AdminNoticeDisplay data={'submitthesis'} />
                    <p><a href="/thesis">Click here</a></p>
                    </div>
                <br/>
            </div>
                
                
        </div>
    )
}