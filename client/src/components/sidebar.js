import React from "react";
import Link from 'react-router-dom/Link';

export default class Sidebar extends React.Component {
    render() {
        return (
            <nav id="sidebar-nav">
                <ul id="vertical-sidebar-nav" class="sf-menu">
                    <li class="normal-item-pro current-menu-item">
                        <Link to="/news">
                            <span class="icon-Old-TV"></span>
                        TV Series
                        </Link>
                    </li>
                    <li class="normal-item-pro">
                        <Link to="/movies">
                            <span class="icon-Reel"></span>
                        Movies
                        </Link>
                    </li>
                    <li class="normal-item-pro">
                        <Link to="dashboard-playlists.html">
                            <span class="icon-Movie"></span>
                        Playlists
                        </Link>
                    </li>
                    <li class="normal-item-pro">
                        <Link to="dashboard-new-arrivals.html">
                            <span class="icon-Movie-Ticket"></span>
                        New Arrivals
                        </Link>
                    </li>
                    <li class="normal-item-pro">
                        <Link to="dashboard-coming-soon.html">
                            <span class="icon-Clock"></span>
                        Coming Soon
                        </Link>
                    </li>
                </ul>
                <div class="clearfix"></div>
            </nav>
        )
    }
}