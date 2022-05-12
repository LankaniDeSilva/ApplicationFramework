import React,{useState} from "react";
import axios from "axios";

export default function ResearchTopic(){
    const [groupNumber, setGroupNumber] = useState("");
    const [topic, setTopic] = useState("");

    function sendData(e){
        e.preventDefault();
        const newResearchTopic = {
            groupNumber,
            topic
        }

        axios.post("http://localhost:8001/ResearchTopic/save", newResearchTopic).then(() =>{
            alert("Add Topic");
            console.log(newResearchTopic);
        }).catch((err) =>{
            alert(err);
        });
    }

    return(
        <div>
            <div className="container">
            <h1>Research Topic Registration Form</h1>
            <form onSubmit={sendData}>
                <div className="form-group">
                    <label for="gnumber">Group Number : </label>
                    <input
                    type="text"
                    className="form-control"
                    id="gnumber"
                    placeholder="Enter Group Number"
                    onChange={(e) => {
                        setGroupNumber(e.target.value);
                    }}
                    />
                </div>
                <div className="form-group">
                    <label for="topic">Topic : </label>
                    <input
                    type="text"
                    className="form-control"
                    id="topic"
                    placeholder="Enter Topic"
                    onChange={(e) => {
                        setTopic(e.target.value);
                    }}
                    />
                </div>

                <button type="submit" className="btn btn-primary">Submit</button>
          </form>
        </div>
        </div>
    
    )
}