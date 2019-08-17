import React from 'react';
import {Button} from 'reactstrap';
import '../styles/footer.css'

export default class Footer extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            socialLinks: this.props.socialLinks,
        }
    }

    displaySocialLinks = () => {
        return (
            this.state.socialLinks.map((link, idx) => {
                return (
                    <a key={idx} href={link.url} target="_blank" rel="noopener noreferrer">
                        <img
                            className="social-link-images" 
                            src={link.icon}
                            alt={"Image for " + link.url} 
                        />
                    </a>
                );
            })
        );
    }

    render() {
        return (
            <div className="footer-app">
                <div className="footer-contents">
                    <div>
                        {this.displaySocialLinks()}
                        <br></br>
                        <Button
                            tag="a"
                            color="success"
                            size="large"
                            href="http://reactstrap.github.io"
                            target="_blank"
                        >
                            Reactstrap
                        </Button>
                    </div>
                </div>
            </div>
        )
    }
}