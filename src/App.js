import React, { Component } from 'react';
import Navigator from './components/navbar';
import {    
  Container,
  Row,
  Col,
} from 'reactstrap';
import './styles/app.css';
import './res/resources';
import SliderDisplayer from './components/slider';
import ModalDisplay from './components/modal';
import Footer from './components/footer';
import { getSocialLinks, getNavBarResumeFilesContent, 
    getSliderContents, getModalContents } from './res/resources';
import PdfDisplayer from './components/pdf-displayer';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      sliderContents: getSliderContents(),
      modalContents: getModalContents(),
      navbarContents: getNavBarResumeFilesContent(),
      activePage: 0,
      socialLinks: getSocialLinks(),
      // showModal: false,
      // showPdfModal: false,
    }
  }

  componentDidMount() {
    // this.tickID = setInterval(this.tick, 1000);
  }

  componentWillUnmount() {
    // clearInterval(this.tickID);
  }

  tick = () => {
    // var number = this.state.number + 1;
    // this.setState({
    //   number: number,
    // })
  }

  toggleModal = (page) => {
    this.setState ({
        showModal: !this.state.showModal,
        activePage: page,
    });
  }

  togglePdfModal = () => {
    this.setState ({
        showPdfModal: !this.state.showPdfModal,
    });
  }

  render() {
    try {
        return (
            <div className="main">
                <div className="app-header">
                    <Navigator contents={this.state.navbarContents} togglePdfModal={this.togglePdfModal} />
                </div>
                <div className="app-body">
                    <Container>
                        <Row className="row-main">
                            <Col>
                                <SliderDisplayer content={this.state.sliderContents} 
                                                activePage={this.state.activePage}
                                                toggleModal={this.toggleModal}
                                />
                                <ModalDisplay show={this.state.showModal} 
                                              toggleModal={this.toggleModal} 
                                              contents={this.state.modalContents} 
                                              currentPage={this.state.activePage} 
                                />
                                <PdfDisplayer show={this.state.showPdfModal}
                                              toggleModal={this.togglePdfModal}
                                />
                            </Col>
                        </Row>
                        {/* <Row>
                        </Row> */}
                    </Container>
                </div>  
                <div className='app-footer'>
                    <Footer socialLinks={this.state.socialLinks} />
                </div>
            </div>
        );
    }
    catch(e) {
        alert(e);
    }
  }
}