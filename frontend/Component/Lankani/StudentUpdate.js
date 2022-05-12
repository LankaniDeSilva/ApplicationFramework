import React, { Component } from "react";
import axios from "axios";

export default class EditStudent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      sitNumber: '',
      sname: '',
      semail: '',
      sphoneNumber: '',

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
    const { sitNumber, sname, semail, sphoneNumber } = this.state;

    const data = {
      itNumber: sitNumber,
      name: sname,
      email: semail,
      phoneNumber: sphoneNumber,
    };
    console.log(data);

    axios.put(`http://localhost:8001/studentupdate/${id}`, data).then((res) => {
      if (res.data.success) {
        alert("Student Updated Successfully");
        this.setState({
          sitNumber: "",
          sname: "",
          semail: "",
          sphoneNumber: "",
        });
      }
    }); 
  };

  componentDidMount(){
  
    const id = this.props.match.params.id ;

    axios.get(`http://localhost:8001/student/${id}`).then((res) =>{
      if(res.data.success){
        this.setState({
            sitNumber: res.data.student.itNumber,
            sname: res.data.student.name,
            semail: res.data.student.email,
            sphoneNumber: res.data.student.phoneNumber,
          
        });
        console.log(this.state);
      }
    }); 
}

  render() {
    return (
      <div>
        <center>
          <form onSubmit={this.onSubmit}>
            <table>
              <tr>
                <center>
                  <h1 style={{ fontFamily: "Abel" }}>Update Student</h1>
                </center>
              </tr>
              <tr>
               
                <td>
                  <label style={{ fontSize: "20px" }}>ITNumber : </label>
                  <br />
                  <input
                    class="form-control"
                    id="sitNumber"
                    type="text"
                    name='sitNumber'
                    value={this.state.sitNumber}
                    onChange={this.handleInputChange}
                  />
                </td>
              </tr>

              <tr>
                <td>
                  <label style={{ fontSize: "20px" }}>Name : </label>
                  <br />
                  <input
                    class="form-control"
                    id="sname"
                    type="text"
                    name='sname'
                    value={this.state.sname}
                    onChange={this.handleInputChange}
                  />
                  <br />
                </td>
                <td>
                  <label style={{ fontSize: "20px" }}>Email :</label>
                  <br />
                  <input
                    class="form-control"
                    id="semail"
                    type="email"
                    name='semail'
                    value={this.state.semail}
                    onChange={this.handleInputChange}
                  />
                  <br />
                </td>
              </tr>
              <tr>
                <td>
                  <label style={{ fontSize: "20px" }}>Phone Number :</label>
                  <br />
                  <input
                    class="form-control"
                    id="sphoneNumber"
                    type="tel"
                    name='sphoneNumber'
                    value={this.state.sphoneNumber}
                    onChange={this.handleInputChange}
                  />
                  <br />
                </td>
                
              </tr>
            </table>
            <center>
              <button
                type="submit"
                class="btn btn-primary"
              >
                Submit
              </button>
            </center>
          </form>
        </center>
      </div>
    );
  }
}
