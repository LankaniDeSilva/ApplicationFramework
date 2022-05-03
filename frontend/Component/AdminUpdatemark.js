import React, { useState } from "react";
import axios from "axios";

function Marks() {
  const [id, setid] = useState("");
  const [groupid, setgid] = useState("");
  const [marka, setmarko] = useState("");
  const [markb, setmarkt] = useState("");
  const [markc, setmarkth] = useState("");
  const [markd, setmarkf] = useState("");

  function sendData(_id) {
    const newMark = {
      id,
      groupid,
      marka,
      markb,
      markc,
      markd,
    };

    axios
      .put(`http://localhost:8001/mark/update/${_id}`, newMark)
      .then(() => {
        alert("Update Mark");
      
      })
      .catch((err) => {
        alert(err);
      });
  }

  return (
    <div>
     

      <center>
        <form
          style={{
            width: "550px",
            padding: "20px",
            border: "2px solid green",
            borderRadius: "10px",
            borderLeft: "6px solid green",
            borderBottom: "6px solid green",
          }}
        >
          <table>
          <tr><center><h1 style={{ fontFamily: "Abel" }}>Update Mark</h1></center></tr>
            <tr>
            
              
              <td>
              <label style={{ fontSize: "20px" }}>id : </label>
              <br />
              <input
                type="text"
                class="form-control"
                value={id}
                id="id"
                onChange={(e) => {
                  setid(e.target.value);
                }}
              />
             </td>
             <td>
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
              </td>
             
            </tr>
           
            <tr>
              <td>
                <label style={{ fontSize: "20px" }}>Select date : </label>
                <br />
                <input
                  class="form-control"
                  id="mark1"
                  type="number"
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
                  type="number"
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
                  type="number"
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
                  type="number"
                  onChange={(e) => {
                    setmarkf(e.target.value);
                  }}
                />
                <br />
              </td>
            </tr>
          </table>
          <center>
            <button
              type="submit"
              onClick={() => sendData(id)}
              class="btn btn-primary"
              
            >
              Submit
            </button>
          </center>
        </form>
      </center>
    </div>
  );
}

export default Marks;
