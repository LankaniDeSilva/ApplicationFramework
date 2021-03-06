import React, { Component } from "react";
import axios from "axios";

export default class allPreMark extends Component {
  constructor(props) {
    super(props);

    this.state = {
      allPreMark: [],
    };
  }

  componentDidMount() {
    this.retrivePosts();
  }

  retrivePosts() {
    axios.get("https://researchtool.herokuapp.com/getevaluatepresentaion").then((res) => {
      if (res.data.success) {
        this.setState({
          allPreMark: res.data.existingPosts,
        });
        console.log(this.state.allPreMark);
      }
    });
  }
  onDelete = (id) => {
    axios.delete(`https://researchtool.herokuapp.com/deletevaluatepresentation/${id}`).then((res) => {
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
          style={{ background: "#cce6ff", width: "1100px" }}
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
            {this.state.allPreMark.map((allPreMark, index) => (
              <tr>
                <th scope="row">{index + 1}</th>
                <td>{allPreMark.groupid}</td>
                <td>{allPreMark.studentid}</td>
                <td>{allPreMark.mark1}</td>
                <td>{allPreMark.mark2}</td>
                <td>{allPreMark.mark3}</td>
                <td>{allPreMark.mark1 + allPreMark.mark2 + allPreMark.mark3}</td>

                <td>
                <a href={`/evaluatepresentaionupdate/${allPreMark._id}`}>
              
                  <button type="button" className="btn btn-success">
                    <i className="fas fa-edit"></i> Update
                  </button>
                  </a>
                  &nbsp;
                  <button
                    type="button"
                    className="btn btn-warning"
                    onClick={() => this.onDelete(allPreMark._id)}
                  >
                    <i className="fas fa-trash-alt"></i> Delete
                  </button>
                </td>
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