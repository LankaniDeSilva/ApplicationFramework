import React from 'react';
import jsPDF from "jspdf";

class studentmark extends React.Component{

    constructor(props){
        super(props);
        this.state = {}
    };

    generatePDF = ()=> {
     var doc = new jsPDF("p", "pt", "a4");
     doc.html(document.querySelector("#content"), {
         callback: function(pdf){
             pdf.save("Marks.pdf");
         }
     });
    };

    render(){
        return(
            <center>
            <div>
                <div id="content">
           
                 <h1>Welcome React</h1>
                 <h1>pamitha malshan</h1>
            
             </div>
           
             <button onclick={this.generatePDF} type="primary" className="btn btn-primary">Generate</button>
           
            </div>
            </center>
        )
    }
}

export default studentmark;