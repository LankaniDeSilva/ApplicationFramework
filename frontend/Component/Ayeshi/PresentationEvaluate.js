import React,{useState}  from "react";
import axios from "axios";

function presentationEvaluate(){

    const [groupid, setGroupid] = useState("");
    const [studentid, setStudentid] = useState("");
    const [mark1, setMark1] = useState("");
    const [mark2, setMark2] = useState("");
    const [mark3, setMark3] = useState("");

    function sendData(e){
        e.preventDefault();
        
        const newMarks ={
            groupid,
            studentid,
            mark1,
            mark2,
            mark3
        }

        axios
        .post("https://researchtool.herokuapp.com/evaluatepresentaionsave", newMarks)
        .then(() => {
            alert("Marks Added");
            setGroupid("");
            setStudentid("");
            setMark1("");
            setMark2("");
            setMark3("");
          })
          .catch((err) => {
            alert(err);
          });
    }


    return(
        <div className="container">
           
            <form onSubmit={sendData} style={{ borderRadius:"40px", background:"#cce6ff",padding:"30px"}}>
            <h1 style={{ fontFamily: "Abel" }}>Presentaion Evaluate</h1>
                <div class="form-group">

                    <label for = "groupid">Group ID</label>
                    <input type = "text" class="form-control" id="groupid" placeholder="Enter Group ID" 
                    onChange={(e)=>{

                        setGroupid(e.target.value);

                    }}/>
                </div>
                <div class="form-group">

                    <label for = "studentid">Student ID</label>
                    <input type = "text" class="form-control" id="studentid" placeholder="Enter Student ID"
                    onChange={(e)=>{

                        setStudentid(e.target.value);

                    }}/>
                </div>
                <div class="form-group">

                    <label for = "mark1">Q&A</label>
                    <input type = "text" class="form-control" id="mark1" placeholder="Enter marks for Q&A"
                    onChange={(e)=>{

                        setMark1(e.target.value);

                    }}/>
                </div>
                <div class="form-group">

                    <label for = "mark2">Presenting</label>
                    <input type = "text" class="form-control" id="mark2" placeholder="Enter marks for Presenting"
                    onChange={(e)=>{

                        setMark2(e.target.value);

                    }}/>
                </div>
                <div class="form-group">

                    <label for = "mark3">Details</label>
                    <input type = "text" class="form-control" id="mark3" placeholder="Enter marks for Details"
                    onChange={(e)=>{

                        setMark3(e.target.value);

                    }}/>
                </div>
                
                <br/>
                <button type="submit" class="btn btn-primary">Submit</button>
            </form>
            <br/>
           

        </div>

    )
}
     
export default presentationEvaluate;