import React from "react";
import img1 from "./images/presentationeval.jpg";
import img2 from "./images/topiceval.png";

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
                   <td style={{ border:"4px solid blue",padding:"30px"}}>
                       <tr >
                       <img src={img1} style={{width:"400px", height:"250px"}}/>
                        </tr>
                        <tr>
                        <br/>
                        <center>
                        <a href="/presentationEvaluate">
                        <button class="btn btn-dark" style={{ width:"200px", height:"40px"}}>Evaluate Presentation</button>
                        </a>
                        </center>
                        </tr>
                   </td>
                   &nbsp;
                   &nbsp;
                   <td style={{border:"4px solid blue", padding:"30px"}}>
                        <tr>
                        <img src={img2} style={{width:"400px", height:"250px"}}/>
                        </tr>
                        <tr>
                        <center>
                        <br/>
                        <a href="/topicEvaluate">
                        <button class="btn btn-dark" style={{ width:"200px", height:"40px"}}>Evaluate Topic</button>
                        </a>
                        </center>
                        </tr>
                   </td>
                   &nbsp;
                   &nbsp;
                   <td style={{ border:"4px solid blue",padding:"30px"}}>
                       <tr >
                        <img src="../images/presentationeval.jpg"/>
                        </tr>
                        <tr>
                        <br/>
                        <center>
                        <a href="/allPreMark">
                        <button class="btn btn-dark" style={{ width:"200px", height:"40px"}}>All Presentation Marks</button>
                        </a>
                        </center>
                        </tr>
                   </td>
                   &nbsp;
                   &nbsp;
                   <td style={{ border:"4px solid blue",padding:"30px"}}>
                       <tr >
                        <img src="../images/presentationeval.jpg"/>
                        </tr>
                        <tr>
                        <br/>
                        <center>
                        <a href="/allTopicEval">
                        <button class="btn btn-dark" style={{ width:"200px", height:"40px"}}>All Topics Evaluate</button>
                        </a>
                        </center>
                        </tr>
                   </td>
                  
                </tr>
                   
            </table>

        </center>
        </div>
    )
}
export default panelHome;