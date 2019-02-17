import React from "react";
import Link from 'react-router-dom/Link';

export default class ProfileContent extends React.Component {

    render() {
        const noteBad = {
            color: "#42b740"
        }
    
        const noteGood = {
            color: "#ff4141"
        }
        
        const imgBack = {
           backgroundImage: "url(http://via.placeholder.com/1920x698)"
        }
        return (
            <main id="col-main-with-sidebar">
			
			<div className="dashboard-container">
                
                <ul className="dashboard-sub-menu">
                    <li className="current"><Link to="#!">Articles</Link></li>
                    <li><Link to="#!">Commentaires</Link></li>
                    <li><Link to="#!">Carrière</Link></li>
                    <li><Link to="#!">Palmarès</Link></li>
                    <li><Link to="#!">Vidéos</Link></li>
                </ul>
                
                
                <div className="row">
                    <div className="col-12 col-md-6 col-lg-6 col-xl-4">
                        <div className="item-listing-container-skrn">
                            <Link to="dashboard-movie-profile.html"><img src="http://via.placeholder.com/500x707" alt="Listing" /></Link>
                            <div className="item-listing-text-skrn">
                                <div className="item-listing-text-skrn-vertical-align"><h6><Link to="dashboard-movie-profile.html">Allegiant</Link></h6>
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
                                  ><span style={noteBad}>8.6</span></div>
                                </div>
                            </div>
                        </div>
                    </div>  

                    <div className="col-12 col-md-6 col-lg-6 col-xl-4">
                        <div className="item-listing-container-skrn">
                            <Link to="dashboard-movie-profile.html"><img src="http://via.placeholder.com/500x707" alt="Listing" /></Link>
                            <div className="item-listing-text-skrn">
                                <div className="item-listing-text-skrn-vertical-align"><h6><Link to="dashboard-movie-profile.html">Allegiant</Link></h6>
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
                                  ><span style={noteBad}>8.6</span></div>
                                </div>
                            </div>
                        </div>
                    </div>  
                    
                    <div className="col-12 col-md-6 col-lg-6 col-xl-4">
                        <div className="item-listing-container-skrn">
                            <Link to="dashboard-movie-profile.html">
                                <img src="http://via.placeholder.com/500x707" alt="Listing" />
                            </Link>
                            <div className="item-listing-text-skrn">
                                <div className="item-listing-text-skrn-vertical-align"><h6><Link to="dashboard-movie-profile.html">Allegiant</Link></h6>
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
                                  ><span style={noteBad}>8.6</span></div>
                                </div>
                            </div>
                        </div>
                    </div>      
                </div>

				<ul className="page-numbers">
                    <li><Link className="previous page-numbers" to="#!"><i className="fas fa-chevron-left"></i></Link></li>
                    <li><span className="page-numbers current">1</span></li>
                    <li><Link className="page-numbers" to="#!">2</Link></li>
                    <li><Link className="page-numbers" to="#!">3</Link></li>
                    <li><Link className="page-numbers" to="#!">4</Link></li>
                    <li><Link className="next page-numbers" to="#!"><i className="fas fa-chevron-right"></i></Link></li>
                </ul>
			</div>
		</main>
        )
    }
}