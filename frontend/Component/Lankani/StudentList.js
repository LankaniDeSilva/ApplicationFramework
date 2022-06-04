import React,{useState, useEffect} from "react";
import axios from "axios";

export default function ViewStudents(){
    const [Student, setStudent] = useState([]);

    useEffect(() =>{
        function getAllStudents(){
            axios.get("https://researchtool.herokuapp.com/student").then((res) =>{
                setStudent(res.data)
            }).catch((err) =>{
                alert(err.message);
            })

        }
        getAllStudents();
    }, [])

    return(
        <div>
            <table className="table">
                <thead className="thead-dark">
                    <tr>
                        <th scope="col">ITNumber</th>
                        <th scope="col">Name</th>
                        <th scope="col">Email</th>
                        <th scope="col">Phone Number</th>
                        <th scope="col">Edit</th>
                        <th scope="col">Delete</th>
                    </tr>
                </thead>
                {
                    Student.map((json) =>{
                        const {itNumber, name, email, phoneNumber, _id} = json

                        return(
                           
                                <tbody>
                                <tr>
                                    
                                    <td>{itNumber}</td>
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