import React from "react";
import NewsContent from "../components/newsContent";
import NewsSidebar from "../components/newsSidebar";

export default class NewsContainer extends React.Component {
    render() {
                
        const imgBack = {
            backgroundImage: "url(https://psgimages.stadion.io/media/20504/35.jpg?anchor=center&mode=crop&width=2000&height=1333&quality=80)"
         }
         
        return (
            <>
                <div id="movie-detail-header-pro" style={imgBack}></div>
                <NewsSidebar/>
                <NewsContent />
            </>
        );
    }
}