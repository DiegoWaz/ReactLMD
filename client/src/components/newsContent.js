import React from "react";
import Link from 'react-router-dom/Link';

export default class NewsContent extends React.Component {

    render() {
        const noteBad = {
            color: "#42b740"
        }
    
        const noteGood = {
            color: "#ff4141"
        }
        return (
            <main id="col-main-with-sidebar">
            
            <div id="movie-detail-rating">
                <div className="dashboard-container">
                    <div className="row">
                        <div className="col-sm">
                            <h5>Rate True Blood</h5>
                            <div className="rating-pro">
                              <label>
                                <input type="radio" name="rating-pro" value="5" title="5 stars" /> 5
                              </label>
                              <label>
                                <input type="radio" name="rating-pro" value="4" title="4 stars" /> 4
                              </label>
                              <label>
                                <input type="radio" name="rating-pro" value="3" title="3 stars" /> 3
                              </label>
                              <label>
                                <input type="radio" name="rating-pro" value="2" title="2 stars" /> 2
                              </label>
                              <label>
                                <input type="radio" name="rating-pro" value="1" title="1 star" /> 1
                              </label>
                            </div>
                            
                        </div>
                        <div className="col-sm">
                            <h6>User Rating</h6>
                          <div
                            className="circle-rating-pro"
                            data-value="0.86"
                            data-animation-start-value="0.86"
                            data-size="40"
                            data-thickness="3"
                            data-fill="{
                              &quot;color&quot;: &quot;#42b740&quot;
                            }"
                            data-empty-fill="#def6de"
                            data-reverse="true"
                          ><span>8.6</span></div>
                            <div className="clearfix"></div>
                        </div>
                    </div>
                </div>
            </div>
            
            <div className="dashboard-container">
                <div className="movie-details-section">
                    <h2>Storyline</h2>
                    <p>Mae Holland (Emma Watson) seizes the opportunity of a lifetime when she lands a job with the world's most powerful technology and social media company. Encouraged by the company's founder (Tom Hanks), Mae joins a groundbreaking experiment that pushes the boundaries of privacy, ethics and personal freedom. Her participation in the experiment, and every decision she makes soon starts to affect the lives and futures of her friends, family and that of humanity.</p>
                </div>

                <div className="movie-details-section">
                    <h2>The Cast</h2>
                    <div className="row">
                        <div className="col-12 col-md-6 col-lg-6 col-xl-4">
                            <div className="item-listing-container-skrn">
                                <Link to="#!"><img src="http://via.placeholder.com/507x672" alt="Cast" /></Link>
                                <div className="item-listing-text-skrn item-listing-movie-casting">
                                    <h6><Link to="#!">Robert Downey Jr.</Link></h6>
                                    <div className="movie-casting-sub-title">Tony Stark</div>
                                </div>
                            </div>
                        </div>
                        
                        <div className="col-12 col-md-6 col-lg-6 col-xl-4">
                            <div className="item-listing-container-skrn">
                                <Link to="#!"><img src="http://via.placeholder.com/507x672" alt="Cast" /></Link>
                                <div className="item-listing-text-skrn item-listing-movie-casting">
                                    <h6><Link to="#!">Robert Downey Jr.</Link></h6>
                                    <div className="movie-casting-sub-title">Tony Stark</div>
                                </div>
                            </div>
                        </div>

                        <div className="col-12 col-md-6 col-lg-6 col-xl-4">
                            <div className="item-listing-container-skrn">
                                <Link to="#!"><img src="http://via.placeholder.com/507x672" alt="Cast" /></Link>
                                <div className="item-listing-text-skrn item-listing-movie-casting">
                                    <h6><Link to="#!">Robert Downey Jr.</Link></h6>
                                    <div className="movie-casting-sub-title">Tony Stark</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                    
                <div className="movie-details-section">
                    <h2>Similar Movies</h2>
                    <div className="row">
                        <div className="col-12 col-md-6 col-lg-6 col-xl-4">
                            <div className="item-listing-container-skrn">
                                <Link to="dashboard-movie-profile.html"><img src="http://via.placeholder.com/500x707" alt="Listing" /></Link>
                                <div className="item-listing-text-skrn">
                                    <div className="item-listing-text-skrn-vertical-align"><h6><Link to="dashboard-movie-profile.html">Star Wars: Rogue One</Link></h6>
                                      <div
                                        className="circle-rating-pro"
                                        data-value="0.86"
                                        data-animation-start-value="0.86"
                                        data-size="32"
                                        data-thickness="3"
                                        data-fill="{
                                          &quot;color&quot;: &quot;#42b740&quot;
                                        }"
                                        data-empty-fill="#def6de"
                                        data-reverse="true"
                                      ><span>8.6</span></div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="col-12 col-md-6 col-lg-6 col-xl-4">
                            <div className="item-listing-container-skrn">
                                <Link to="dashboard-movie-profile.html"><img src="http://via.placeholder.com/500x707" alt="Listing" /></Link>
                                <div className="item-listing-text-skrn">
                                    <div className="item-listing-text-skrn-vertical-align"><h6><Link to="dashboard-movie-profile.html">Star Wars: Rogue One</Link></h6>
                                      <div
                                        className="circle-rating-pro"
                                        data-value="0.86"
                                        data-animation-start-value="0.86"
                                        data-size="32"
                                        data-thickness="3"
                                        data-fill="{
                                          &quot;color&quot;: &quot;#42b740&quot;
                                        }"
                                        data-empty-fill="#def6de"
                                        data-reverse="true"
                                      ><span>8.6</span></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-12 col-md-6 col-lg-6 col-xl-4">
                            <div className="item-listing-container-skrn">
                                <Link to="dashboard-movie-profile.html"><img src="http://via.placeholder.com/500x707" alt="Listing" /></Link>
                                <div className="item-listing-text-skrn">
                                    <div className="item-listing-text-skrn-vertical-align"><h6><Link to="dashboard-movie-profile.html">Star Wars: Rogue One</Link></h6>
                                      <div
                                        className="circle-rating-pro"
                                        data-value="0.86"
                                        data-animation-start-value="0.86"
                                        data-size="32"
                                        data-thickness="3"
                                        data-fill="{
                                          &quot;color&quot;: &quot;#42b740&quot;
                                        }"
                                        data-empty-fill="#def6de"
                                        data-reverse="true"
                                      ><span>8.6</span></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </main>
        )
    }
}