import React, { useState, set } from "react";
import axios from "axios";
import img from "./images/dfs.jpg";

function Addfile() {
  const [groupid, setgroupid] = useState("");
  const [comment, setcomment] = useState("");
  const [file, setfile] = useState("");
  const [select, setselect] = useState("");

  const onChangeFile = (e) => {
    setfile(e.target.files[0]);
  };

  const onChangeClick = (e) => {
    e.preventDefault();

    const formdata = new FormData();

    formdata.append("groupid", groupid);
    formdata.append("comment", comment);
    formdata.append("file", file);
    formdata.append("select", select);

    setgroupid("");
    setcomment("");
    setfile("");
    setselect("");

    axios
      .post("https://researchtool.herokuapp.com/save", formdata)
      .then(() => {
        alert("Add Notice");
      })
      .catch((err) => {
        alert(err);
      });
  };

  return (
    <div>
      <center>
        <table>
          <tr>
            <td>
              <div
                style={{
                  margin: "20px 50px 50px 0px",
                  padding: "50px",
                  backgroundColor: "",
                  border: "2px solid blue",
                  borderRadius: "10px",
                  borderLeft: "6px solid blue",
                  borderBottom: "6px solid blue"
                }}
              >
                <center>
                  <h1 style={set}>Add Document</h1>
                </center>
                <form onSubmit={onChangeClick} encType="multipart/form-data">
                  <div class="mb-3">
                    <label for="exampleInputText1" class="form-label">
                      Group Id
                    </label>
                    <input
                      type="text"
                      class="form-control"
                      id="groupid"
                      name="groupid"
                      aria-describedby="emailHelp"
                      value={groupid}
                      onChange={(e) => {
                        setgroupid(e.target.value);
                      }}
                    />
                  </div>

                  <select
                    class="form-select"
                    aria-label="Default select example"
                    name="select"
                    value={select}
                    onChange={(e) => {
                      setselect(e.target.value);
                    }}
                  >
                    <option selected>Open this select menu</option>
                    <option value="Project Proposal report(draft)">Project Proposal report(draft)</option>
                    <option value="Project Status Document">Project Status Document</option>
                    <option value="Research Paper ">Research Paper</option>
                    <option value="Final Report ">Final Report</option>
                  </select>

                  <div class="mb-3">
                    <label for="exampleInputText1" class="form-label">
                      Enter Comment
                    </label>
                    <input
                      type="text"
                      class="form-control"
                      id="comment"
                      name="comment"
                      aria-describedby="emailHelp"
                      value={comment}
                      onChange={(e) => {
                        setcomment(e.target.value);
                      }}
                    />
                  </div>

                  <div class="mb-3">
                    <label for="formFile" class="form-label">
                      Default file input example
                    </label>
                    <input
                      class="form-control"
                      type="file"
                      id="file"
                      filename="file"
                      onChange={onChangeFile}
                    />
                  </div>
                  <center>
                    <button type="submit" class="btn btn-primary">
                      Submit <i class="fa-thin fa-plus"></i>
                    </button>
                  </center>
                </form>
              </div>
            </td>
            <td>
              <img src={img} style={{ width: "700px", height: "500px" }} />
            </td>
          </tr>
        </table>
      </center>
    </div>
  );
}
export default Addfile;
