import React, { Component } from "react";
import axios from "axios";

export default class GetMark extends Component {
  constructor(props) {
    super(props);

    this.state = {
      groups: [],
    };
  }

  componentDidMount() {
    this.retrivePosts();
  }

  retrivePosts() {
    axios.get("http://localhost:8001/getgroups").then((res) => {
      if (res.data.success) {
        this.setState({
          groups: res.data.existingPosts,
        });
        console.log(this.state.groups);
      }
    });
  }

  filterData(pdfs, searchKey) {
    const result = pdfs.filter(
      (pdf) => pdf.name.includes(searchKey) || pdf.details.includes(searchKey)
    );
    this.setState({ groups: result });
  }

  handleSearchArea = (e) => {
    const searchKey = e.currentTarget.value;

    axios.get("http://localhost:8001/getgroups").then((res) => {
      if (res.data.success) {
        this.filterData(res.data.existingPosts, searchKey);
      }
    });
  };

  onDelete = (id) => {
    axios.delete(`http://localhost:8001/deletegroup/${id}`).then((res) => {
      alert("Delete Successfully");
      this.retrivePosts();
    });
  };

  render() {
    return (
      <div>
        <br />
          <center>
          <h2>Group Register Details</h2>
          </center>
          <div className="search" style={{ width: "400px",paddingLeft:"50px" }}>
            <lable>Search :</lable>
            <input
              type="search"
              class="form-control"
              name="searchQuary"
              onChange={this.handleSearchArea}
            />
          </div>
          <br />
          <center>
          <table
            className="table"
            style={{ background: "#ccffcc", width: "1400px", borderRadius:"30px" }}
          >
            <thead>
              <tr>
                <th scope="col">#</th>
                <th scope="col">GROUP NAME</th>
                <th scope="col">GROUP LEADER</th>
                <th scope="col">MEMBER 2</th>
                <th scope="col">MEMBER 3</th>
                <th scope="col">MEMBER 4</th>
              </tr>
            </thead>
            <tbody>
              {this.state.groups.map((groups, index) => (
                <tr>
                  <th scope="row">{index + 1}</th>
                  <td>{groups.name}</td>
                  <td>{groups.leader}</td>
                  <td>{groups.member2}</td>
                  <td>{groups.member3}</td>
                  <td>{groups.member4}</td>

                  <td>
                   
                    
                    &nbsp;
                    <button
                      type="button"
                      className="btn btn-warning"
                      onClick={() => this.onDelete(groups._id)}
                     
                    >
                      <i className="fas fa-trash-alt"></i>
                    </button>
                   
                    <a href={`/paneladd/${groups._id}`}>
                    <button
                    
                      type="button"
                      className="btn btn-success"
                    >
                     <i class="fa-solid fa-plus"></i>
                    </button>
                    </a>
                    
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
