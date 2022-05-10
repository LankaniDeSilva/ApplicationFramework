import React, { useState, set } from "react";
import axios from "axios";

export default function StudentFileSubmission(){

    const [groupid, setgroupid] = useState("");
    const [file, setfile] = useState("");

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

      return(
          <div>
            <div className="container">
                <h1>Submit Document</h1>
                    <form onSubmit={onChangeClick} encType="multipart/form-data">
                        <div className="form-group">
                            <label for="groupid">Group ID : </label>
                            <input
                                type="text"
                                className="form-control"
                                id="groupid"
                                placeholder="Enter Group ID"
                                onChange={(e) => {
                                    setgroupid(e.target.value);
                                }}
                                />
                        </div>

                        <div className="form-group">
                            <label for="filesub">File Submission : </label>
                            <input
                                type="file"
                                className="form-control"
                                id="filesub"
                                filename="file"
                                onChange={onChangeFile}
                            />
                        </div>
                        <br/>
                        <button type="submit" className="btn btn-primary">Submit</button>
                    </form>
            </div>
          </div>
      )
}