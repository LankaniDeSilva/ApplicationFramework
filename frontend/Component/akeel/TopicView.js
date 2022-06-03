import axios from "axios";
import React, { useState, useEffect } from "react";
import { Link, useHistory } from "react-router-dom";


const TopicView = () => {
    const [researchtopics, setResearchtopics] = useState([]);
    const history = useHistory();

    const getResearchTopics = () => {
        axios.get('http://localhost:8001/ResearchTopic').then((data) => {
            
          setResearchtopics(data.data.existingPosts);
          console.log(data);
        });
      };

      useEffect(() => {
        getResearchTopics();
      }, []);
    
   
    
      const UpdateTopic = (_id) => {
        console.log({ _id });
        // history(`/SupervisorHome/TopicView/TopicAcceptorReject/${_id}`);
      };
  return (
    <div>
     
    <div className="row hidden-md-up">
      
      <div className="card w-75 p-3 offset-md-1 bg-light "  >
        <h2 className="text-center">Research Topics</h2>
        <div className="row ">
          <div className="card w-50 col-4 mx-auto">

            <table className="table tav=ble-striped">
              <thead>
                <tr>
                  <th scope="col">Group ID</th>
                  <th scope="col">Topic</th>
                  <th scope="col">Action</th>
                </tr>
              </thead>
              <tbody>
                {researchtopics && researchtopics.length&&researchtopics.map((researchtopic) => (
                  <tr key={researchtopic._id}>
                    <td>{researchtopic.groupNumber}</td>
                    <td>{researchtopic.topic}</td>
                    <td>
                      <button onClick={() => UpdateTopic(researchtopic._id)}>
                        Update
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
         
        </div>
        
      </div>
      
    </div>
    </div>
  )
}

export default TopicView