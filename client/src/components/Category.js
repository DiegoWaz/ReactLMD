import React from "react";
import Link from 'react-router-dom/Link';

export default class CategoryNews extends React.Component {
    render() {
        return (
            <>
                <ul class="dashboard-genres-pro">
                <li>
                    <img src="images/genres/drama.png" alt="Drama" />
                    <h6>Drama</h6>
                </li>
                <li class="active">
                    <img src="images/genres/comedy.png" alt="Comedy" />
                    <h6>Comedy</h6>
                </li>
                <li>
                    <img src="images/genres/Linkction.png" alt="Action" />
                    <h6>Action</h6>
                </li>
                <li>
                    <img src="images/genres/romance.png" alt="Romance" />
                    <h6>Romance</h6>
                </li>
                <li>
                    <img src="images/genres/horror.png" alt="Horror" />
                    <h6>Horror</h6>
                </li>
                <li>
                    <img src="images/genres/fantasy.png" alt="Fantasy" />
                    <h6>Fantasy</h6>
                </li>
                <li>
                    <img src="images/genres/sci-fi.png" alt="Sci-Fi" />
                    <h6>Sci-Fi</h6>
                </li>
                <li>
                    <img src="images/genres/thriller.png" alt="Thriller" />
                    <h6>Thriller</h6>
                </li>
                <li>
                    <img src="images/genres/western.png" alt="Western" />
                    <h6>Western</h6>
                </li>
                <li>
                    <img src="images/genres/Linkdventure.png" alt="Adventure" />
                    <h6>Adventure</h6>
                </li>
                <li>
                    <img src="images/genres/Linknimation.png" alt="Animation" />
                    <h6>Animation</h6>
                </li>
                <li>
                    <img src="images/genres/documentary.png" alt="Documentary" />
                    <h6>Documentary</h6>
                </li>
            </ul>
            
            <div class="clearfix"></div>
        </>
        )
    }
}