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

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      sliderContents: getSliderContents(),
      modalContents: getModalContents(),
      navbarContents: getNavBarResumeFilesContent(),
      currentPage: 0,
      activePage: 0,
      socialLinks: getSocialLinks(),
      showModal: false,
    }
  }
  
  changeActiveSliderPage = (pageNum) => {
    this.setState = {
        activePage: pageNum,
    }
  }

  toggleModal = (page) => {
    this.setState ({
        showModal: !this.state.showModal,
        currentPage: page,
    });
  }

  render() {
    try {
        return (
            <div className="main">
                <header className="app-header">
                    <Navigator contents={this.state.navbarContents} />
                </header>
                <div className="app-body">
                    <Container>
                        <Row className="row-main">
                            <Col>
                                <SliderDisplayer content={this.state.sliderContents} 
                                                currentPage={this.state.activePage} 
                                                toggle={this.toggleModal} 
                                />
                                <ModalDisplay show={this.state.showModal} 
                                              toggleModal={this.toggleModal} 
                                              contents={this.state.modalContents} 
                                              currentPage={this.state.currentPage} 
                                />
                            </Col>
                        </Row>
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