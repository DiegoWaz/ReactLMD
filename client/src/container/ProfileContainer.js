import React from "react";
import ProfileSidebar from "../components/profileSidebar";
import ProfileContent from "../components/profileContent";

export default class ProfileContainer extends React.Component {
    render() {
        return (
            <>
                <ProfileSidebar />
                <ProfileContent />
            </>
        )
    }
}