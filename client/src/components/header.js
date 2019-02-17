import React from "react";
import Link from 'react-router-dom/Link';
import Search from "./search";
import HeaderProfile from "./header-profile";
import HeaderNotifcation from "./header-notification";
import HeaderNav from "./header-nav";
import logo from '../logo.svg';

export default class Header extends React.Component {

    render() {
        const style = {
            maxHeight: 50
        }

        return (
            <header id="videohead-pro" className="sticky-header">
                <div id="video-logo-background">
                    <Link to="/">
                        <img src={logo} alt="Logo" style={style} />
                    </Link>
                </div>
                <Search />
                <HeaderProfile />
                <HeaderNotifcation />
                <div class="clearfix"></div>
                <HeaderNav />
            </header>
        )
    }
}