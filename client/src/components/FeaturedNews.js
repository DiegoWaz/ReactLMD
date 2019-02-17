import React from "react";
import Link from 'react-router-dom/Link';

export default class CategoryNews extends React.Component {
    render() {
        const imgBack = {
           backgroundImage: "url(https://psgimages.stadion.io/media/20498/29.jpg?anchor=center&mode=crop&width=2000&height=1333&quality=80)"
        }

        const imgBack2 = {
            backgroundImage: "url(https://psgimages.stadion.io/media/20507/38.jpg?anchor=center&mode=crop&width=2000&height=1333&quality=80)"
        }
        return (
            <div className="flexslider progression-studios-dashboard-slider">
              <ul className="slides">
                    <li className="progression_studios_animate_left">
                        <div className="progression-studios-slider-dashboard-image-background" style={imgBack}>
                            <div className="progression-studios-slider-display-table">
                                <div className="progression-studios-slider-vertical-align">
                                    <div className="container">
                                        <div className="progression-studios-slider-dashboard-caption-width">
                                            <div className="progression-studios-slider-caption-align">
                                                <h6>TV Series</h6>
                                                <ul className="progression-studios-slider-rating">
                                                    <li>PG-13</li><li>HD</li>
                                                </ul>
                                                <h2><Link to="dashboard-movie-profile.html">Seven Days in Ibiza</Link></h2>
                                                <p className="progression-studios-slider-description">A sex columnist, Carrie Bradshaw, and her three friends Samantha, Charlotte 
                                                and Miranda explore  Manhattan's dating scene, chronicling the mating habits of 
                                                single New Yorkers.</p>

                                                <div className="clearfix"></div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="progression-studios-slider-mobile-background-cover"></div>
                        </div>
                    </li>
                    <li className="progression_studios_animate_left">
                        <div className="progression-studios-slider-dashboard-image-background" style={imgBack2}>
                            <div className="progression-studios-slider-display-table">
                                <div className="progression-studios-slider-vertical-align">
                                    <div className="container">
                                        <div className="progression-studios-slider-dashboard-caption-width">
                                            <div className="progression-studios-slider-caption-align">
                                                <h6>TV Series</h6>
                                                <ul className="progression-studios-slider-rating">
                                                    <li>PG-13</li>
                                                    <li>HD</li>
                                                </ul>
                                                <h2><Link to="dashboard-movie-profile.html">Seven Days in Ibiza</Link></h2>
                                                <p className="progression-studios-slider-description">A sex columnist, Carrie Bradshaw, and her three friends Samantha, Charlotte 
                                                and Miranda explore  Manhattan's dating scene, chronicling the mating habits of 
                                                single New Yorkers.</p>
                                                <div className="clearfix"></div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="progression-studios-slider-mobile-background-cover"></div>
                        </div>
                    </li>
                </ul>
            </div>
        )
    }
}