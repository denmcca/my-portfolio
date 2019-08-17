import React from 'react';
// import playVideo from '../videos/movie.mp4';

export default class Displayer extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            imagePath: this.props.imagePath,
        }
        this.getAltTextFromImagePath = this.getAltTextFromImagePath.bind(this);
    }

    getAltTextFromImagePath() {
        var altTextArr = this.props.imagePath.split('/');
        var altText = altTextArr[altTextArr.length -1];
        return altText.split('.')[0];
        
    }

    render() {
        return (
            <div>
                <img id="display" src={this.props.imagePath} alt={this.getAltTextFromImagePath()} height='300vh' />
                {/* <video id='video' height={240} width={320} controls>
                    <source src={playVideo} type="video/mp4"/>
                </video> */}
            </div>
        );
    }
}