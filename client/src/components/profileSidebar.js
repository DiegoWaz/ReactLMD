import React from "react";

export default class ProfileSidebar extends React.Component {

    render() {
        const style = {
            maxHeight: 50
		}
		
		const images = "https://www.foot01.com/img/images/650x600/2018/Aug/19/psg-pierre-menes-a-des-etoiles-dans-les-yeux-grace-a-kylian-mbappe-iconsport_icon_bap_180818_93_103,228071.jpg";

        return (
            <div id="content-sidebar-pro">
			<div id="content-sidebar-info">
				<img src={images} alt="Suzie" />
				<div id="profile-sidebar-name">
					<h5>Kylian Mbappé</h5>
					<h6>Bondy, France</h6>
				</div>
				<div id="profile-sidebar-gradient"></div>
				<a href="dashboard-account.html" class="edit-profile-sidebar"><i class="fas fa-pencil-alt"></i></a>
			</div>
			
			<div class="content-sidebar-section">
				<h3 class="content-sidebar-sub-header">Statistiques</h3>
				<ul id="profile-watched-stats">
					<li><span>43</span> Matchs</li>
					<li><span>28</span> Buts</li>
					<li><span>07</span> Passes décisives</li>
				</ul>
			</div>
			
			<div class="content-sidebar-section">
				<h3 class="content-sidebar-sub-header">Favorite Genres</h3>
				<ul id="profile-favorite-genres">
					<li>
						<img src="images/genres/comedy.png" alt="Comedy" />
					</li>
					<li>
						<img src="images/genres/action.png" alt="Action" />
					</li>
					<li>
						<img src="images/genres/romance.png" alt="Romance" />
					</li>
					<li>
						<img src="images/genres/fantasy.png" alt="Fantasy" />
					</li>
				</ul>
				<div class="clearfix"></div>
			</div>
			
			<div class="content-sidebar-section">
				<h3 class="content-sidebar-sub-header">Club</h3>
				<ul id="friends-activity-profiles">
					<li><a href="#!"><img src="images/demo/user-8.jpg" alt="Friend" /></a></li>
				</ul>
				<div class="clearfix"></div>
			</div>
		</div>
        )
    }
}