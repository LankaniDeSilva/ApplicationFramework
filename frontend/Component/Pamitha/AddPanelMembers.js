import React, { Component } from "react";
import axios from "axios";

export default class EditMark extends Component {
    constructor(props) {
        super(props);
        this.state = {
          name: "",
          panelmember: "",
          email:"",
          
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
      
        const { name, panelmember, email } = this.state;
    
        const data = {
          name:name,
          panelmember:panelmember,
          email:email
        };
        console.log(data);
    
        axios.post("https://researchtool.herokuapp.com/savepanel", data).then((res) => {
          if (res.data.success) {
            alert("Add PanelMember Successfully");
            this.setState({
             name:" ",
             panelmember:" ",
             email:" "
            });
          }
        }); 
      };
    

  componentDidMount(){
  
    const id = this.props.match.params.id ;

    axios.get(`https://researchtool.herokuapp.com/getgroupspanel/${id}`).then((res) =>{
      if(res.data.success){
        this.setState({
          name:res.data.post.name,
         
          
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
              borderLeft: "5px solid #9666ff"
            
            }}
          >
           
                <center>
                  <h1 style={{ fontFamily: "Abel" }}>Add PanelMembers</h1>
                </center>
              
               
               
                  <label style={{ fontSize: "20px" }}>Name Of Group : </label>
                  <br />
                  <input
                    class="form-control"
                    id="name"
                    type="text"
                    name='name'
                    value={this.state.name}
                    onChange={this.handleInputChange}
                  />
              

              
                  <label style={{ fontSize: "20px" }}>Enter PanelMember : </label>
                  <br />
                  <input
                    class="form-control"
                    id="panelmember"
                    type="text"
                    name='panelmember'
                    value={this.state.panelmember}
                    onChange={this.handleInputChange}
                  />
                  <br />
                  <label style={{ fontSize: "20px" }}>Enter Email of panelMember : </label>
                  <br />
                  <input
                    class="form-control"
                    id="email"
                    type="text"
                    name='email'
                    value={this.state.email}
                    onChange={this.handleInputChange}
                  />
                  <br />
              
               
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
          <br/>
          <a href="/viewpanel">
          <button class="btn btn-success">View Added Panel</button>
          </a>
        </center>
        <br/>
      </div>
    );
  }
}
