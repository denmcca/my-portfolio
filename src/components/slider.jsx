import React from 'react';
import Slider from 'react-animated-slider';
import 'react-animated-slider/build/horizontal.css';
import '../styles/slider-animation.css'
import '../styles/slider.css';
 
export default class SlideDisplayer extends React.Component {
    constructor(props) {
        super(props);

        var contents = [];
        this.props.content.forEach(function(proj) {
            contents.push({
                title: proj.alt,
                description: proj.description,
                button: 'Learn More',
                image: proj.bg,
                user: "me",
                userProfile: "https://avatars2.githubusercontent.com/u/8552132?s=460&v=4",
                url: proj.url,
            })
        });

        this.state = {
            content: contents,
            activePage: this.props.activePage,
        }
    }

    render() {
        var activePage = this.state.activePage, content = this.state.content;
        return (
            <div className="slider-body">
                <Slider slideIndex={activePage} className="slider-wrapper">
                    {content.map((item, index) => (
                        <div
                            key={index}
                            className="slider-content"
                            style={{ background: `url('${item.image}') no-repeat center center` }}
                        >
                            <div className="inner">
                                <h1>{item.title}</h1>
                                <p>{item.description.substring(0, 50) + "..."}</p>
                                <button onClick={() => 
                                    this.props.toggleModal(index)}>
                                    {item.button}
                                </button>
                            </div>
                            <section>
                                <a href={item.url} rel="noopener noreferrer" target="_blank">
                                    <img src={item.userProfile} alt={item.user} />
                                    <span>
                                        Repository
                                    </span>
                                </a>
                            </section>
                        </div>
                    ))}
                </Slider>
            </div>
        );
    }
}