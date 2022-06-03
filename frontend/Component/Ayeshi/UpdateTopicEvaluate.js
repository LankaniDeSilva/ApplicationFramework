import React, { Component } from "react";
import axios from "axios";

export default class EditTopic extends Component {
  constructor(props) {
    super(props);
    this.state = {
      groupid: "",
      topic: "",
      comments: "",
      
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
    const { comments } = this.state;

    const data = {
      
      comments: comments
      
    };
    console.log(data);

    axios.put(`http://localhost:8001/evaluatetopicupdate/${id}`, data).then((res) => {
      if (res.data.success) {
        alert("Updated Successfully");
        this.setState({

           comments: "",
            
        });
      }
    }); 
  };

  componentDidMount(){
  
    const id = this.props.match.params.id ;

    axios.get(`http://localhost:8001/allTopicEval/${id}`).then((res) =>{
      if(res.data.success){
        this.setState({

          comments:res.data.post.comments,
         
          
          
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
                  <h1 style={{ fontFamily: "Abel" }}>Update Comments</h1>
                </center>
              </tr>

              <tr>
                <td>
                  <label style={{ fontSize: "20px" }}>Comments</label>
                  <br />
                  <input
                    class="form-control"
                    id="comments"
                    type="text"
                    name='comments'
                    value={this.state.comments}
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
