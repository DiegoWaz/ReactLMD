import React from "react";
import Link from 'react-router-dom/Link';

export default class HeaderNav extends React.Component {
    render() {
        return (
            <nav id="mobile-navigation-pro">
                <ul id="mobile-menu-pro">
                    <li>
                        <Link to="/news">
                            <span class="icon-Old-TV"></span>
                            TV Series
                        </Link>
                    </li>
                    <li>
                        <Link to="dashboard-movies.html">
                            <span class="icon-Reel"></span>
                            Movies
                        </Link>
                    </li>
                    <li>
                        <Link to="dashboard-playlists.html">
                                <span class="icon-Movie"></span>
                            Playlists
                        </Link>
                    </li>
                    <li>
                        <Link to="dashboard-new-arrivals.html">
                            <span class="icon-Movie-Ticket"></span>
                            New Arrivals
                        </Link>
                    </li>
                    <li>
                        <Link to="dashboard-coming-soon.html">
                                <span class="icon-Clock"></span>
                            Coming Soon
                        </Link>
                    </li>
                    <li>
                        <Link to="#!">
                            <i class="far fa-bell"></i>
                            <span class="user-notification-count">3</span>
                            Notifications
                        </Link>
                    </li>
                </ul>
                <div className="clearfix"></div>
                <div id="search-mobile-nav-pro">
                    <input type="text" placeholder="Search for Movies or TV Series" aria-label="Search" />
                </div>
            </nav>
        )
    }
}