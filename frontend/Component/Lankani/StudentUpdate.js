import React, { Component } from "react";
import axios from "axios";
import $ from 'jquery';
import 'jquery-validation'
import './CSS/styles.css';


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

    axios.put(`https://researchtool.herokuapp.com/studentupdate/${id}`, data).then((res) => {
      if (res.data.success) {
        alert("Student Updated Successfully");
        this.setState({
          sitNumber: "",
          sname: "",
          semail: "",
          sphoneNumber: "",
        });
      }
    }).catch((error) =>{
      console.log(error);
    }); 

    // this.props.history.push("/viewstudent");
    this.props.history.push("/viewstudent");
  };

  componentDidMount(){
  
    const id = this.props.match.params.id ;

    axios.get(`https://researchtool.herokuapp.com/student/${id}`).then((res) =>{
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

    const updateForm = $("#student-update-form");

    updateForm.validate({
      rules: {
        sitNumber: {
          required: true, 
          minlength: 10,
          maxlength: 10,
        },
        sname: {
          required: true
        },
        semail:{
          required: true,
          email: true
        },
        sphoneNumber: {
          required: true,
          minlength: 10,
          maxlength: 10,
          number: true
        }

    },
    messages: {
      sitNumber:{
        required: 'Please enter your Student ID Number',
        minlength: 'Student ID Number not less than 10 characters',
        maxlength: 'Student ID Number not more than 10 characters'
      },
      sname: {
        required: "Please Enter your Name",
        lettersonly: "Please enter letters only"
      },
      semail: {
        required: "Please enter your Email",
        email: "Please Enter a valid Email"
      },
      sphoneNumber: {
        required: "Please Enter Phone Number",
        minlength: "Phone Number not less than 10 digits",
        maxlength: "Phone number not more than 10 digits",
        number: "Phone number must contain only numbers"
      }
    }
    })
}

  render() {
    return (
      <center>
      <div   style={{
        margin: "50px",
        padding: "50px",
        backgroundColor: " #eee6ff",
        borderColor: "solid",
        borderRadius: "40px",
        width: "600px",
        alignContent:"center",
        borderLeft:"5px solid purple"
      }}>
        <center>
          <form onSubmit={this.onSubmit} id="student-update-form">
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
      </center>
    );
  }
}
