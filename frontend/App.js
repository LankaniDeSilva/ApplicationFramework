import React, {Component} from "react";
//import "../bootstrap.min.css";
 import {BrowserRouter,Route } from "react-router-dom";
 import Landing from "./Component/Pamitha/Landingpage";
 import Main from "./Component/Pamitha/Main";
 import Home from "./Component/Pamitha/Home";
 import Logo from "./Component/Pamitha/home";
  import Register from "./Component/Pamitha/Register";
  import ALogin from "./Component/Pamitha/AdminLogin";
  
  import Nav from "./Component/Pamitha/AdminHeader";
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
  import SLogin from "./Component/Lankani/StudentLogin";
  import StudentAdd from "./Component/Lankani/StudentAdd";
  import StudentList from "./Component/Lankani/StudentList";
  import ViewStudents from "./Component/Lankani/ViewStudents";
  import StudentHome from "./Component/Lankani/StudentHome";
  import ResarchTopicAdd from "./Component/Lankani/ResearchTopicAdd";
  import StudentFileAdd from "./Component/Lankani/StudentFileAdd";
  import StudentPresentationSubmission from "./Component/Lankani/StudentPresentation";
  import StudentThesisSubmission from "./Component/Lankani/StudentThesisSubmission";
  import RequestSupervisor from "./Component/Lankani/RequestSupervisor";
  import RequestCoSupervisor from "./Component/Lankani/RequestCoSupervisor";
  import StudentUpdate from "./Component/Lankani/StudentUpdate";

  import StaffLogin from "./Component/Ayeshi/StaffLogin";
  import StudentHeader from "./Component/Lankani/StudentHeader";

  import PanelList from "./Component/Ayeshi/PanelList";
  import panelHome from "./Component/Ayeshi/PanelHome";
  import presentationEvaluate from "./Component/Ayeshi/PresentationEvaluate";
  import topicEvaluate from "./Component/Ayeshi/TopicEvaluate";
  import allTopicEval from "./Component/Ayeshi/AllTopicsEvaluate";
  import allPreMark from "./Component/Ayeshi/AllPresentationMarks";
  import StudentPreMark from "./Component/Ayeshi/StudentViewPresentation";
  import studentTopicEval from "./Component/Ayeshi/StudentViewTopic";

  


export default class App extends Component{
   render(){
    return (
      <BrowserRouter>
        <div>
            <Logo/>
         
            {/*pamitha */}
            <Route path="/document"  exact component={AdminSubmition}></Route>
            <Route path="/"  exact component={Main}></Route>
             <Route path="/"  exact component={Landing}></Route>
             <Route path="/home"  exact component={Home}></Route>
             <Route path="/rlogin"  exact component={Main}></Route>
             <Route path="/rlogin"  exact component={ALogin}></Route>
             <Route path="/reg"  exact component={Main}></Route>
             <Route path="/reg"  exact component={Register}></Route>
             <Route path="/group"  exact component={Nav}></Route>
             <Route path="/group"  exact component={GroupDetails}></Route>
             <Route path="/register"  exact component={StudentGroupRegistration}></Route>
             <Route path="/Admin"  exact component={Nav}></Route>
             <Route path="/Admin"  exact component={AdminNoticeAdd}></Route>
             <Route path="/mark/:id"  exact component={Nav}></Route>
             <Route path="/mark/:id"  exact component={AdminMark}></Route>
             <Route path="/mark/:id"  exact component={AdminMarkView}></Route>
             <Route path="/mark"  exact component={Nav}></Route>
             <Route path="/mark"  exact component={AdminMarkView}></Route>
             <Route path="/markupdate/:id"  exact component={Nav}></Route>
             <Route path="/markupdate/:id"  exact component={AdminMarkUpdate}></Route>
             <Route path="/admindocument"  exact component={Nav}></Route>
             <Route path="/admindocument"  exact component={AdminUserPDF}></Route>
             <Route path="/feedback"  exact component={Nav}></Route>
             <Route path="/feedback"  exact component={FeedbackView}></Route>
             <Route path="/noticepdf"  exact component={Nav}></Route>
             <Route path="/noticepdf"  exact component={AdminNoticePDF}></Route>
             <Route path="/viewnotice"  exact component={Nav}></Route>
             <Route path="/viewnotice"  exact component={AdminNoticeView}></Route>
             <Route path="/paneladd/:id"  exact component={Nav}></Route>
             <Route path="/paneladd/:id"  exact component={AddPanelMembers}></Route>
             <Route path="/viewpanel"  exact component={Nav}></Route>
             <Route path="/viewPanel"  exact component={ViewPanelMembers}></Route>
             <Route path="/feedbackadd"  exact component={Main}></Route>
             <Route path="/feedbackadd"  exact component={AdminFeedback}></Route>
             <Route path="/studentsubmit"  exact component={Nav}></Route>
             <Route path="/studentsubmit"  exact component={AdminSubmition}></Route>
             <Route path="/studentnotice"  exact component={Nav}></Route>
             <Route path="/studentnotice"  exact component={UserNoticeView}></Route>
    
         

             




            {/*Lankani */}
            <Route path="/slogin"  exact component={SLogin}></Route>
            <Route path="/Student" exact component={StudentAdd}></Route>      
            <Route path="/studentupdate/:id" exact component={StudentUpdate}></Route>     
            <Route path="/viewstudent" exact component={ViewStudents}></Route>
            <Route path="/studenthome" exact component={StudentHeader}></Route>
            <Route path="/mainstudenthome" exact component={StudentHome}></Route>
            <Route path="/researchtopic" exact component={ResarchTopicAdd}></Route>
            <Route path="/studentsub" exact component={StudentFileAdd}></Route>
            <Route path="/studentpresentation" exact component={StudentPresentationSubmission}></Route>
            <Route path="/thesis" exact component={StudentThesisSubmission}></Route>
            <Route path="/requestsupervisor" exact component={RequestSupervisor}></Route>
            <Route path="/requestcosupervisor" exact component={RequestCoSupervisor}></Route>
            

            


            {/*Ayeshi */}
            <Route path="/stafflogin"  exact component={StaffLogin}></Route>
            <Route path="/panelHome" exact component={panelHome}></Route>
            <Route path="/presentationEvaluate" exact component={presentationEvaluate}></Route>
            <Route path="/topicEvaluate" exact component={topicEvaluate}></Route>
            <Route path="/AllTopicEval" exact component={allTopicEval}></Route>
            <Route path="/allPreMark" exact component={allPreMark}></Route>
            <Route path="/StudentPreMark" exact component={StudentPreMark}></Route>
            <Route path="/studentTopicEval" exact component={studentTopicEval}></Route>




            {/*Akeel */}
         
      

        
  
        

          <Footer/>
         </div>
      </BrowserRouter> 
     );
    }
 }

