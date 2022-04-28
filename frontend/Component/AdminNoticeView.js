import { Component } from "react";
import axios from "axios";



 export default class Getnotice extends Component{
    constructor(props){
        super(props);

        this.state={
            notices:[]
        };
    }

   componentDidMount(){
       this.retrivePosts();
   }

    retrivePosts(){
        axios.get("http://localhost:8001/notice").then(res =>{
            if(res.data.success){
                this.setState({
                    notices:res.data.existingPosts
                });
                console.log(this.state.notices)
            }
        })
    }

  filterData(notices,searchKey){

       const result= notices.filter((notice) =>
           notice.topic.toLowerCase().includes(searchKey)||
           notice.date.includes(searchKey)
         
       )
       this.setState({notices:result})
   }

   handleSearchArea = (e) =>{

       const searchKey = e.currentTarget.value;

        axios.get("http://localhost:8001/notice").then(res =>{
            if(res.data.success){
               this.filterData(res.data.existingPosts,searchKey) 
            }
        });
    }

   

 render(){
      return(
         
        <div style={{border:"2px solid", margin:"70px", background:" #ffe6ff"}}>
        <div className="container">
             <center>
             <h1 style={{fontFamily:"Abel"}}>All Notices</h1>
             </center>
             <div style={{ width:"300px"}}>
                    <lable>Search :</lable>
                    <input type="search" 
                       class="form-control" 
                       name="searchQuary"
                       onChange={this.handleSearchArea}
                    />
       </div>
           <br/>
           <table >
              
               <tbody >
                   {this.state.notices.map((notices,index) =>(
                       <tr >
                           <div style={{background:"orange",padding:"10px", paddingRight:"210%px", borderLeft:"6px solid black"}}>
                               
                           <tr ><td><img src="../images/note.jpg" style={{width:"40px", height:"40px", borderRadius:"50px"}}/></td>&nbsp;<td><h3 style={{fontFamily:"Abel"}}>{notices.date}</h3></td></tr>
                           </div>
                           <center>
                           <div  style={{paddingLeft:"20px"}}> 
                           <tr ><h4 style={{fontFamily:"Abel"}}><u>{notices.topic}</u></h4></tr>
                           </div>
                           </center>
                           <div style={{paddingLeft:"20px"}}> 
                           <tr><p>{notices.description}</p></tr>
                           </div>
                           <div style={{paddingLeft:"20px"}}> 
                           <tr>
                               <a src="">
                               <p>{notices.pdf}</p>
                               </a>
                            </tr>
                           </div>
                           <center>
                          <tr>
                              
                                <a className="btn btn-danger" onClick={() =>this.onDelete(notices._id)}>
                                   &nbsp;Delete  <i className="fas fa-trash-alt"></i>
                                 </a>
                             <hr style={{width:"1200px"}}/> 
                          </tr>
                          </center>
                       </tr>
                       
                      
                   ))}
               </tbody>
           </table>
        </div> 
        </div>
      )
                     }
 }

