import React from 'react';
import {
    Modal, ModalHeader, ModalBody, ModalFooter,
} from 'reactstrap';
import "../styles/modal.css"
import {
    Button,
} from 'reactstrap';
// import PdfDisplayer from './pdf-displayer';


export default class ModalDisplay extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            modal: this.props.show,
            contents: this.props.contents,
            currentPage: this.props.currentPage,
        };
    }

    toggle = () => {
        this.setState ({
            modal: !this.state.modal,
        });
        this.props.toggleModal();
    }

    setPage = (funct) => {
        funct(this.state.currentPage);
    }

    renderBody = (page) => {
        page = page ? page : 0;
        var content = this.state.contents[page];
        return (
            <div>
                <div className="modal-description">
                    <h1><strong>Description</strong></h1>
                    <p className="modal-description-inner">{content.description? content.description : 'no description set' }</p>
                </div>
                <h1 style={{align: 'left'}}><strong>Screenshots</strong></h1>
                {content.screenshots.map((screen, idx) => {
                    return(
                        <img src={screen} key={idx} alt={content.alt} width="100%" />
                    );
                })}
            </div>
        );
    }

    render(){
        var page = this.props.currentPage;
        var content = this.state.contents[page];
        console.log(page);
        console.log(content);
        return (
            <div>
                {page >= '0' ? 
                    <Modal isOpen={this.props.show} toggle={this.toggle} centered={true} size={'lg'}>
                        <ModalHeader toggle={this.toggle}>{content.title}</ModalHeader>
                        <ModalBody>
                            {this.renderBody(page)}
                        </ModalBody>
                        <ModalFooter>
                            {/* <Button color="primary" onClick={this.toggle}>Do Something</Button>{' '} */}
                            <Button color="secondary" onClick={this.toggle}>Close</Button>
                        </ModalFooter>
                    </Modal>
                    : null
                }
            </div>
        );
    };
}