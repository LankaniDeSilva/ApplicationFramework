import React,{useState} from "react"
import axios from "axios";

const set={
  color: 'blue',
}
const button={
  background:'pink',
  width:'100px',
  height:'30px'
}


 function AddNotice(){

          const [topic, settopic] = useState("");
          const [date, setdate] = useState("");
          const [description, setdescription] = useState("");

        function sendData(){
          

          const newNotice = {

            topic,
            date,
            description
          }
         
          axios.post("http://localhost:8001/Notice/save",newNotice).then(()=>{
               alert("Add Notice")
          }).catch((err)=>{
               alert(err)
          })
        }

    return(
       <div>
         <center>

       <table>
              <tr>
                  <td>
        <div style={{padding:"50px", backgroundColor:'orange',borderRadius:" 10px", marginRight:"100px", borderLeft:"6px solid black", borderRight:"6px solid black"}}>
        <img src="../images/admin.jpg" style={{width:'120px', height:'120px', borderRadius:"100px" }}/><br/><br/>
        <center>
            <a href="">
            <button type="button" class="btn btn-secondary">Secondary</button>
            </a><br/><br/>
            <a href="">
            <button type="button" class="btn btn-secondary">Secondary</button>
            </a><br/><br/>
            <a href="">
            <button type="button" class="btn btn-secondary">Secondary</button>
            </a><br/><br/>
            <a href="">
            <button type="button" class="btn btn-secondary">Secondary</button>
            </a><br/><br/>
            <a href="">
            <button type="button" class="btn btn-secondary">Secondary</button>
            </a>
            </center>
          </div>
          </td>
          <td>
        <center>
        <div >
          <table>
              <tr>
                  <td>
                  
         <form onSubmit={sendData} style={{margin:"0%", padding:"50px", backgroundColor:'',border:"2px solid blue", borderRadius:"10px" }}>
   
                 <center>
                  <h1 style={{fontFamily:"Abel"}}>Add Notice</h1>
                  </center>
              <label style={{fontSize:"20px"}}>Enter Topic : </label><br/>
                 <input type="text" id="name"  style={{borderRadius:"15px", width:"400px", height:"40px"}}
                    onChange={(e)=>{
                          settopic(e.target.value);
                }} /><br/>
 
              <label style={{fontSize:"20px"}}>Select date : </label><br/>
                 <input type="date" id="name"  style={{borderRadius:"15px", width:"400px", height:"40px", padding:"10px"}}
                    onChange={(e)=>{
                          setdate(e.target.value);
                }} /><br/>

              <label style={{fontSize:"20px"}}>Enter Notice : </label><br/>
                 <textarea id="editor" name="editor" style={{borderRadius:"15px", width:"400px", height:"40px"}}
                    onChange={(e)=>{
                          setdescription(e.target.value);
                }} /><br/><br/>
              <center>
             <button type="submit" class="btn btn-primary" >Submit</button>
             </center>
         </form>
         </td>
         <td>
             <img src="../images/submit.webp" style={{width:'400px', height:'400px'}}/>
         </td>
         </tr>
         </table>
</div>

</center>

</td>
</tr>
</table>
</center>
</div>
    )
}
export default AddNotice;