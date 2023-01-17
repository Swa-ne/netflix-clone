import React from "react";
import "../scss/ProfileList.scss";

function ProfileList(props) {
    return (
        <div className="nav-link profile-account">
            {props.svg ? props.svg : props.img ? <img src={props.img} alt={props.name} /> : ""}
            <span>{props.name}</span>
        </div>
    );
}

export default ProfileList;
