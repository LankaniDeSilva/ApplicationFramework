import React, { Component } from "react";
import axios from "axios";

export default class StudentPreMark extends Component {
  constructor(props) {
    super(props);

    this.state = {
      StudentPreMark: [],
    };
  }

  componentDidMount() {
    this.retrivePosts();
  }

  retrivePosts() {
    axios.get("http://localhost:8001/getevaluatepresentaion").then((res) => {
      if (res.data.success) {
        this.setState({
          StudentPreMark: res.data.existingPosts,
        });
        console.log(this.state.StudentPreMark);
      }
    });
  }
  

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
              <th scope="col">GROUP ID</th>
              <th scope="col">STUDENT ID</th>
              <th scope="col">Q&A</th>
              <th scope="col">PRESENTING</th>
              <th scope="col">DETAILS</th>
              <th scope="col">TOTAL</th>
            </tr>
          </thead>
          <tbody>
            {this.state.StudentPreMark.map((StudentPreMark, index) => (
              <tr>
                <th scope="row">{index + 1}</th>
                <td>{StudentPreMark.groupid}</td>
                <td>{StudentPreMark.studentid}</td>
                <td>{StudentPreMark.mark1}</td>
                <td>{StudentPreMark.mark2}</td>
                <td>{StudentPreMark.mark3}</td>
                <td>{StudentPreMark.mark1 + StudentPreMark.mark2 + StudentPreMark.mark3}</td>
              </tr>
            ))}
          </tbody>
        </table>
        <br/>
        </center>
      </div>
      
    );
  }
}
