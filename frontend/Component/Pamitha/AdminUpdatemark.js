import React, { Component } from "react";
import axios from "axios";

export default class EditMark extends Component {
  constructor(props) {
    super(props);
    this.state = {
      topic: "",
      mark1: "",
      mark2: "",
      mark3: "",
      mark4: "",
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
    const { groupid, mark1,mark2,mark3,mark4 } = this.state;

    const data = {
      grupid: groupid,
      marka: mark1,
      markb: mark2,
      markc: mark3,
      markd: mark4
    };
    console.log(data);

    axios.put(`http://localhost:8001/markupdate/${id}`, data).then((res) => {
      if (res.data.success) {
        alert("Marks Updated Successfully");
        this.setState({
          groupid: "",
          mark1: "",
          mark2: "",
          mark3: "",
          mark4: "",
        });
      }
    }); 
  };

  componentDidMount(){
  
    const id = this.props.match.params.id ;

    axios.get(`http://localhost:8001/marks/${id}`).then((res) =>{
      if(res.data.success){
        this.setState({
          groupid:res.data.post.groupid,
          mark1:res.data.post.marka,
          mark2:res.data.post.markb,
          mark3:res.data.post.markc,
          mark4:res.data.post.markd
          
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
              background:" #eee6ff",
              borderRadius: "40px",
              borderLeft: "6px solid  #9666ff"
             
            }}
          >
            <table>
              <tr>
                <center>
                  <h1 style={{ fontFamily: "Abel" }}>Update Mark</h1>
                </center>
              </tr>
              <tr>
               
                <td>
                  <label style={{ fontSize: "20px" }}>Enter Topic : </label>
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
                  <label style={{ fontSize: "20px" }}>Enter Mark : </label>
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
                  <label style={{ fontSize: "20px" }}>Enter Mark :</label>
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
                  <label style={{ fontSize: "20px" }}>Enter Mark :</label>
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
                <td>
                  <label style={{ fontSize: "20px" }}>Enter Mark :</label>
                  <br />
                  <input
                    class="form-control"
                    id="mark4"
                    type="number"
                    name='mark4'
                    value={this.state.mark4}
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
