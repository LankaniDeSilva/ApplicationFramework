import React,{useState}  from "react";
import axios from "axios";

function topicEvaluate(){

    const [groupid, setGroupid] = useState("");
    const [topic, setTopic] = useState("");
    const [comments, setComments] = useState("");
    

    function sendData(e){
        e.preventDefault();
        
        const newEvaluate ={
            groupid,
            topic,
            comments
            
        }

        axios
        .post("https://researchtool.herokuapp.com/evaluatetopicsave", newEvaluate)
        .then(() => {
            alert("Evaluate Done");
            setGroupid("");
            setTopic("");
            setComments("");
          })
          .catch((err) => {
            alert(err);
          });
    }


    return(
        <div className="container">

           
            <form onSubmit={sendData} style={{ borderRadius:"40px", background:"#cce6ff",padding:"30px"}}>
            <h1 style={{ fontFamily: "Abel" }}>Topic Evaluate</h1>
                <div class="form-group">

                    <label for = "groupid">Group ID</label>
                    <input type = "text" class="form-control" id="groupid" placeholder="Enter Group ID" 
                    onChange={(e)=>{

                        setGroupid(e.target.value);

                    }}/>
                </div>
                <div class="form-group">

                    <label for = "topic">Topic</label>
                    <input type = "text" class="form-control" id="topic" placeholder="Enter Topic"
                    onChange={(e)=>{

                        setTopic(e.target.value);

                    }}/>
                </div>
                <div class="form-group">

                    <label for = "comments">Comments</label>
                    <input type = "text" class="form-control" id="comments" placeholder="Enter Comments"
                    onChange={(e)=>{

                        setComments(e.target.value);

                    }}/>
                </div>
                <br/>
                <button type="submit" class="btn btn-primary">Submit</button>
            </form>
            <br/>
           

        </div>

    )
}
     
export default topicEvaluate;