import React,{useEffect, useState} from "react";
import axios from "axios";
import $ from 'jquery';
import 'jquery-validation'
import './CSS/styles.css';

export default function ResearchTopic(){
    const [groupNumber, setGroupNumber] = useState("");
    const [topic, setTopic] = useState("");

    useEffect(() =>{
        const topicregister = $("#topic-register");

        topicregister.validate({
            rules: {
                group: {
                    required: true
                },

                rtopic:{
                    required: true
                }
            },
            message: {
                group: {
                    required: "Please Enter Group ID"
                },
                rtopic: {
                    required: "Please Enter Research Topic"
                }

            }
        })
    })

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
        <center>
        <div>
            <div style={{
                margin: "50px",
                padding: "50px",
                backgroundColor: "#cce6ff",
                borderColor: "solid",
                borderRadius: "40px",
                width: "600px",
                alignContent:"center",
                borderLeft:"5px solid blue"
            }}>
            <h1>Research Topic Registration Form</h1>
            <form onSubmit={sendData} id="topic-register">
                <div className="form-group">
                    <label for="gnumber">Group Number : </label>
                    <input
                    type="text"
                    className="form-control"
                    id="gnumber"
                    name="group"
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
                    name="rtopic"
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
        </center>
    
    )
}