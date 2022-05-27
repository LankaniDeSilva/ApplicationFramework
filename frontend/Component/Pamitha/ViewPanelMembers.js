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
    axios.get("http://localhost:8001/getpanel").then((res) => {
      if (res.data.success) {
        this.setState({
          marks: res.data.existingPosts,
        });
        console.log(this.state.marks);
      }
    });
  }
  onDelete = (id) => {
    axios.delete(`http://localhost:8001/deletepanel/${id}`).then((res) => {
      alert("Delete Successfully");
      this.retrivePosts();
    });
  };

  render() {
    return (
      <div >
        <br />
        <center>
          <h2>Panel Members Assign to Groups</h2><br/>
        <table
          className="table"
          style={{ background: "#ccffcc", width: "1100px", borderRadius:"30px" }}
        >
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">GROUP NAME</th>
              <th scope="col">PANELMEMBER</th>
              <th scope="col">PANELMEMBER EMAIL</th>
             
            </tr>
          </thead>
          <tbody>
            {this.state.marks.map((marks, index) => (
              <tr>
                <th scope="row">{index + 1}</th>
                
                <td>{marks.name}</td>
                <td>{marks.panelmember}</td>
                <td>{marks.email}</td>
               

                <td>
                 
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
