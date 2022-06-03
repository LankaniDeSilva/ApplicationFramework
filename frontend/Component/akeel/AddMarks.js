import React,{useState} from "react";
import "./addEvaluation.css";
import axios from "axios";
import { useHistory } from "react-router-dom";




function AddMarks() {

  const [valid, setValid] = useState(false);
  const [mark, setmarks] = useState({
    fName:"",
    subject:"",
    groupId:"",
    topic:"",
    marks:"",
    sName:"",
    feedback:"",
  });

  let navigate = useHistory();

  function sendData(e) {
    e.preventDefault()

    axios
      .post("http://localhost:8001/add-marks",mark)
      .then(() => {
        alert("Marks  added");
        setValid(true);
        navigate.push("/SupervisorHome");
      })
      .catch((err) => {
        alert(err);
      });

      setmarks({
        fName:"",
        subject:"",
        groupId:"",
        topic:"",
        marks:"",
        sName:"",
        feedback:"",
      });

    }
    function handleChange(event) {
      const { name, value } = event.target;
  
      setmarks((preValue) => {
        return {
          ...preValue,
          [name]: value,
        };
      });
    }
  
    

    
  
  
  
  
  return (
    <div className="container">
      <div className="formStyle">
        <h2 className="heading">Add Marks</h2>
        <br></br>
        <form onSubmit={sendData}>
     

        <div className="form-group row">
            <label for="faname" className="col-sm-2 col-form-label">
          Document Name
            </label>
            <div className="col-sm-10">
              <input
                type="text"
                className="form-control"
                id="faname"
                name="fName"
                placeholder="Enter Document Name"
                onChange={handleChange}
                value={mark.fName}
                required
              />
            </div>
          </div>

          <div className="form-group row">
            <label for="sname" className="col-sm-2 col-form-label">
            Subject
            </label>
            <div className="col-sm-10">
              <input
                type="text"
                className="form-control"
                id="sname"
                name="subject"
                placeholder="Enter Subject"
                onChange={handleChange}
                value={mark.subject}
                required
              />
            </div>
          </div>
          <div className="form-group row">
            <label for="gname" className="col-sm-2 col-form-label">
            Group Id
            </label>
            <div className="col-sm-10">
              <input
                type="Text"
                className="form-control"
                id="gname"
                name="groupId"
                placeholder="Enter Group ID"
                onChange={handleChange}
                value={mark.groupId}
                required
              />
            </div>
          </div>

          <div className="form-group row">
            <label for="tname" className="col-sm-2 col-form-label">
              Topic Name
            </label>
            <div className="col-sm-10">
              <input
                type="text"
                className="form-control"
                id="tname"
                name="topic"
                placeholder="Enter Topic Name"
                onChange={handleChange}
                value={mark.topic}
                required
              />
            </div>
          </div>

          <div className="form-group row">
            <label for="marks" className="col-sm-2 col-form-label">
            Marks
            </label>
            <div className="col-sm-10">
              <input
                type="tel"
                className="form-control"
                maxlength="3"
                id="marks"
                name="marks"
                placeholder="Enter Marks"
                onChange={handleChange}
                value={mark.marks}
                required
              />
            </div>
          </div>


          <div className="form-group row">
            <label for="svname" className="col-sm-2 col-form-label">
              Supervisor Name
            </label>
            <div className="col-sm-10">
              <input
                type="text"
                className="form-control"
                id="svname"
                name="sName"
                placeholder="Enter Supervisor Name"
                onChange={handleChange}
                value={mark.sName}
                required
              />
            </div>
          </div>

          <div className="form-group row">
            <label for="fname" className="col-sm-2 col-form-label">
          Comments
            </label>
            <div className="col-sm-10">
              <input
                type="text"
                className="form-control"
                id="fname"
                name="feedback"
                placeholder="Enter Comments"
                onChange={handleChange}
                value={mark.feedback}
                required
              />
            </div>
          </div>
<br></br>
          <div className="form-group row">
        
            <div className="addmarkSubBtn">
              
              <button type="submit" className="btn btn-primary">
              &nbsp;&nbsp;
                Submit
                &nbsp;&nbsp;
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}
export default AddMarks;
