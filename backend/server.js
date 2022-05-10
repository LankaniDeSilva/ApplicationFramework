const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');
const multer = require('multer');


const app = express();

//import route
const NoticeRoutes = require('./Routes/AdminNotice');
const PDFRoutes = require('./Routes/AdminPDF');
const MarksRoutes = require('./Routes/AdminMark');
const FeedbackRoutes = require('./Routes/AdminFeedback');
const StudentRoute = require('./Routes/StudentRoute');
const ResearchTopic = require('./Routes/ResearchTopicRouter');
const StudentFileSubmission = require("./Routes/StudentFileSubmission");
const StudentPresentationSubmission = require("./Routes/StudentPresentationRoutes");
const StudentThesisSubmission = require("./Routes/StudentThesisSubmission");


//app middleware
app.use(bodyParser.json());
app.use(cors());
//app.use(multer());

app.use(NoticeRoutes);
app.use(PDFRoutes);
app.use(MarksRoutes);
app.use(FeedbackRoutes);
app.use(StudentRoute);
app.use(ResearchTopic);
app.use(StudentFileSubmission);
app.use(StudentPresentationSubmission);
app.use(StudentThesisSubmission);

const PORT = 8001;
const DB_URL = 'mongodb+srv://pamitha:pamitha@database1.gqpga.mongodb.net/AFPROJECT?retryWrites=true&w=majority';

mongoose.connect(DB_URL)
.then(() =>{
    console.log('DB connected');
}).catch((err) => console.log('DB connection error', err));

app.listen(PORT, () =>{
    console.log(`App is running on ${PORT}`);
});

