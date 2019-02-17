import React from "react";
import Link from 'react-router-dom/Link';

export default class NewsSidebar extends React.Component {

    render() {
        const style = {
            maxHeight: 50
        }

        return (
			<>
			<div id="content-sidebar-pro">			
			<div className="content-sidebar-section">
				<ul className="progression-studios-slider-rating">
					<li>PG-13</li><li>HD</li>
				</ul>
			</div>
			
			<div className="content-sidebar-section">
				<h4 className="content-sidebar-sub-header">Release Date</h4>
				<div className="content-sidebar-short-description">2 October, 2017 (USA)</div>
			</div>
			
			<div className="content-sidebar-section">
				<h4 className="content-sidebar-sub-header">Length</h4>
				<div className="content-sidebar-short-description">2 hr 43 min</div>
			</div>
			
			<div className="content-sidebar-section">
				<h4 className="content-sidebar-sub-header">Director</h4>
				<div className="content-sidebar-short-description">James Wan</div>
			</div>
		</div>	
		</>
        )
    }
}