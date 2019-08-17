import React, { Component } from 'react';
import Navigator from './components/navbar';
import {    
  Container,
  Row,
  Col,
} from 'reactstrap';
import './styles/app.css';
import SliderDisplayer from './components/slider';
import xEngine from './images/xEngine.png';
import passwordManager from './images/passwordManager.png';
import darts from './images/darts-med.jpg';
import linkedinIcon from "./images/icon-linkedin.png";
import githubIcon from "./images/icon-github.png";
import ModalDisplay from './components/modal';
import xengine1 from './images/xEngine1.png';
import xengine2 from './images/xEngine2.png';
import xengine3 from './images/xEngine3.png';
import passwordmanager1 from './images/passwordManager1.png';
import passwordmanager2 from './images/passwordManager2.png';
import passwordmanager3 from './images/passwordManager3.png';
import passwordmanager4 from './images/passwordManager4.png';
import passwordmanager5 from './images/passwordManager5.png';
import passwordmanager6 from './images/passwordManager6.png';
import darts1 from './images/darts1.jpg';
import darts2 from './images/darts2.jpg';
import Footer from './components/Footer';
import pdf from './documents/resume.pdf';
import docx from './documents/resume.docx';

export default class App extends Component {
  constructor(props) {
    super(props);
    var files = [{file: pdf, name: 'pdf'}, {file: docx, name: 'docx'}];
    var navbarContents = [
        {title: 'resume', files: files},
        // {title: 'google', link: 'https://www.google.com'},
    ];
    var bgs = [xEngine, passwordManager, darts];
    var screenshots = [
        [xengine1, 
            xengine2, 
            xengine3
        ],
        [passwordmanager1, 
            passwordmanager2, 
            passwordmanager3,
            passwordmanager4,
            passwordmanager5,
            passwordmanager6,
        ],
        [darts1, darts2],
    ];
    var alts = ['X-Engine', 'PasswordKeeper', 'Darts Game'];
    var components = ['xengineComponent.jsx', 'pwkeeperComponent.jsx', 'dartsComponent.jsx'];
    var projectLinks = [
        'https://github.com/Michaelwolf95/XEngine', 
        'https://github.com/denmcca/PasswordKeeper', 
        'https://github.com/denmcca/DartsAndBanking'];

    var sliderContents = []; // put in database
    bgs.forEach((bg, idx) => {
        sliderContents.push({
            bg: bg,
            alt: alts[idx],
            component: components[idx],
            url: projectLinks[idx],
        });
    });

    var modalContents = []; // put in database
    alts.forEach((title, idx) => {
        modalContents.push({
            title: title,
            screenshots: screenshots[idx],
            index: idx,
        });
    });

    var icons = [linkedinIcon, githubIcon]; // put in database
    var links = ["https://www.linkedin.com/in/denmcca", "https://www.github.com/denmcca"];
    var socialLinks = [];
    icons.forEach((_icon, idx) => {
        socialLinks.push({
            url: links[idx],
            icon: _icon
        });
    });
    
    this.state = {
      sliderContents: sliderContents,
      modalContents: modalContents,
      navbarContents: navbarContents,
      currentPage: 0,
      activePage: 0,
      socialLinks: socialLinks,
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

  initializeFirebase = () => {
    return (
        <div>
            <script src="/__/firebase/6.3.5/firebase-app.js"></script>
            <script src="/__/firebase/init.js"></script>
            {console.log('firebase initialized')}
        </div>
    )
  }

  render() {
    try {
        return (
            <div className="main">
                <header className="app-header">
                    <Navigator contents={this.state.navbarContents} />
                </header>
                {this.initializeFirebase()}
                <div className="app-body">
                    <Container>
                        <Row className="row-main">
                            {/* <Col xs="1"></Col> */}
                            <Col>
                                <SliderDisplayer content={this.state.sliderContents} currentPage={this.state.activePage} toggle={this.toggleModal} />
                                <ModalDisplay show={this.state.showModal} toggleModal={this.toggleModal} contents={this.state.modalContents} currentPage={this.state.currentPage} />
                            </Col>
                            {/* <Col xs='1'></Col> */}
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