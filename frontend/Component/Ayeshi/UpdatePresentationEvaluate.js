import React, { Component } from "react";
import axios from "axios";

export default class EditPresentation extends Component {
  constructor(props) {
    super(props);
    this.state = {
      groupid: "",
      studentid: "",
      mark1: "",
      mark2: "",
      mark3: "",
    };
  }

  handleInputChange = (e) => {
    const { name, value } = e.target;

    this.setState({
      ...this.state,
      [name]: value,
    });
  };

  onSubmit = (e) => {
    e.preventDefault();
    const id = this.props.match.params.id;
    const { groupid, studentid,mark1,mark2,mark3 } = this.state;

    const data = {
      groupid: groupid,
      studentid: studentid,
      mark1: mark1,
      mark2: mark2,
      mark3: mark3,
    };
    console.log(data);

    axios.put(`https://researchtool.herokuapp.com/evaluatepresentaionupdate/${id}`, data).then((res) => {
      if (res.data.success) {
        alert("Marks Updated Successfully");
        this.setState({
            groupid: "",
            studentid: "",
            mark1: "",
            mark2: "",
            mark3: ""
        });
      }
    }); 
  };

  componentDidMount(){
  
    const id = this.props.match.params.id ;

    axios.get(`http://localhost:8001/allPreMark/${id}`).then((res) =>{
      if(res.data.success){
        this.setState({
          groupid:res.data.post.groupid,
          studentid:res.data.post.studentid,
          mark1:res.data.post.mark1,
          mark2:res.data.post.mark2,
          mark3:res.data.post.mark3,
          
          
        });
        console.log(this.state);
      }
    }); 
}

  render() {
    return (
      <div>
        <br/>
        <center>
          <form
            style={{
              width: "550px",
              padding: "20px",
              background:"#cce6ff",
              borderRadius: "40px",
             
            }}
          >
            <table>
              <tr>
                <center>
                  <h1 style={{ fontFamily: "Abel" }}>Update Marks</h1>
                </center>
              </tr>
              <tr>
               
                <td>
                  <label style={{ fontSize: "20px" }}>Group ID</label>
                  <br />
                  <input
                    class="form-control"
                    id="gid"
                    type="text"
                    name='groupid'
                    value={this.state.groupid}
                    onChange={this.handleInputChange}
                  />
                </td>
              </tr>
              <tr>
               
                <td>
                  <label style={{ fontSize: "20px" }}>Student ID</label>
                  <br />
                  <input
                    class="form-control"
                    id="gid"
                    type="text"
                    name='studentid'
                    value={this.state.studentid}
                    onChange={this.handleInputChange}
                  />
                </td>
              </tr>

              <tr>
                <td>
                  <label style={{ fontSize: "20px" }}>Q&A</label>
                  <br />
                  <input
                    class="form-control"
                    id="mark1"
                    type="number"
                    name='mark1'
                    value={this.state.mark1}
                    onChange={this.handleInputChange}
                  />
                  <br />
                </td>
                <td>
                  <label style={{ fontSize: "20px" }}>Presenting</label>
                  <br />
                  <input
                    class="form-control"
                    id="mark2"
                    type="number"
                    name='mark2'
                    value={this.state.mark2}
                    onChange={this.handleInputChange}
                  />
                  <br />
                </td>
              </tr>
              <tr>
                <td>
                  <label style={{ fontSize: "20px" }}>Details</label>
                  <br />
                  <input
                    class="form-control"
                    id="mark3"
                    type="number"
                    name='mark3'
                    value={this.state.mark3}
                    onChange={this.handleInputChange}
                  />
                  <br />
                </td>
              </tr>
            </table>
            <center>
              <button
                type="submit"
                onClick={this.onSubmit}
                class="btn btn-primary"
              >
                Submit
              </button>
            </center>
          </form>
        </center>
        <br/>
      </div>
    );
  }
}
