import React from 'react';
import {
    Modal, ModalHeader, ModalBody, ModalFooter,
} from 'reactstrap';
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
        return (
            <div>
                <h1><strong>Screenshots</strong></h1>
                {this.props.contents[page].screenshots.map((screen, idx) => {
                    return(
                        <img src={screen} key={idx} alt={this.props.contents[page].alt} width="100%" />
                    );
                })}
            </div>
        );
    }

    render(){
        var contents = this.props.contents;
        return (
            <div>
                {this.props.currentPage >= '0' ? 
                    <Modal isOpen={this.props.show} toggle={this.toggle} centered={true} size={'lg'}>
                        <ModalHeader toggle={this.toggle}>{contents[this.props.currentPage].title}</ModalHeader>
                        <ModalBody>
                            {this.renderBody(this.props.currentPage)}
                        </ModalBody>
                        <ModalFooter>
                            <Button color="primary" onClick={this.toggle}>Do Something</Button>{' '}
                            <Button color="secondary" onClick={this.toggle}>Cancel</Button>
                        </ModalFooter>
                    </Modal>
                    : null
                }
            </div>
        );
    };
}