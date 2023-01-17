import React, { useEffect, useState } from "react";
import ProfileList from "./ProfileList";

import "../scss/Nav.scss";

import Logo from "../img/nav/netflix-nav.png";
import Profile from "../img/nav/profile/profile-nav.png";
import Profile2 from "../img/nav/profile/profile2.png";
import Profile3 from "../img/nav/profile/profile3.png";
import Profile4 from "../img/nav/profile/profile4.png";
import Profile5 from "../img/nav/profile/profile5.png";

export default function Nav(props) {
    const [show, setShow] = useState("scrollup");
    const [nav, setNav] = useState(
        <ul className="button-container">
            <li>Home</li>
            <li>TV Shows</li>
            <li>Movies</li>
            <li>New & Popular</li>
            <li>My List</li>
        </ul>
    );
    const controlNavbar = () => {
        window.pageYOffset >= 10 ? setShow("scrolldown") : setShow("scrollup");
    };
    const controlTabBar = () => {
        window.innerWidth >= 800
            ? setNav(
                  <ul className="button-container">
                      <li className="nav-link nav-color">Home</li>
                      <li className="nav-link nav-color">TV Shows</li>
                      <li className="nav-link nav-color">Movies</li>
                      <li className="nav-link nav-color">New & Popular</li>
                      <li className="nav-link nav-color">My List</li>
                  </ul>
              )
            : setNav(
                  <div className="nav-choices-container account-button">
                      <div className="nav-choices-dropdown-button">
                          <div className="nav-choices-container nav-link">
                              <h1 className="nav-button">Browse</h1>
                          </div>
                          <i className={`fa fa-caret-down main-caret nav-link`} aria-hidden="true"></i>
                      </div>
                      <div className=" nav-dropdown ">
                          <div className="caret-container">
                              <i className="fa fa-caret-up nav-dropdown-caret" aria-hidden="true"></i>
                          </div>
                          <ul className="nav-list">
                              <li className="nav-choice nav-link active">Home</li>
                              <li className="nav-choice nav-link">TV Shows</li>
                              <li className="nav-choice nav-link">Movies</li>
                              <li className="nav-choice nav-link">New & Popular</li>
                              <li className="nav-choice nav-link">My List</li>
                          </ul>
                      </div>
                  </div>
              );
    };
    useEffect(() => {
        window.addEventListener("scroll", controlNavbar);
        window.addEventListener("resize", controlTabBar);

        return () => {
            window.removeEventListener("scroll", controlNavbar);
            window.removeEventListener("resize", controlTabBar);
        };
    }, []);

    return (
        <div className={`nav-container nav-container-${show}`}>
            <div className="nav">
                <div className="left-container">
                    <img src={Logo} alt="NETFLIX" className="logo" />
                    {nav}
                </div>
                <div className="icon-container">
                    <i className="icon-search main-icon nav-link"></i>
                    <i className="fa fa-bell main-icon nav-link"></i>
                    <div className="account-container account-button">
                        <div className="account-dropdown-button">
                            <div className="profile-container nav-link">
                                <img src={Profile} alt="Profile" />
                            </div>
                            <i className={`fa fa-caret-down main-caret nav-link`} aria-hidden="true"></i>
                        </div>
                        <div className="dropdown-hidden account-dropdown ">
                            <i className={`fa fa-caret-up dropdown-caret`} aria-hidden="true"></i>
                            <ul className="profile-account-list">
                                <li className="nav-link">
                                    <ProfileList name="Daphne" img={Profile2} />
                                </li>
                                <li className="nav-link">
                                    <ProfileList name="Sae-byeok" img={Profile3} />
                                </li>
                                <li className="nav-link">
                                    <ProfileList name="Ruby" img={Profile4} />
                                </li>
                                <li className="nav-link">
                                    <ProfileList name="Sarah" img={Profile5} />
                                </li>
                                <li className="nav-link">
                                    <ProfileList
                                        className="nav-link"
                                        name="Manage Profile"
                                        svg={
                                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="Hawkins-Icon Hawkins-Icon-Standard">
                                                <path
                                                    fillRule="evenodd"
                                                    clipRule="evenodd"
                                                    d="M22.2071 7.79285L15.2071 0.792847L13.7929 2.20706L20.7929 9.20706L22.2071 7.79285ZM13.2071 3.79285C12.8166 3.40232 12.1834 3.40232 11.7929 3.79285L2.29289 13.2928C2.10536 13.4804 2 13.7347 2 14V20C2 20.5522 2.44772 21 3 21H9C9.26522 21 9.51957 20.8946 9.70711 20.7071L19.2071 11.2071C19.5976 10.8165 19.5976 10.1834 19.2071 9.79285L13.2071 3.79285ZM17.0858 10.5L8.58579 19H4V14.4142L12.5 5.91417L17.0858 10.5Z"
                                                    fill="currentColor"
                                                ></path>
                                            </svg>
                                        }
                                    />
                                </li>
                            </ul>
                            <ul className="profile-account-list" style={{ padding: "0" }}>
                                <li>
                                    <ProfileList className="nav-link" name="DVD" />
                                </li>
                            </ul>
                            <ul className="profile-account-list">
                                <li>
                                    <ProfileList
                                        className="nav-link"
                                        name="Account"
                                        svg={
                                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="Hawkins-Icon Hawkins-Icon-Standard">
                                                <path
                                                    fillRule="evenodd"
                                                    clipRule="evenodd"
                                                    d="M9.00011 8C9.00011 6.34315 10.3433 5 12.0001 5C13.657 5 15.0001 6.34315 15.0001 8C15.0001 9.65685 13.657 11 12.0001 11C10.3433 11 9.00011 9.65685 9.00011 8ZM12.0001 3C9.23869 3 7.00011 5.23858 7.00011 8C7.00011 10.7614 9.23869 13 12.0001 13C14.7615 13 17.0001 10.7614 17.0001 8C17.0001 5.23858 14.7615 3 12.0001 3ZM5.98069 21.1961C6.46867 18.7563 8.61095 17 11.0991 17H12.9011C15.3893 17 17.5316 18.7563 18.0195 21.1961L19.9807 20.8039C19.3057 17.4292 16.3426 15 12.9011 15H11.0991C7.65759 15 4.69447 17.4292 4.01953 20.8039L5.98069 21.1961Z"
                                                    fill="currentColor"
                                                ></path>
                                            </svg>
                                        }
                                    />
                                </li>
                                <li>
                                    <ProfileList
                                        className="nav-link"
                                        name="Help Center"
                                        svg={
                                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="Hawkins-Icon Hawkins-Icon-Standard">
                                                <path
                                                    fillRule="evenodd"
                                                    clipRule="evenodd"
                                                    d="M3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12ZM12 1C5.92487 1 1 5.92487 1 12C1 18.0751 5.92487 23 12 23C18.0751 23 23 18.0751 23 12C23 5.92487 18.0751 1 12 1ZM12 8.5C10.6831 8.5 10 9.24303 10 10H8C8 7.75697 10.0032 6.5 12 6.5C13.9968 6.5 16 7.75697 16 10C16 11.3487 14.9191 12.2679 13.8217 12.68C13.5572 12.7793 13.3322 12.9295 13.1858 13.0913C13.0452 13.2467 13 13.383 13 13.5V14H11V13.5C11 12.0649 12.1677 11.1647 13.1186 10.8076C13.8476 10.5339 14 10.1482 14 10C14 9.24303 13.3169 8.5 12 8.5ZM13.5 16.5C13.5 17.3284 12.8284 18 12 18C11.1716 18 10.5 17.3284 10.5 16.5C10.5 15.6716 11.1716 15 12 15C12.8284 15 13.5 15.6716 13.5 16.5Z"
                                                    fill="currentColor"
                                                ></path>
                                            </svg>
                                        }
                                    />
                                </li>
                            </ul>
                            <p className="nav-link signout profile-account-list">Sign out to Netflix</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
