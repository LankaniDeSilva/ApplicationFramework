import React, { useState, set } from "react";
import axios from "axios";
import FormInput from "./SubmissionForm";

export default function RequestSepervisor() {
  const [studentgroup, setstudentgroup] = useState("");
  const [supervisor, setSupervisor] = useState("");

  const onChangestudentgroup = (e) => {
    setstudentgroup(e.target.value);
  };

  const onChangeSupervisor = (e) => {
    setSupervisor(e.target.value);
  };

  const onChangeClick = (e) => {
    e.preventDefault();

    const newRequest = {
      studentgroup,
      supervisor,
    };
    axios
      .post("https://researchtool.herokuapp.com/CoSupervisor/save", newRequest)
      .then(() => {
        alert("Request inserted successfully");
      })
      .catch((err) => {
        alert(err);
      });

     
  };

  return (
    <center>
    <div
      style={{
        margin: "50px",
        padding: "50px",
        backgroundColor: "#cce6ff",
        borderColor: "solid",
        borderRadius: "40px",
        width: "600px",
        alignContent:"center",
        borderLeft:"5px solid blue"
      }}
    >
      <div className="container">
        <h2>Co-Supervisor Request Form</h2>
        <br />
        <br />
        <div className="form-group">
          <FormInput
            label="Group ID : "
            name="studentgroup"
            type="text"
            onChange={onChangestudentgroup}
          />
          <br />
          <br />
          <FormInput
            label="Co-Supervisor Name : "
            name="supervisor"
            type="text"
            onChange={onChangeSupervisor}
          />
          <br />
          <br />
          <button
            type="submit"
            onClick={onChangeClick}
            className="btn btn-primary"
          >
            Submit
          </button>
        </div>
      </div>
    </div>
    </center>
  );
}
