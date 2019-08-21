import React from 'react';
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
                    {this.displaySocialLinks()}
                </div>
            </div>
        )
    }
}