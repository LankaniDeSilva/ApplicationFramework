
  
import React, { Component } from "react";
import axios from "axios";

import fileDownload from "js-file-download";

export default class Getnotice extends Component {
  constructor(props) {
    super(props);

    this.state = {
     notice: [],
    };
  }

  componentDidMount() {
    this.retrivePosts();
  }

  retrivePosts() {
    axios.get("http://localhost:8001/getnotice").then((res) => {
      if (res.data.success) {
        this.setState({
         notice: res.data.existingPosts,
        });
        console.log(this.state.notice);
      }
    });
  }

 

  onDelete = (id) => {
    axios.delete(`http://localhost:8001/notice/delete/${id}`).then((res) => {
      alert("Delete Successfully");
      this.retrivePosts();
    });
  };

  downloadFile = (pdf) => {
    const data = {
      pdf : pdf,
    };

    axios({
      url:"http://localhost:8001/downloadnotice",
      data,
      method:"POST",
      responseType:"blob"
    }).then((res) => {
      console.log(res);
      fileDownload(res.data, pdf);
    });
  };



  render() {
    return (
      <div className="container">
        <center>
          <h1>Notice</h1>
        </center>
        
        <br />

        <table style={{marginLeft:"100px"}}>
        
          <tbody>
            {this.state.notice.map((notice) => (
              <tr>
              <div style={{background:"#b3d1ff", width:"1100px",height:"50px", borderLeft:"4px solid #3385ff"}}>
              &nbsp; <tr>&nbsp;<b>{notice.date}</b></tr>
                </div>
                &nbsp;<tr>&nbsp;<b>{notice.topic}</b></tr>
              
                &nbsp;<tr>&nbsp;{notice.description}</tr>
                &nbsp;<tr>
                &nbsp;{notice.pdf}
                </tr>
                <center>
              <tr>
                
                <td>
                  <a
                    className="btn btn-success"
                    rel="noreferrer"
                    target="_blank"
                    onClick={(e) => this.downloadFile(notice.pdf)}
                  >
                   <i class="fa-solid fa-download"></i> Download
                  </a>
                  &nbsp;
                  <button
                    type="button"
                    className="btn btn-warning"
                    onClick={() => this.onDelete(notice._id)}
                  >
                    <i className="fas fa-trash-alt"></i> Delete
                  </button>
                 
                
                </td>
                
                </tr>
                </center>
                <br/>
              </tr>
            ))}
          </tbody>
        
        </table>
      </div>
    );
  }
}
