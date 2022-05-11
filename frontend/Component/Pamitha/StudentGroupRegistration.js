import React,{useState} from "react";
import axios from "axios"

function Registration(){

    const [name, setname] = useState("");
    const [leader, setleader] = useState("");
    const [member2, setmember2] = useState("");
    const [member3, setmember3] = useState("");
    const [member4, setmember4] = useState("");
    
  
    function sendData() {
      const newNotice = {
       name,
       leader,
       member2,
       member3,
       member4
      };
  
      axios
        .post("http://localhost:8001/register/save", newNotice)
        .then(() => {
          alert("Group Registered");
        })
        .catch((err) => {
          alert(err);
        });
    }

    return(
        <div>
            <center>
            <form onSubmit={sendData} style={{width:"800px", border:"2px solid black", padding:"30px"}}>
                <h2>Group Registration</h2><br/>
            <label style={{ fontSize: "17px" }}>Enter Name of the Group : </label>
              <br />
              <input
                class="form-control"
                id="name"
                type="text"
                onChange={(e) => {
                  setname(e.target.value);
                }}
              /><br/>
               <label style={{ fontSize: "17px" }}>Enter Group Details : </label>
              <br />
              <textarea
                class="form-control"
                id="details"
                placeholder=" 1. Name             --------------           ID Number               -------------            Email"        
                onChange={(e) => {
                  setleader(e.target.value);
                }}
              /><br/>
               <textarea
                class="form-control"
                id="details"
                placeholder=" 2. Name             --------------           ID Number               -------------            Email"        
                onChange={(e) => {
                  setmember2(e.target.value);
                }}
              /><br/>
               <textarea
                class="form-control"
                id="details"
                placeholder=" 3. Name             --------------           ID Number               -------------            Email"        
                onChange={(e) => {
                  setmember3(e.target.value);
                }}
              /><br/>
               <textarea
                class="form-control"
                id="details"
                placeholder=" 4. Name             --------------           ID Number               -------------            Email"        
                onChange={(e) => {
                  setmember4(e.target.value);
                }}
              /><br/>
              <button className="btn btn-success">Register</button>
            </form>
            </center>
        </div>
    )
}

export default Registration;