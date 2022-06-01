import React, { useEffect, useState } from "react";
import axios from "axios";
import $ from 'jquery';
import 'jquery-validation'
import './CSS/styles.css';

export default function AddStudent() {
  const [itNumber, setItNumber] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [msg, setMsg] = useState('');

  useEffect(() =>{
    const createStudentForm = $("#studentcreate");

    createStudentForm.validate({
        rules: {
            idnumber: {
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
            sphone: {
              required: true,
              minlength: 10,
              maxlength: 10,
              number: true
            }

        },
        messages: {
          idnumber:{
            required: 'Please enter your Student ID Number',
            maxlength: 'Student ID Number not more than 10 characters',
            minlength: 'Student ID Number not less than 10 characters',
            
          },
          sname: {
            required: "Please Enter your Name",
            lettersonly: "Please enter letters only"
          },
          semail: {
            required: "Please enter your Email",
            email: "Please Enter a valid Email"
          },
          sphone: {
            required: "Please Enter Phone Number",
            minlength: "Phone Number not less than 10 digits",
            maxlength: "Phone number not more than 10 digits",
            number: "Phone number must contain only numbers"
          }
        }
    });

  })


  function sendData(e) {
    e.preventDefault();
    const newStudent = {
      itNumber,
      name,
      email,
      phoneNumber,
      
    };

    axios
      .post("http://localhost:8001/Student/save", newStudent)
      .then((res) => {
        setMsg(res.data.success);
        // alert("Add Student");
      })
      .catch((e) => {
        alert(e);
      });
      
  }

  return (
   <center>
    <div
      style={{
        margin: "50px",
        padding: "50px",
        backgroundColor: "#cce6ff",
        borderColor: "solid",
        borderRadius: "40px",
        width: "600px",
        alignContent:"center",
        borderLeft:"5px solid blue"
      }}
    >
      <p class="mb-3 mt-2" style={{color:"green",marginLeft:"57px"}}><b>{msg}</b></p>
      <div className="container">
        <h1>Registration Form</h1>
        <form onSubmit={sendData} id="studentcreate">
          <div className="form-group">
            <label for="itnumber">ITNumber : </label>
            <input
              type="text"
              className="form-control"
              id="itnumber"
              name="idnumber"
              placeholder="Enter ITNumber"
              onChange={(e) => {
                setItNumber(e.target.value);
              }}
            />
          </div>
          <div className="form-group">
            <label for="name">Name : </label>
            <input
              type="text"
              className="form-control"
              id="name"
              name="sname"
              placeholder="Enter Name"
              onChange={(e) => {
                setName(e.target.value);
              }}
            />
          </div>
          <div className="form-group">
            <label for="email">Email address : </label>
            <input
              type="email"
              className="form-control"
              id="email"
              name="semail"
              placeholder="Enter email"
              onChange={(e) => {
                setEmail(e.target.value);
              }}
            />
          </div>
          <div className="form-group">
            <label for="phone">Phone Number : </label>
            <input
              type="tel"
              className="form-control"
              id="phone"
              name="sphone"
              placeholder="Enter Phone Number"
              onChange={(e) => {
                setPhoneNumber(e.target.value);
              }}
            />
          </div>
          <button type="submit" className="btn btn-primary">
            Submit
          </button>
        </form>
      </div>
    </div>
    </center>

  );
}
