import React,{useState, useEffect} from "react";
import axios from "axios";
//import swal from 'sweetalert';



function Allstudent(){

   const [pdf, setpdf] = useState([]);
   const [mark, setmark] = useState("");
  

 function sendData(_id){

   const newNotice = {

     mark
  
   }
  
   axios.post(`http://localhost:8001/select/pdf/${_id}`,newNotice).then(()=>{
        alert("Add Notice")
   }).catch((err)=>{
        alert(err)
   })
 }


   useEffect(()=>{
      function getpdf(){
          axios.get("http://localhost:8001/student/pdf").then((res)=>{
            setpdf(res.data)
          }).catch((err)=>{
              alert(err.message);
          })
      }
      getpdf();
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
                fetch(`http://localhost:8051/student/delete/${_id}`, {
                    method: 'DELETE'
                }).then((response) => {
                    response.json();
                  
                    swal("Good job!", "Your data has been successfully Deleted", "success");
                   
                }).catch(error => {
                    swal("Sorry!", "Something Error...", "error");
                })
            }
        }); 
} */

    return(
        <div className="container">

            

           <table className="table"> 
               <thead> 
                <tr>
                <th>groupid</th>
                <th>select</th>
                <th>comment</th>
                <th>files</th>
                <th>marks</th>
                </tr>
                </thead>
       
            {
                    pdf.map((json) => {
                    const {groupid, select, comment, files,mark, _id} = json
             return(      
               
                <tbody>
                <tr>
                <td>{_id}</td>
                <td>{groupid}</td>
                <td>{select} </td>
                <td>{comment}</td>
                <td>{files}</td>
                <td>{mark}</td>
                <td>
                    <form >
                    <select class="form-select" aria-label="Default select example" name="select"
                      value={mark}
                      onChange={(e)=>{
                        setmark(e.target.value);
                    }} >
                <option selected>Mark</option>
                <option value="1">No</option>
                <option value="2">Yes</option>
                
                </select>  

                <button onClick={() => sendData(_id)} className="btn btn-primary">select</button>
                    </form>
                </td>

                <th>
                   
                    
                     &nbsp;
                    <button className="btn btn-primary">Update</button>
                </th>  
               </tr>
              
              </tbody>
              
             )
        })
    }     
    </table>
    </div>     
       
    )
}
export default Allstudent;