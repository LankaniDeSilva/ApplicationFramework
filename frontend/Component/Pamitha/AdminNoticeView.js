import React,{useState, useEffect} from "react";
import axios from "axios";
//import PDFS from "../public/uploads/"



  function AdminNoticeView(){

   const [Notice, setnotice] = useState([]);

   useEffect(()=>{
      function getStudents(){
          axios.get("http://localhost:8001/notice").then((res)=>{
            setnotice(res.data)
          }).catch((err)=>{
              alert(err.message);
          })
      }
      getStudents();
   }, [])

  
 
      return(
         <div>

           <center>
        
             <table> 
       
            {
                    Notice.map((json) => {
                    const {topic, date, description, pdf,_id} = json
             return(      
               
                <tbody>
                    <tr>
                    <div style={{background:"#ccddff", borderLeft:"4px solid #1a66ff", width:"1200px", height:"50px", padding:"10px"}}>
                        <tr>{topic}</tr>
                    </div>
                        <tr>Date : {date}</tr>
                        <tr>{description}</tr>
                        <tr>{pdf}</tr><br/>
                
                <center>
                <tr>
                
                    <button  className="btn btn-warning btn-block" onClick={() => this.onDelete(_id)} ><i className="fas fa-trash-alt"></i> Delete </button>
                     &nbsp;
                    <button className="btn btn-primary btn-block"><i className="fas fa-edit"></i> Update</button>
                    &nbsp;
                    <a className='btn btn-primary' rel="noreferrer" target="_blank"><i class="fa-solid fa-eye"></i> View </a>    
                    
                </tr><br/> 
                </center> 
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
export default AdminNoticeView;


