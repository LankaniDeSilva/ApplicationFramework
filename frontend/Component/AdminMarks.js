import React, { useState, useEffect } from "react";
import axios from "axios";
import swal from "sweetalert";

function Marks() {
  const [id, setgid] = useState("");
  const [markone, setmarko] = useState("");
  const [marktwo, setmarkt] = useState("");
  const [markthree, setmarkth] = useState("");
  const [markfour, setmarkf] = useState("");

  function passData() {
    const newMark = {
      id,
      markone,
      marktwo,
      markthree,
      markfour,
    };

    axios
      .post("http://localhost:8001/marksave", newMark)
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
        <form
          onSubmit={passData}
          style={{
            width: "550px",
            padding: "20px",
            border: "2px solid #4d94ff",
            borderRadius: "10px",
            borderLeft: "6px solid blue",
            borderBottom: "6px solid blue",
          }}
        >
          <table>
            <tr>
              <h1 style={{ fontFamily: "Abel" }}>Add Mark</h1>

              <label style={{ fontSize: "20px" }}>Enter Topic : </label>
              <br />
              <input
                class="form-control"
                id="gid"
                type="text"
                onChange={(e) => {
                  setgid(e.target.value);
                }}
              />
              <br />
            </tr>

            <tr>
              <td>
                <label style={{ fontSize: "20px" }}>Select date : </label>
                <br />
                <input
                  class="form-control"
                  id="mark1"
                  type="text"
                  onChange={(e) => {
                    setmarko(e.target.value);
                  }}
                />
                <br />
              </td>
              <td>
                <label style={{ fontSize: "20px" }}>Enter Notice : </label>
                <br />
                <input
                  class="form-control"
                  id="mark2"
                  type="text"
                  onChange={(e) => {
                    setmarkt(e.target.value);
                  }}
                />
                <br />
              </td>
            </tr>
            <tr>
              <td>
                <label style={{ fontSize: "20px" }}>Enter Notice : </label>
                <br />
                <input
                  class="form-control"
                  id="mark3"
                  type="text"
                  onChange={(e) => {
                    setmarkth(e.target.value);
                  }}
                />
                <br />
              </td>
              <td>
                <label style={{ fontSize: "20px" }}>Enter Notice : </label>
                <br />
                <input
                  class="form-control"
                  id="mark4"
                  type="text"
                  onChange={(e) => {
                    setmarkf(e.target.value);
                  }}
                />
                <br />
              </td>
            </tr>
          </table>
          <center>
            <button type="submit" class="btn btn-primary">
              Submit
            </button>
          </center>
        </form>
      </center>
    </div>
  );
}

export default Marks;
