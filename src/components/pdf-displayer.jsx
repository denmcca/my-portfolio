import React, { Component } from 'react';
import { Page } from 'react-pdf';
import { Document } from 'react-pdf/dist/entry.webpack';
import 'react-pdf/dist/Page/AnnotationLayer.css';


export default class PdfDisplayer extends Component {
    constructor(props){
        super(props);
        this.state = {
            file: './resume.pdf',
            numPages: null,
            pageNumber: 1,
        }
    }

    onDocumentLoadSuccess = ({numPages}) => {
        this.setState({
            numPages
        });
    };

    render() {
        const {pageNumber, numPages} = this.state;
        return (
            <div>
                {pageNumber + " test"}
                {numPages}
                <Document file={this.state.file} onLoadSuccess={this.onDocumentLoadSuccess}>
                    <Page pageNumber={pageNumber} />
                </Document>
                <p>Page {pageNumber} of {numPages}</p>
            </div>
        );
    };
}