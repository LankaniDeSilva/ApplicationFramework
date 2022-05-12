import React, { Component } from "react";
import axios from "axios";

export default class GetNotices extends Component {
  constructor(props) {
    super(props);


    this.state = {
      notices: [],
    };
  }

  componentDidMount() {
    this.retrievenotices();
  }

  retrievenotices() {
    axios.get("http://localhost:8001/notice/" + this.props.data ).then((res) => {
      if (res.data.success) {
        this.setState({
          notices: res.data.existingNotices,
        });
        console.log(this.state.notices);
      }
    });
  }

  render() {
    return (
      <div >     
            
        
            
         <div>

             <br/><br/>

            <div class="jumbotron1 jumbotron-fluid">
              <div class="container">
                <h2>Notices</h2>
                {this.state.notices.map((notices, index) => (
                    <>
                  <h3 class="display-4">{notices.topic}</h3>
                  <p>{notices.description}</p>
                  <p>{notices.pdf}</p>
                  </>
                ))}

              </div>
            </div>
          </div>
            
        
      </div>
    );
  }
}
