import React, { useState, useEffect } from "react";
import axios from "axios";
//import PDFS from "../public/uploads/"

function AdminNoticeView() {
  const [Notice, setnotice] = useState([]);

  useEffect(() => {
    function getStudents() {
      axios
        .get("http://localhost:8001/notice")
        .then((res) => {
          setnotice(res.data);
        })
        .catch((err) => {
          alert(err.message);
        });
    }
    getStudents();
  }, []);

  function deleteDoctor(_id) {
    swal({
      title: "Are you sure?",
      text: "Once deleted, you will not be able to recover this data!",
      icon: "warning",
      buttons: true,
      dangerMode: true,
    }).then((willDelete) => {
      if (willDelete) {
        swal("Poof! Your data has been successfully Deleted!", {
          icon: "success",
        });

        fetch(`http://localhost:8001/deletenotice/${_id}`, {
          method: "DELETE",
        })
          .then((response) => {
            response.json();
            swal(
              "Good job!",
              "Your data has been successfully Deleted",
              "success"
            );
          })
          .catch((error) => {
            swal("Sorry!", "Something Error...", "error");
          });
      }
    });
  }

  return (
    <div>
      <center>
        <br/>
      <div class="alert alert-success alert-dismissible fade show" role="alert" style={{width:"1200px"}}>
        <strong>Notice Added Successfully.</strong>
        <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
      </div>
      <br/>
        <h2>Admin Notice View</h2><br/>
        <table>
          {Notice.map((json) => {
            const { topic, date, description, pdf, _id } = json;
            return (
              <tbody>
                <tr>
                  <div
                    style={{
                      background: "#ccddff",
                      borderLeft: "4px solid #1a66ff",
                      width: "1200px",
                      height: "50px",
                      padding: "10px",
                    }}
                  >
                    <tr><b>{topic}</b></tr>
                  </div>
                  <tr>Date : {date}</tr>
                  <tr>{description}</tr>
                  <tr>{pdf}</tr>
                  <br />

                  <center>
                    <tr>
                      <button
                        className="btn btn-warning btn-block"
                        onClick={() => deleteDoctor(_id)}
                      >
                        <i className="fas fa-trash-alt"></i> Delete{" "}
                      </button>
                      &nbsp;
                      <a
                        className="btn btn-primary"
                        rel="noreferrer"
                        target="_blank"
                      >
                        <i class="fa-solid fa-eye"></i> View{" "}
                      </a>
                    </tr>
                    <br />
                  </center>
                </tr>
              </tbody>
            );
          })}
        </table>
      </center>
    </div>
  );
}
export default AdminNoticeView;
