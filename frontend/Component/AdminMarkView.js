import React, { Component } from "react";
import axios from "axios";

export default class GetMark extends Component {
  constructor(props) {
    super(props);

    this.state = {
      marks: [],
    };
  }

  componentDidMount() {
    this.retrivePosts();
  }

  retrivePosts() {
    axios.get("http://localhost:8001/getmark").then((res) => {
      if (res.data.success) {
        this.setState({
          marks: res.data.existingPosts,
        });
        console.log(this.state.marks);
      }
    });
  }
  onDelete = (id) => {
    axios.delete(`http://localhost:8001/deletemark/${id}`).then((res) => {
      alert("Delete Successfully");
      this.retrivePosts();
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
              <th scope="col"> ID</th>
              <th scope="col">GROUP ID</th>
              <th scope="col">MarkA</th>
              <th scope="col">MarkB</th>
              <th scope="col">MarkC</th>
              <th scope="col">MarkD</th>
              <th scope="col">Total</th>
            </tr>
          </thead>
          <tbody>
            {this.state.marks.map((marks, index) => (
              <tr>
                <th scope="row">{index + 1}</th>
                <td>{marks._id}</td>
                <td>{marks.groupid}</td>
                <td>{marks.marka}</td>
                <td>{marks.markb}</td>
                <td>{marks.markc}</td>
                <td>{marks.markd}</td>
                <td>{marks.marka + marks.markb + marks.markc + marks.markd}</td>

                <td>
                  <button type="button" className="btn btn-success">
                    <i className="fas fa-edit"></i> Update
                  </button>
                  &nbsp;
                  <button
                    type="button"
                    className="btn btn-warning"
                    onClick={() => this.onDelete(marks._id)}
                  >
                    <i className="fas fa-trash-alt"></i> Delete
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
