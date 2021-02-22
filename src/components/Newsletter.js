import React, {useState} from "react";
import { Document, Page } from 'react-pdf';
import PDFViewer from "pdf-viewer-reactjs"
import Viewer, { Worker } from '@phuocng/react-pdf-viewer';
 
import '@phuocng/react-pdf-viewer/cjs/react-pdf-viewer.css';





const Newsletter = () => {

    



        
  

    return (
        <div className="shop">
            <div className="ui container">
                <h2 className="section-header">Newsletter</h2>
                <div>
                <Worker workerUrl="https://unpkg.com/pdfjs-dist@2.6.347/build/pdf.worker.min.js">
                    <div style={{height: "1050px" }}>
                        <Viewer fileUrl={`${process.env.PUBLIC_URL}/newsletters/newsletter.pdf`} />
                    </div>
                </Worker>
                </div>
            </div>
        </div>
    );
};

export default Newsletter;
