import React, { Component } from "react";
import axios from "axios";

export default class GetStudents extends Component {
  constructor(props) {
    super(props);

    this.state = {
      students: [],
    };
  }

  componentDidMount() {
    this.retrieveStudents();
  }

  retrieveStudents() {
    axios.get("http://localhost:8001/student").then((res) => {
      if (res.data.success) {
        this.setState({
          students: res.data.existingStudents,
        });
        console.log(this.state.students);
      }
    });
  }
  onDelete = (id) => {
    axios.delete(`http://localhost:8001/student/delete/${id}`).then((res) => {
      alert("Delete Successfully");
      this.retrieveStudents();
    });
  };

  render() {
    return (
      <div >
        <br />
        <center>
        <table
          className="table"
          style={{ background: "#f3d8f3", width: "1100px" }}
        >
          <thead>
            <tr>
              <th scope="col">#</th>
              {/* <th scope="col">ID</th> */}
              <th scope="col">ITNumber</th>
              <th scope="col">Name</th>
              <th scope="col">Email</th>
              <th scope="col">Phone Number</th>
              <th>Update</th>
              <th>Delete</th>

            </tr>
          </thead>
          <tbody>
            {this.state.students.map((students, index) => (
              <tr>
                <th scope="row">{index + 1}</th>
                {/* <td>{students._id}</td> */}
                <td>{students.itNumber}</td>
                <td>{students.name}</td>
                <td>{students.email}</td>
                <td>{students.phoneNumber}</td>
                

                <td>
                  <a href={`/studentupdate/${students._id}`}>
                  <button type="button" className="btn btn-warning">
                     Update
                  </button>
                  </a>
                </td>
                <td>
                  <button
                    type="button"
                    className="btn btn-danger"
                    onClick={() => this.onDelete(students._id)}
                  >
                     Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        </center>
      </div>
    );
  }
}
