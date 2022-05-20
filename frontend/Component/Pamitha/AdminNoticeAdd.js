import React, { useState } from "react";
import axios from "axios";
import "./CSS/notice.css";
import feedback from "./images/members.png";
import mark from "./images/mark.png";
import document from "./images/documents.jpg";

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
        <br />
        <div
          class="alert alert-success alert-dismissible fade show"
          role="alert"
          style={{ width: "1000px" }}
        >
          <strong>Welcome Admin!</strong> Have a nice day........
          <button
            type="button"
            class="btn-close"
            data-bs-dismiss="alert"
            aria-label="Close"
          ></button>
        </div>
        <table>
          <tr>
            <td style={{ padding: "50px" }}>
              <div className="icone">
                <center>
                  <a href="/viewstudent">
                    <img
                      src={feedback}
                      style={{
                        width: "200px",
                        height: "200px",
                        padding: "10px",
                      }}
                    />
                    <h3>Members</h3>
                  </a>
                </center>
              </div>
              <br />
              <div className="icone">
                <center>
                  <a href="/mark">
                    <img
                      src={mark}
                      style={{
                        width: "200px",
                        height: "200px",
                        padding: "10px",
                      }}
                    />
                    <h3>Add Mark</h3>
                  </a>
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
                            <br />
                          </center>
                        </form>
                        <br />
                        <center>
                          <table>
                            <tr>
                              <td>
                                <a href="/group">
                                  <button type="submit" class="btn btn-success">
                                    View Groups
                                  </button>
                                </a>
                              </td>
                              <td>
                                <a href="/noticepdf">
                                  <button type="submit" class="btn btn-success">
                                    Add Notice With PDF
                                  </button>
                                </a>
                              </td>
                              <td>
                                <a href="/viewnotice">
                                  <button type="submit" class="btn btn-success">
                                    <i class="fa-solid fa-eye"></i> Notice View
                                  </button>
                                </a>
                              </td>
                              <td>
                                <a href="/viewpanel">
                                  <button type="submit" class="btn btn-success">
                                    <i class="fa-solid fa-eye"></i> Panel View
                                  </button>
                                </a>
                              </td>
                            </tr>
                          </table>
                        </center>
                      </td>
                      <td style={{ padding: "50px" }}>
                        <div className="icone">
                          <center>
                            <a href="/admindocument">
                              <img
                                src={document}
                                style={{
                                  width: "200px",
                                  height: "170px",
                                  padding: "10px",
                                }}
                              />
                              <h3>Document</h3>
                            </a>
                          </center>
                        </div>
                        <br />
                        <div className="icone">
                          <center>
                            <a href="/feedback">
                              <img
                                src={feedback}
                                style={{
                                  width: "200px",
                                  height: "200px",
                                  padding: "10px",
                                }}
                              />
                              <h3>Feedback</h3>
                            </a>
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
