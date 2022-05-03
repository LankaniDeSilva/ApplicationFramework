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

  filterData(marks, searchKey) {
    const result = marks.filter((pdf) => pdf.groupid.includes(searchKey));
    this.setState({ marks: result });
  }

  handleSearchArea = (e) => {
    const searchKey = e.currentTarget.value;

    axios.get("http://localhost:8001/getmark").then((res) => {
      if (res.data.success) {
        this.filterData(res.data.existingPosts, searchKey);
      }
    });
  };

  render() {
    return (
      <div className="container">
        <center>
          <h1>All Document Submition</h1>
        </center>
        <div className="search" style={{ width: "300px" }}>
          <lable>Search :</lable>
          <input
            type="search"
            class="form-control"
            name="searchQuary"
            onChange={this.handleSearchArea}
          />
        </div>
        <br />
        <button type="button" className="btn btn-success">Download Result Sheet</button>
        <br/>
        <br/>
        <table className="table" style={{ background: "#f3d8f3" }}>
          <thead>
            <tr>
              <th scope="col">#</th>
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

                <td>{marks.groupid}</td>
                <td>{marks.marka}</td>
                <td>{marks.markb}</td>
                <td>{marks.markc}</td>
                <td>{marks.markd}</td>
                <td>{marks.marka+marks.markb+marks.markc+marks.markd}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  }
}
