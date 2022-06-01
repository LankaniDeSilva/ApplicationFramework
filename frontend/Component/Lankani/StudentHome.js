import React from "react"

import sliit from "../Pamitha/images/SLIIT.png";
import "./CSS/StudentHome.css";
import AdminNoticeDisplay from "./AdminNoticeDisplay";
import StudentHeader from './StudentHeader';


export default function StudentHome(){
    return(
        <div>
            <StudentHeader />
    
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
                    <p style={{paddingLeft:"10%"}}>Individual Student Registration <a href="/Student">Click Here</a></p>
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
                    <p style={{paddingLeft:"10%"}}>Group Registration <a href="/register">Click Here</a></p>
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
                    <p style={{paddingLeft:"10%"}}>Research Topic Registration <a href="/researchtopic">Click Here</a></p>
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
                    <p style={{paddingLeft:"10%"}}>Request Supervisor <a href="/requestsupervisor">Click here</a></p>
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
                    <p style={{paddingLeft:"10%"}}>Request Co-Supervisor <a href="/requestcosupervisor">Click Here</a></p>
                    </div>             
                <br/>
                <br/>
                {/* <div class="jumbotron jumbotron-fluid">
                    <div class="container">
                        <h3 class="display-4">Download Document</h3>
                    </div>
                    
                </div>
                <div class="jumbotron1">
                    <AdminNoticeDisplay data={'document'} />
                    </div> 
                <br/> */}
                <div class="jumbotron jumbotron-fluid">
                    <div class="container">
                        <h3 class="display-4">Submit Document</h3>
                    </div>
                    
                </div>
                <div class="jumbotron1">
                    <AdminNoticeDisplay data={'submitdoc'} />
                    <p style={{paddingLeft:"10%"}}>Submit Document <a href="/studentsub">Click here</a></p>
                    </div> 
                <br/>
                <div class="jumbotron jumbotron-fluid">
                    <div class="container">
                        <h3 class="display-4">Evaluation Panel Feedback Presentaion</h3>
                    </div>
                    
                </div>
                
                    <div class="jumbotron1">
                    <AdminNoticeDisplay data={'presentation'} />
                    <p style={{paddingLeft:"10%"}}>Evaluation Panel Feedback Presentaion <a href="/StudentPreMark">Click here</a></p>
                
                </div>
                
                <br/> 
                <div class="jumbotron jumbotron-fluid">
                    <div class="container">
                        <h3 class="display-4">Panel Topic Evaluation </h3>
                    </div>
                    
                </div>
                
                    <div class="jumbotron1">
                    <AdminNoticeDisplay data={'topic'} />
                    <p style={{paddingLeft:"10%"}}>Panel Topic Evaluation<a href="/studentTopicEval">Click here</a></p>
                
                </div>
                
                <br/> 
                {/* <div class="jumbotron jumbotron-fluid">
                    <div class="container">
                        <h3 class="display-4">Download Template</h3>
                    </div>
                </div>
                <div class="jumbotron1">
                    <AdminNoticeDisplay data={'template'} />
                    </div>
                <br/> */}
                <div class="jumbotron jumbotron-fluid">
                    <div class="container">
                        <h3 class="display-4">Submit Presentation</h3>
                    </div>
                   
                </div>
                <div class="jumbotron1">
                    <AdminNoticeDisplay data={'submitpresentation'} />
                    <p style={{paddingLeft:"10%"}}>Submit Presentation <a href="/studentpresentation">Click here</a></p>
                    </div>
                <br/>
                <div class="jumbotron jumbotron-fluid">
                    <div class="container">
                        <h3 class="display-4">Submit Final Thesis</h3>
                    </div>
                   
                </div>
                <div class="jumbotron1">
                    <AdminNoticeDisplay data={'submitthesis'} />
                    <p style={{paddingLeft:"10%"}}>Submit Final Thesis <a href="/thesis">Click here</a></p>
                    </div>
                <br/>
            </div>
                
                
        </div>
    )
}