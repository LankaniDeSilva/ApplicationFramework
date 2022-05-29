import React from "react";
import img1 from "./images/presentationeval.jpg";
import img2 from "./images/topiceval.png";
import img3 from "./images/panel1.jpg";
import img4 from "./images/panel2.png";

const set ={
   
     
  }
 

function panelHome(){

    return(
        <div>
        <center>
            
            <hr style={{width:"1200px"}}/>
            <br/>
           <table>
               <tr>
                   <td style={{ borderRadius:"40px", background:"#cce6ff",padding:"30px"}}>
                       <tr >
                       <img src={img1} style={{width:"200px", height:"100px"}}/>
                        </tr>
                        <tr>
                        <br/>
                        <center>
                        <a href="/presentationEvaluate">
                        <button class="btn btn-primary" style={{ width:"200px", height:"40px"}}>Evaluate Presentation</button>
                        </a>
                        </center>
                        </tr>
                   </td>
                   &nbsp;
                   &nbsp;
                   <td style={{background:"#cce6ff", borderRadius:"40px", padding:"30px"}}>
                        <tr>
                        <img src={img2} style={{width:"200px", height:"100px"}}/>
                        </tr>
                        <tr>
                        <center>
                        <br/>
                        <a href="/topicEvaluate">
                        <button class="btn btn-primary" style={{ width:"200px", height:"40px"}}>Evaluate Topic</button>
                        </a>
                        </center>
                        </tr>
                   </td>
                   &nbsp;
                   &nbsp;
                   <td style={{background:"#cce6ff", borderRadius:"40px",padding:"30px"}}>
                       <tr >
                       <img src={img3} style={{width:"200px", height:"100px"}}/>
                        </tr>
                        <tr>
                        <br/>
                        <center>
                        <a href="/allPreMark">
                        <button class="btn btn-primary" style={{ width:"200px", height:"40px"}}>All Presentation Marks</button>
                        </a>
                        </center>
                        </tr>
                   </td>
                   &nbsp;
                   &nbsp;
                   <td style={{background:"#cce6ff",borderRadius:"40px",padding:"30px"}}>
                       <tr >
                       <img src={img4} style={{width:"200px", height:"100px"}}/>
                        </tr>
                        <tr>
                        <br/>
                        <center>
                        <a href="/allTopicEval">
                        <button class="btn btn-primary" style={{ width:"200px", height:"40px"}}>All Topics Evaluate</button>
                        </a>
                        </center>
                        </tr>
                   </td>
                   
                  
                </tr>
                   
            </table>
            <br/>

        </center>
        </div>
    )
}
export default panelHome;