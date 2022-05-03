import React, { useState } from "react";
import axios from "axios";
import "../CSS/notice.css";
import feedback from "../public/images/members.png";
import mark from "../public/images/mark.png";
import document from "../public/images/documents.jpg";

const set = {
  color: "blue",
};
const button = {
  background: "pink",
  width: "100px",
  height: "30px",
};

function AddNotice() {
  const [topic, settopic] = useState("");
  const [date, setdate] = useState("");
  const [description, setdescription] = useState("");

  function sendData() {
    const newNotice = {
      topic,
      date,
      description,
    };

    axios
      .post("http://localhost:8001/Notice/save", newNotice)
      .then(() => {
        alert("Add Notice");
      })
      .catch((err) => {
        alert(err);
      });
  }

  return (
    <div>
      <center>
        <table>
          <tr>
            <td style={{ padding: "50px" }}>
              <div className="icone">
                <center>
                  <img
                    src={feedback}
                    style={{ width: "200px", height: "200px", padding: "10px" }}
                  />
                  <h3>Members</h3>
                </center>
              </div>
              <br />
              <div className="icone">
                <center>
                  <img
                    src={mark}
                    style={{ width: "200px", height: "200px", padding: "10px" }}
                  />
                  <h3>Add marks</h3>
                </center>
              </div>
            </td>
            <td>
              <center>
                <div>
                  <table>
                    <tr>
                      <td>
                        <form onSubmit={sendData} className="form">
                          <center>
                            <h1 style={{ fontFamily: "Abel" }}>Add Notice</h1>
                          </center>
                          <label style={{ fontSize: "20px" }}>
                            Enter Topic :{" "}
                          </label>
                          <br />
                          <input
                            type="text"
                            id="name"
                            style={{
                              borderRadius: "15px",
                              width: "400px",
                              height: "40px",
                            }}
                            onChange={(e) => {
                              settopic(e.target.value);
                            }}
                          />
                          <br />

                          <label style={{ fontSize: "20px" }}>
                            Select date :{" "}
                          </label>
                          <br />
                          <input
                            type="date"
                            id="name"
                            style={{
                              borderRadius: "15px",
                              width: "400px",
                              height: "40px",
                              padding: "10px",
                            }}
                            onChange={(e) => {
                              setdate(e.target.value);
                            }}
                          />
                          <br />

                          <label style={{ fontSize: "20px" }}>
                            Enter Notice :{" "}
                          </label>
                          <br />
                          <textarea
                            id="editor"
                            name="editor"
                            style={{
                              borderRadius: "15px",
                              width: "400px",
                              height: "40px",
                            }}
                            onChange={(e) => {
                              setdescription(e.target.value);
                            }}
                          />
                          <br />
                          <br />
                          <center>
                            <button type="submit" class="btn btn-primary">
                              Submit
                            </button>
                          </center>
                        </form>
                      </td>
                      <td style={{ padding: "50px" }}>
                        <div className="icone">
                          <center>
                            <img
                              src={document}
                              style={{
                                width: "200px",
                                height: "170px",
                                padding: "10px",
                              }}
                            />
                            <h3>Document</h3>
                          </center>
                        </div>
                        <br />
                        <div className="icone">
                          <center>
                            <img
                              src={feedback}
                              style={{
                                width: "200px",
                                height: "200px",
                                padding: "10px",
                              }}
                            />
                            <h3>Feedback</h3>
                          </center>
                        </div>
                      </td>
                    </tr>
                  </table>
                </div>
              </center>
            </td>
          </tr>
        </table>
      </center>
    </div>
  );
}
export default AddNotice;
