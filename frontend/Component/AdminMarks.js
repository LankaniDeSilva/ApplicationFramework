import React,{useState, useEffect} from "react";
import axios from "axios";
import swal from 'sweetalert';

function Marks(){

    const [id, setgid] = useState("");
    const [markone, setmarko] = useState("");
    const [marktwo, setmarkt] = useState("");
    const [markthree, setmarkth] = useState("");
    const [markfour, setmarkf] = useState("");
    
    const [mark, setMarks] = useState([]);

   useEffect(()=>{
      function getStudents(){
          axios.get("http://localhost:8001/getmark").then((res)=>{
            setMarks(res.data)
          }).catch((err)=>{
              alert(err.message);
          })
      }
      getStudents();
   }, [])


   function passData(){
    

    const newMark = {

      id,
      markone,
      marktwo,
      markthree,
      markfour
    }
   
    axios.post("http://localhost:8001/marksave",newMark).then(()=>{
         alert("Add Notice")
    }).catch((err)=>{
         alert(err)
    });
  }

  
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
                fetch(`http://localhost:8001/deletemark/${_id}`, {
                    method: 'DELETE'
                }).then((response) => {
                    response.json();
                  <a href="">
                    swal("Good job!", "Your data has been successfully Deleted", "success");
                    </a>
                }).catch(error => {
                    swal("Sorry!", "Something Error...", "error");
                })
            }
        });
}
  

    return(
        <div>
<center>
   <form onSubmit={passData} style={{background:"pink", width:"550px", padding:"20px"}}>
       <table>
       
           <tr>
                <h1 style={{fontFamily:"Abel"}}>Add Mark</h1>
           
           <label style={{fontSize:"20px"}}>Enter Topic : </label><br/>
              <input class="form-control" id="gid" type="text" 
                 onChange={(e)=>{
                    setgid(e.target.value);
               }} /><br/>
            </tr>
      
            <tr>
            <td>
           <label style={{fontSize:"20px"}}>Select date : </label><br/>
                <input class="form-control" id="mark1" type="text" 
                     onChange={(e)=>{
                        setmarko(e.target.value);
                }} /><br/>
            </td>
            <td>
           <label style={{fontSize:"20px"}}>Enter Notice : </label><br/>
                  <input class="form-control" id="mark2" type="text" 
                       onChange={(e)=>{
                           setmarkt(e.target.value);
                   }} /><br/>
            </td>
            </tr>
            <tr>
            <td>
           <label style={{fontSize:"20px"}}>Enter Notice : </label><br/>
                    <input class="form-control" id="mark3" type="text" 
                         onChange={(e)=>{
                            setmarkth(e.target.value);
                   }} /><br/>
            </td>
            <td>
           <label style={{fontSize:"20px"}}>Enter Notice : </label><br/>
                   <input class="form-control" id="mark4" type="text" 
                       onChange={(e)=>{
                           setmarkf(e.target.value);
                   }} /><br/>
            </td>
            </tr>
        </table>
       <center>
          <button type="submit" class="btn btn-primary" >Submit</button>
       </center>
   </form>

<br/>
<br/>

<table  class="table table-dark" style={{width:"1200px"}}> 
               <thead> 
                <tr>
                <th>groupid</th>
                <th>marka</th>
                <th>markb</th>
                <th>markc</th>
                <th>markd</th>
                <th>Total</th>
                </tr>
                </thead>
       
            {
                    mark.map((json) => {
                    const {groupid, marka, markb, markc, markd,_id} = json
             return(      
               
                <tbody>
                <tr>
                <td>{groupid}</td>
                <td>{marka}</td>
                <td>{markb}</td>
                <td>{markc}</td>
                <td>{markd}</td>
                <td>{marka+markb+markc+markd}</td>

                <th>
                   
                    <button  className="btn btn-warning" onClick={() => deleteDoctor(_id)} >Delete</button>
                     &nbsp;
                    <button className="btn btn-primary">Update</button>
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

export default Marks;