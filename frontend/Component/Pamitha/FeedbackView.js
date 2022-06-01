

import React,{useState, useEffect} from "react";
import axios from "axios";
import swal from 'sweetalert';

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

   function deleteDoctor(_id) {
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
                    
                    response.json();
                    swal("Good job!", "Your data has been successfully Deleted", "success");
                
                }).catch(error => {
                    swal("Sorry!", "Something Error...", "error");
                })
            }
        });
}

    return(
        <div>
            <center>
                <br/>
                <h2>Feedbacks</h2>
                <br/>
             <table style={{width:"1000px"}}> 
            {
                    Feedback.map((json) => {
                    const {center, email, date, details, outcome,_id} = json
             return(      
               
                <tbody>
                <tr>
                <tr><i class="fa-solid fa-note-sticky"></i>   Center : {center}</tr>
                <tr>Email : {email}</tr>
                <tr>Date : {date}</tr>
                <tr>Details : {details}</tr>
                <tr>Solution : {outcome}</tr>
              
                <center>
                  <tr>
                    <button  className="btn btn-warning" onClick={() => deleteDoctor(_id)} >Delete <i className="fas fa-trash-alt"></i></button>
                  </tr>  
                </center>
               </tr>
               <hr style={{border:"2px solid blue"}}/>
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