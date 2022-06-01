import React, { Component } from "react";
import axios from "axios";

export default class allTopicEval extends Component {
  constructor(props) {
    super(props);

    this.state = {
      allTopicEval: [],
    };
  }

  componentDidMount() {
    this.retrivePosts();
  }

  retrivePosts() {
    axios.get("http://localhost:8001/getevaluatetopic").then((res) => {
      if (res.data.success) {
        this.setState({
          allTopicEval: res.data.existingPosts,
        });
        console.log(this.state.allTopicEval);
      }
    });
  }
  onDelete = (id) => {
    axios.delete(`http://localhost:8001/deleteevaluatetopic/${id}`).then((res) => {
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
              <th scope="col">TOPIC</th>
              <th scope="col">COMMENTS</th>
            </tr>
          </thead>
          <tbody>
            {this.state.allTopicEval.map((allTopicEval, index) => (
              <tr>
                <th scope="row">{index + 1}</th>
                <td>{allTopicEval._id}</td>
                <td>{allTopicEval.groupid}</td>
                <td>{allTopicEval.topic}</td>
                <td>{allTopicEval.comments}</td>

                <td>
                  
                  <button type="button" className="btn btn-success">
                    <i className="fas fa-edit"></i> Update
                  </button>
                 
                  &nbsp;
                  <button
                    type="button"
                    className="btn btn-warning"
                    onClick={() => this.onDelete(allTopicEval._id)}
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
