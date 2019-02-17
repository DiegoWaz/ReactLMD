import React from "react";
import Link from 'react-router-dom/Link';
import ListNews from "../components/listNews";
import CategoryNews from "../components/Category";
import FeaturedNews from "../components/FeaturedNews";

export default class HomeContainer extends React.Component {
    render() {
        return (
            <main id="col-main">
                <FeaturedNews />
                <CategoryNews />
                <ListNews />
            </main>
        );
    }
}