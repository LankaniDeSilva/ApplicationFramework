import React, {Component} from "react";
//import "../bootstrap.min.css";
import {BrowserRouter,Route } from "react-router-dom";

  import Nav from "./Component/Pamitha/Header";
  import Footer from "./Component/Pamitha/footer";
  import StudentGroupRegistration from "./Component/Pamitha/StudentGroupRegistration";
  import GroupDetails from "./Component/Pamitha/GroupDetails";
  import AdminSubmition from "./Component/Pamitha/AdminSubmition";
  import UserNoticeView from "./Component/Pamitha/UserNoticeView";
  import FeedbackView from "./Component/Pamitha/FeedbackView";
  import AdminNoticeView from "./Component/Pamitha/AdminNoticeView";
  import AdminUserPDF from "./Component/Pamitha/AdminUserPDF";
  import AdminNoticeAdd from "./Component/Pamitha/AdminNoticeAdd";
  import AdminNoticePDF from "./Component/Pamitha/AdminNoticePDF";
  import AdminMark from "./Component/Pamitha/AdminMarks";
  import AdminMarkUpdate from "./Component/Pamitha/AdminUpdatemark";
  import AdminMarkView from "./Component/Pamitha/AdminMarkView";
  import StudentMark from "./Component/Pamitha/StudentMark";
  import AdminFeedback from "./Component/Pamitha/AdminFeedback";
  import AddPanelMembers from "./Component/Pamitha/AddPanelMembers";
  import ViewPanelMembers from "./Component/Pamitha/ViewPanelMembers";
  


export default class App extends Component{
   render(){
    return (
      <BrowserRouter>
        <div>
         
             <Nav/>

            {/*pamitha */}
             <Route path="/group"  exact component={GroupDetails}></Route>
             <Route path="/register"  exact component={StudentGroupRegistration}></Route>
             <Route path="/Admin"  exact component={AdminNoticeAdd}></Route>
             <Route path="/mark/:id"  exact component={AdminMark}></Route>
             <Route path="/mark/:id"  exact component={AdminMarkView}></Route>
             <Route path="/markupdate/:id"  exact component={AdminMarkUpdate}></Route>
             <Route path="/admindocument"  exact component={AdminUserPDF}></Route>
             <Route path="/feedback"  exact component={FeedbackView}></Route>
             <Route path="/noticepdf"  exact component={AdminNoticePDF}></Route>
             <Route path="/viewnotice"  exact component={AdminNoticeView}></Route>
             <Route path="/paneladd/:id"  exact component={AddPanelMembers}></Route>
             <Route path="/viewPanel"  exact component={ViewPanelMembers}></Route>
             <Route path="/feedbackadd"  exact component={AdminFeedback}></Route>
    
         

            {/*Lankani */}






            {/*Ayeshi */}






            {/*Akeel */}
         
      

        
  
        

            <Footer/>
         </div>
      </BrowserRouter> 
     );
    }
 }

