import React, { Component } from 'react';
import { Button } from 'reactstrap';
import {
    Modal, ModalHeader, ModalBody, ModalFooter,
} from 'reactstrap';
import "../styles/pdf-displayer.css";
import {getPdf} from '../res/resources';
// import { Document } from 'react-pdf/dist/entry.webpack';
// import 'react-pdf/dist/Page/AnnotationLayer.css';


export default class PdfDisplayer extends Component {
    constructor(props){
        super(props);
        this.state = {
            file: './resume.pdf',
            numPages: null,
            pageNumber: 1,
        }
    }

    toggle = () => {
        this.setState ({
            pdfModal: !this.state.pdfmodal,
        });
        this.props.toggleModal();
    }

    onDocumentLoadSuccess = ({numPages}) => {
        // this.setState({
        //     numPages
        // });
    };

    renderBody = () => {
        return(
            <div className="pdf-wrapper">
                    <iframe className="pdf-view-body" src={getPdf()} title="Resume PDF" />
            </div>
        );
    }

    render() {
        // const {pageNumber, numPages} = this.state;
        var showModal = this.props.show;
        var toggleModalFunc = this.toggle;
        return (
            <div>
                <Modal isOpen={showModal} toggle={toggleModalFunc} centered={true} size={'xl'}>
                    <ModalHeader toggle={toggleModalFunc}>Resume</ModalHeader>
                    <ModalBody>
                        {this.renderBody()}
                    </ModalBody>
                    <ModalFooter>
                        <Button color="secondary" onClick={toggleModalFunc}>Close</Button>
                    </ModalFooter>
                </Modal>
        </div>
        );
    };
}