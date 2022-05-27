import React, { Component } from "react";
import axios from "axios";

export default class AddMark extends Component {
    constructor(props) {
        super(props);
        this.state = {
          name: "",
          mark1:"",
          mark2:"",
          mark3:"",
          mark4:"",
          
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
      
        const { name, mark1, mark2, mark3, mark4 } = this.state;
    
        const data = {
          groupid:name,
          marka:mark1,
          markb:mark2,
          markc:mark3,
          markd:mark4
        };
        console.log(data);
    
        axios.post("http://localhost:8001/savemark", data).then((res) => {
          if (res.data.success) {
            alert("Save Marks Successfully");
            this.setState({
              name: "",
              mark1: "",
              mark2:"",
              mark3:"",
              mark4:"",
            });
          }
        }); 
      };
    

  componentDidMount(){
  
    const id = this.props.match.params.id ;

    axios.get(`http://localhost:8001/getmark/${id}`).then((res) =>{
      if(res.data.success){
        this.setState({
          name:res.data.post.groupid
         
          
        });
        console.log(this.state);
      }
    }); 
}
render(){
  return (
    <div>
      <br/>
      <center>
        <form
         
          style={{
            width: "550px",
            padding: "20px",
            background:"#eee6ff",
            borderRadius: "40px",
            borderLeft: "6px solid  #9666ff"
           
          }}
        >
          <table>
            <tr>
              <h1 style={{ fontFamily: "Abel" }}>Add Mark</h1>

              <label style={{ fontSize: "20px" }}>Group Name : </label>
              <br />
              <input
                class="form-control"
                id="name"
                type="text"
                name='name'
                value={this.state.name}
                onChange={this.handleInputChange}
              />
              <br />
            </tr>

            <tr>
              <td>
                <label style={{ fontSize: "20px" }}>Enter Mark : </label>
                <br />
                <input
                  class="form-control"
                  id="mark1"
                  type="text"
                  name='mark1'
                  value={this.state.mark1}
                  onChange={this.handleInputChange}
                />
                <br />
              </td>
              <td>
                <label style={{ fontSize: "20px" }}>Enter Mark : </label>
                <br />
                <input
                  class="form-control"
                  id="mark2"
                  type="text"
                  name='mark2'
                  value={this.state.mark2}
                  onChange={this.handleInputChange}
                />
                <br />
              </td>
            </tr>
            <tr>
              <td>
                <label style={{ fontSize: "20px" }}>Enter Mark : </label>
                <br />
                <input
                  class="form-control"
                  id="mark3"
                  type="text"
                  name='mark3'
                  value={this.state.mark3}
                  onChange={this.handleInputChange}
                />
                <br />
              </td>
              <td>
                <label style={{ fontSize: "20px" }}>Enter Mark : </label>
                <br />
                <input
                  class="form-control"
                  id="mark4"
                  type="text"
                  name='mark4'
                  value={this.state.mark4}
                  onChange={this.handleInputChange}
                />
                <br />
              </td>
            </tr>
          </table>
          <center>
            <button type="submit" class="btn btn-primary"  onClick={this.onSubmit}>
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

