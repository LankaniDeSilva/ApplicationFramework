

import React,{useState, useEffect} from "react";
import axios from "axios";
//import swal from 'sweetalert';

function Feedbackview(){

    const [Feedback, setFeedback] = useState([]);

   useEffect(()=>{
      function getStudents(){
          axios.get("http://localhost:8001/getfeedback").then((res)=>{
            setFeedback(res.data)
          }).catch((err)=>{
              alert(err.message);
          })
      }
      getStudents();
   }, [])

  /* function deleteDoctor(_id) {
    swal({
        title: "Are you sure?",
        text: "Once deleted, you will not be able to recover this data!",
        icon: "warning",
        buttons: true,
        dangerMode: true,
    })
        .then((willDelete) => {
            if (willDelete) {
                swal("Poof! Your data has been successfully Deleted!", {
                    icon: "success",
                });
                fetch(`http://localhost:8001/deletefeedback/${_id}`, {
                    method: 'DELETE'
                }).then((response) => {
                    <a href="#">
                    response.json();
                    swal("Good job!", "Your data has been successfully Deleted", "success");
                    </a>
                }).catch(error => {
                    swal("Sorry!", "Something Error...", "error");
                })
            }
        });
}
*/
    return(
        <div>
            <center>
             <table  class="table" style={{width:"1200px"}}> 
               <thead> 
                <tr>
            
                <th>Center</th>
                <th>Email</th>
                <th>Date</th>
                <th>Feedback</th>
                <th>Solution</th>
             
                </tr>
                </thead>
       
            {
                    Feedback.map((json) => {
                    const {center, email, date, details, outcome,_id} = json
             return(      
               
                <tbody>
                <tr>
                <td>{center}</td>
                <td>{email}</td>
                <td>{date}</td>
                <td>{details}</td>
                <td>{outcome}</td>
              

                <th>
                   
                    <button  className="btn btn-warning"  >Delete</button>
                    
                </th>  
               </tr>
              
              </tbody>
              
             )
        })
    }     
    </table>
    </center>
        </div>
    )
}

export default Feedbackview;