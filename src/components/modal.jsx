import React from 'react';
import {
    Modal, ModalHeader, ModalBody, ModalFooter,
} from 'reactstrap';
import "../styles/modal.css";
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
            showImageModal: false,
            currentImage: null,
        };
    }

    toggleImageModal = (index) => {
        this.setState ({
            showImageModal: !this.state.showImageModal,
            currentImage: index,
        })
    }
    
    closeImageModal = (key) => {
        if (key.which === 27 && this.state.showImageModal) // 27 == Esc key
            this.setState ({
                showImageModal: false,
            })
    }

    componentDidMount() {
        document.addEventListener("keydown", this.closeImageModal, false);
    }

    componentWillUnmount() {
        document.removeEventListener("keydown", this.closeImageModal, false);
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
            <div className="modal-description">
                <div className="modal-description-title">
                    <h1><strong>Description</strong></h1>
                    <div className="modal-description-body">
                        {content.description? content.description : 'no description set' }
                    </div>
                </div>
                <div className="modal-description-title">
                    <h1 style={{align: 'center'}}>
                        <strong>Screenshots</strong>
                    </h1>
                    {content.screenshots.map((screen, idx) => {
                        return(
                            <img src={screen} onClick={() => this.toggleImageModal(idx)} className="img-modal" key={idx} alt={content.alt} width="100%" />
                            );
                        })}
                </div>
            </div>
        );
    }

    render(){
        var page = this.props.currentPage;
        var content = this.state.contents[page];
        var currentImage = this.state.currentImage;
        return (
            <div>
                {page >= '0' ? 
                    <Modal isOpen={this.props.show} toggle={this.toggle} centered={true} size={'lg'}>
                        <ModalHeader toggle={this.toggle}>{content.title}</ModalHeader>
                        <ModalBody>
                            {this.renderBody(page)}
                        </ModalBody>
                        <ModalFooter>
                            <Button color="secondary" onClick={this.toggle}>Close</Button>
                        </ModalFooter>
                        <Modal isOpen={this.state.showImageModal} size={"xl"} onKeyPress={this.closeImageModal}>
                            <img src={content.screenshots[currentImage]} width={"100%"} 
                                onClick={this.toggleImageModal} key={page + currentImage}
                                alt={content.title} />
                            <p style={{backgroundColor:'lightslategray'}}>Click image to close</p>
                        </Modal>
                    </Modal>
                        : null
                }
            </div>
        );
    };
}