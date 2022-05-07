import React,{useState} from "react";
import axios from "axios";

function Feedback(){

  const [center, setcenter] = useState("");
  const [email, setemail] = useState("");
  const [date, setdate] = useState("");
  const [details, setdetails] = useState("");
  const [outcome, setoutcome] = useState("");

  function passData(){
    
    const newfeedback = {

      center,
      email,
      date,
      details,
      outcome
    }
   
    axios.post("http://localhost:8001/feedbacksave",newfeedback).then(()=>{
         alert("Add Notice")
         console.log(newfeedback);
    }).catch((err)=>{
         alert(err)
    });
  }


    return(
        <div>
           
            <br/>
             <form onSubmit={passData} style={{width:"900px", marginLeft:"20%", border:"2px solid #4d94ff",
                                              borderRadius:"10px", padding:"50px",
                                              borderLeft:"6px solid blue",
                                              borderBottom:"6px solid blue"}}>
              <center>
                    <h1>Add Your Feedback</h1>
              </center>
              <br/>
              <select class="form-select" aria-label="Default select example"
                       onChange={(e)=>{
                            setcenter(e.target.value);
              }} >
             <option selected>Select center</option>
             <option value="Malabe campus">Malabe-Campus</option>
             <option value="Mathara campus">Mathara-Campus</option>
             <option value="Kandy center">Kandy Center</option>
             <option value="Jaffna center">Jaffna Center</option>
             </select>
             <br/>
             <div class="mb-3">
                <label for="" class="form-label">Email address</label>
                <input type="Email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"
                      onChange={(e)=>{
                          setemail(e.target.value);
              }} />
             <div id="emailHelp" class="form-text">We'll never share your email with anyone else.</div>
             </div>

            <div class="mb-3">
              <label for="" class="form-label">Select date</label>
              <input type="date" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"
                   onChange={(e)=>{
                       setdate(e.target.value);
              }} />
            </div>

            <div class="mb-3">
              <label for="exampleInputEmail1" class="form-label">Feedback Details</label>
              <textarea type="" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"
                   onChange={(e)=>{
                       setdetails(e.target.value);
              }} />
            </div>

            <div class="mb-3">
                <label for="exampleInputPassword1" class="form-label">Desired Outcome</label>
                <textarea type="" class="form-control" id="exampleInputPassword1"
                   onChange={(e)=>{
                       setoutcome(e.target.value);
              }} />
            </div>

            <div class="mb-3 form-check">
              <input type="checkbox" class="form-check-input" id="exampleCheck1"/>
              <label class="form-check-label" for="exampleCheck1">I'm not a robot</label>
            </div>
            <button type="submit" class="btn btn-primary">Submit</button>
           </form>
          <br/>
        </div>
    )
}

export default Feedback;