import React from "react";
import Link from 'react-router-dom/Link';

export default class ListNews extends React.Component {
    render() {

    const noteBad = {
		color: "#42b740"
	}

    const noteGood = {
        color: "#ff4141"
    }

    const image = "http://preprod.lemeilleurdupsg.com/ckfinder/userfiles/files/newdefault.jpg";

        return (
			<div class="dashboard-container">
                <h4 class="heading-extra-margin-bottom">Comedies</h4>
                <div class="row">
                    <div class="col-12 col-md-6 col-lg-4 col-xl-4">
                        <div class="item-listing-container-skrn">
                            <Link to="dashboard-movie-profile.html"><img src={image} alt="Listing" /></Link>
                            <div class="item-listing-text-skrn">
                                <div class="item-listing-text-skrn-vertical-align"><h6><Link to="dashboard-movie-profile.html">The Imitation Game</Link></h6>
                                  
                                </div>
                            </div>
                        </div>
                    </div>
                    
                    
                    <div class="col-12 col-md-6 col-lg-4 col-xl-4">
                        <div class="item-listing-container-skrn">
                            <Link to="dashboard-movie-profile.html"><img src={image} alt="Listing" /></Link>
                            <div class="item-listing-text-skrn">
                                <div class="item-listing-text-skrn-vertical-align"><h6><Link to="dashboard-movie-profile.html">Fantastic Beasts</Link></h6>
                                </div>
                            </div>
                        </div>
                    </div>
                    
                    <div class="col-12 col-md-6 col-lg-4 col-xl-4">
                        <div class="item-listing-container-skrn">
                            <Link to="dashboard-movie-profile.html"><img src={image} alt="Listing" /></Link>
                            <div class="item-listing-text-skrn">
                                <div class="item-listing-text-skrn-vertical-align"><h6><Link to="dashboard-movie-profile.html">Edge of Tomorrow</Link></h6>
                                  
                                </div>
                            </div>
                        </div>
                    </div>
                    
                    <div class="col-12 col-md-6 col-lg-4 col-xl-4">
                        <div class="item-listing-container-skrn">
                            <Link to="dashboard-movie-profile.html"><img src={image} alt="Listing" /></Link>
                            <div class="item-listing-text-skrn">
                                <div class="item-listing-text-skrn-vertical-align"><h6><Link to="dashboard-movie-profile.html">Allegiant</Link></h6>
                                  
                                </div>
                            </div>
                        </div>
                    </div>
                    
                    <div class="col-12 col-md-6 col-lg-4 col-xl-4">
                        <div class="item-listing-container-skrn">
                            <Link to="dashboard-movie-profile.html"><img src={image} alt="Listing" /></Link>
                            <div class="item-listing-text-skrn">
                                <div class="item-listing-text-skrn-vertical-align"><h6><Link to="dashboard-movie-profile.html">Lo and Behold</Link></h6>
                                </div>
                            </div>
                            <div class="item-listing-text-skrn">test</div>
                        </div>
                    </div>
                    
                    <div class="col-12 col-md-6 col-lg-4 col-xl-4">
                        <div class="item-listing-container-skrn">
                            <Link to="dashboard-movie-profile.html"><img src={image} alt="Listing" /></Link>
                            <div class="item-listing-text-skrn">
                                <div class="item-listing-text-skrn-vertical-align">
                                    <h6><Link to="dashboard-movie-profile.html">Drive</Link></h6>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <ul class="page-numbers">
                    <li><Link class="previous page-numbers" to="#!"><i class="fas fa-chevron-left"></i></Link></li>
                    <li><span class="page-numbers current">1</span></li>
                    <li><Link class="page-numbers" to="#!">2</Link></li>
                    <li><Link class="page-numbers" to="#!">3</Link></li>
                    <li><Link class="page-numbers" to="#!">4</Link></li>
                    <li><Link class="next page-numbers" to="#!"><i class="fas fa-chevron-right"></i></Link></li>
                </ul>   
            </div>
        )
    }
}