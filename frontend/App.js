import React, {Component} from "react";
//import "../bootstrap.min.css";
  import { BrowserRouter, Route ,Routes} from "react-router-dom";

  import Nav from "./Component/Header";
  import AdminSubmition from "./Component/AdminSubmition";
  import UserNoticeView from "./Component/UserNoticeView";
  import FeedbackView from "./Component/FeedbackView";
  import AdminNoticeView from "./Component/AdminNoticeView";
  import AdminUserPDF from "./Component/AdminUserPDF";
  import AdminNoticeAdd from "./Component/AdminNoticeAdd";
  import AdminNoticePDF from "./Component/AdminNoticePDF";
  import AdminMark from "./Component/AdminMarks";
  import AdminMarkUpdate from "./Component/AdminUpdatemark";
  import AdminMarkView from "./Component/AdminMarkView";
  import StudentMark from "./Component/StudentMark";
  import AdminFeedback from "./Component/AdminFeedback";
  

export default class App extends Component{
//const App = () => {
  render(){
    return (
    
       <div className="container">
       <Nav/>
       <AdminSubmition/>
       <AdminUserPDF/>
         
  
         
     
    
      </div>
     
  );
 }
}
//<Route path="/" exact component={AdminNoticeAdd}></Route>