import React, { Component } from "react";
import axios from "axios";

export default class studentTopicEval extends Component {
  constructor(props) {
    super(props);

    this.state = {
      studentTopicEval: [],
    };
  }

  componentDidMount() {
    this.retrivePosts();
  }

  retrivePosts() {
    axios.get("http://localhost:8001/getevaluatetopic").then((res) => {
      if (res.data.success) {
        this.setState({
          studentTopicEval: res.data.existingPosts,
        });
        console.log(this.state.studentTopicEval);
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
              <th scope="col">TOPIC</th>
              <th scope="col">COMMENTS</th>
            </tr>
          </thead>
          <tbody>
            {this.state.studentTopicEval.map((studentTopicEval, index) => (
              <tr>
                <th scope="row">{index + 1}</th>
                <td>{studentTopicEval.groupid}</td>
                <td>{studentTopicEval.topic}</td>
                <td>{studentTopicEval.comments}</td>

              </tr>
            ))}
          </tbody>
        </table>
        </center>
      </div>
    );
  }
}
