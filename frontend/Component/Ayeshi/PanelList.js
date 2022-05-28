import React,{useState, useEffect} from "react";
import axios from "axios";

export default function ViewPanel(){
    const [Panel, setPanel] = useState([]);

    useEffect(() =>{
        function getAllPanelMembers(){
            axios.get("http://localhost:8001/panel").then((res) =>{
                setPanel(res.data)
            }).catch((err) =>{
                alert(err.message);
            })

        }
        getAllPanelMembers();
    }, [])

    return(
        <div>
            <table className="table">
                <thead className="thead-dark">
                    <tr>
                        <th scope="col">IDNumber</th>
                        <th scope="col">Name</th>
                        <th scope="col">Email</th>
                        <th scope="col">Phone Number</th>
                        <th scope="col">Edit</th>
                        <th scope="col">Delete</th>
                    </tr>
                </thead>
                {
                    Panel.map((json) =>{
                        const {idNumber, name, email, phoneNumber, _id} = json

                        return(
                           
                                <tbody>
                                <tr>
                                    
                                    <td>{idNumber}</td>
                                    <td>{name}</td>
                                    <td>{email}</td>
                                    <td>{phoneNumber}</td>
                                    <td><button className="btn btn-warning btn-block">Update</button></td>
                                    <td><button className="btn btn-warning btn-block">Delete</button></td>
                                    
                                </tr>
                                </tbody>
                            
                        )
                    })
                }
            </table>
        </div>
    )
}