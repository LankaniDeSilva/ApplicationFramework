import React, { useState, set } from "react";
import axios from "axios";
import FormInput from "./SubmissionForm";

export default function StudentFileSubmission() {
  const [groupid, setgroupid] = useState("");
  const [file, setfile] = useState("");

  const onChangeGroupId = (e) => {
    setgroupid(e.target.value);
  };

  const onChangeFile = (e) => {
    setfile(e.target.files[0]);
  };

  const onChangeClick = (e) => {
    e.preventDefault();

    const formdata = new FormData();

    formdata.append("groupid", groupid);
    formdata.append("file", file);

    setgroupid("");
    setfile("");

    axios
      .post("http://localhost:8001/file/save", formdata)
      .then(() => {
        alert("File is uploaded successfully");
      })
      .catch((err) => {
        alert(err);
      });
  };

  return (
    <div
      style={{
        margin: "10%",
        padding: "50px",
        backgroundColor: "lightgrey",
        borderColor: " solid",
      }}
    >
      <div className="container">
        <h2>Document Submission Form</h2>
        <br />
        <br />
        <div className="form-group">
          <FormInput
            label="Group ID : "
            name="groupid"
            type="text"
            onChange={onChangeGroupId}
          />
          <br />
          <br />
          <FormInput
            label="File Submission : "
            name="filesub"
            type="file"
            onChange={onChangeFile}
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
  );
}
