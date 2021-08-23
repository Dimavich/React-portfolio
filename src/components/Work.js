import React, { Component } from "react";
import ReactDOM from "react-dom";
import ReactCardCarousel from "react-card-carousel";
import eventory from '../images/eventory.png'
import surf from '../images/surf-forecast.png'
import teamDash from '../images/team-dash.png'

class MyCarousel extends Component {
  static get CONTAINER_STYLE() {
    return {
      position: "relative",
      height: "100vh",
      width: "100%",
      display: "flex",
      flex: 1,
      justifyContent: "center",
      alignItems: "middle"
    };
  }

  static get CARD_STYLE() {
    return {
      height: "600px",
      width: "600px",
      paddingTop: "10px",
      textAlign: "center",
      background: "#3B3B3B",
      color: "#FFF",
      fontFamily: "sans-serif",
      fontSize: "12px",
      textTransform: "uppercase",
      borderRadius: "10px",
      boxSizing: "border-box"
    };
  }

  render() {
    return ( 
        <div className='title-container' id='work'>
            <h2 className="page-title"> Some of my <span className="red-text">Work</span></h2>
            <div className="work-container">
                <div style={MyCarousel.CONTAINER_STYLE}>
                    <ReactCardCarousel autoplay={true} autoplay_speed={5000}>
                    <div style={MyCarousel.CARD_STYLE}>
                        <div className="card-text">
                            <h3 className="card-title">Eventory</h3>
                                <div className="link-icons">
                                    <a href='https://my-eventory.herokuapp.com' className='visit-link icon-link'>
                                        <i className="far fa-window-maximize icon"></i>
                                        <p className="icontext">Visit</p>
                                    </a>
                                    <a href='https://github.com/Dimavich/Eventory' className='visit-link icon-link'>
                                        <i class="fab fa-github icon"></i>
                                        <p className="icontext">GitHub</p>
                                    </a>
                                </div>
                        </div>
                        <div className="card-image">
                            <img src={eventory} alt='screenshot of my work' />
                        </div>
                    </div>
                    <div style={MyCarousel.CARD_STYLE}>
                        <div className="card-text">
                            <h3 className="card-title">Surf Forecast</h3>
                                <div className="link-icons">
                                    <a href='https://dimavich.github.io/surf-forecast/' className='visit-link icon-link'>
                                        <i className="far fa-window-maximize icon"></i>
                                        <p className="icontext">Visit</p>
                                    </a>
                                    <a href='https://github.com/Dimavich/surf-forecast' className='visit-link icon-link'>
                                        <i class="fab fa-github icon"></i>
                                        <p className="icontext">GitHub</p>
                                    </a>
                                </div>
                        </div>
                        <div className="card-image">
                            <img src={surf} alt='screenshot of my work' />
                        </div>
                    </div>
                    <div style={MyCarousel.CARD_STYLE}>
                        <div className="card-text">
                            <h3 className="card-title">Team Dash</h3>
                                <div className="link-icons">
                                    <a href='https://github.com/Dimavich/Team-card-generator' className='visit-link icon-link'>
                                        <i class="fab fa-github icon"></i>
                                        <p className="icontext">GitHub</p>
                                    </a>
                                </div>
                        </div>
                        <div className="card-image">
                            <img src={teamDash} alt='screenshot of my work' />
                        </div>
                    </div>
                    </ReactCardCarousel>
                </div>
            </div>
        </div>
        
    );
  }
}

const rootElement = document.getElementById("root");
ReactDOM.render(<MyCarousel />, rootElement);


export default MyCarousel;
