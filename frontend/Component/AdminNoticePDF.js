import React,{useState,set} from "react"
import axios from "axios";


 function AddNoticefile(){

         
          const [topic, settopic] = useState("");
          const [date, setdate] = useState("");
          const [description, setdescription] = useState("");
          const [file, setfile] = useState("");

          const onChangeFile = (e) =>{
           setfile(e.target.files[0]);
          };
     
          const sendData = (e) =>{
           e.preventDefault();

          const formdata = new FormData();

          formdata.append("topic", topic);
          formdata.append("date", date);
          formdata.append("description", description);
          formdata.append("file", file);
   
          settopic("");
          setdate("");
          setdescription("");
          setfile("");
         
          axios.post("http://localhost:8001/save/noticepdf", formdata).then(()=>{
               alert("Add Notice")
          }).catch((err)=>{
               alert(err)
          });
          }
       
    return(
       <div>
         <center>
      <table>
        <tr>
          <td>
      <form onSubmit={sendData} encType="multipart/form-data" style={{margin:"0%", padding:"50px", backgroundColor:'',border:"2px solid blue", borderRadius:"10px" }}>
   
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
         }} />
  
          <div class="mb-3">
                <label for="formFile" class="form-label">Default file input example</label>
                <input class="form-control" type="file" id="file" filename="file"
                onChange={onChangeFile} />
            </div>
              
         <br/><br/>
         <center>
            <button type="submit" class="btn btn-primary" >Submit</button>
         </center>
        </form>
        
        </td>
        <td>
          <img src="../images/dfs.jpg" style={{width:"700px", height:"500px"}}/>
        </td>
        </tr>
       </table>
</center>



</div>
    )
}
export default AddNoticefile;