import React, { useEffect, useState } from "react";

import Axios from "axios";

import "../scss/Header.scss";

export default function Header(props) {
    // const [movies, setMovies] = useState();
    const [overview, setOverview] = useState("");
    const [movie, setMovie] = useState([]);

    useEffect(() => {
        const getMovies = async () => {
            try {
                const data = await Axios.get("https://api.themoviedb.org/3/discover/movie?primary_release_year=2018&api_key=8c8250c4d7821dc09977bd3aecc6b1a5");
                // setMovies(data.data.results);
                setMovie(data.data.results[0]);
            } catch (err) {
                console.error(err);
            }
        };
        getMovies();
    }, []);

    useEffect(() => {
        movie.length !== 0 ? setOverview(movie.overview.slice(0, movie.overview.indexOf(".") + 1)) : setOverview("");
    }, [movie.length, movie.overview]);

    return (
        <div className="header-container">
            <img alt={movie.title} src={`https://image.tmdb.org/t/p/original${movie.backdrop_path}`} />
            <div className="leftside-description text">
                <span>{overview}</span>
                <div className="header-button-container">
                    <button className="header-button clickable">
                        <div className="svg-container">
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="Hawkins-Icon Hawkins-Icon-Standard">
                                <path
                                    d="M4 2.69127C4 1.93067 4.81547 1.44851 5.48192 1.81506L22.4069 11.1238C23.0977 11.5037 23.0977 12.4963 22.4069 12.8762L5.48192 22.1849C4.81546 22.5515 4 22.0693 4 21.3087V2.69127Z"
                                    fill="currentColor"
                                ></path>
                            </svg>
                        </div>
                        <span>Play</span>
                    </button>
                    <button className="header-button more-info clickable">
                        <div className="svg-container">
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="Hawkins-Icon Hawkins-Icon-Standard">
                                <path
                                    fillRule="evenodd"
                                    clipRule="evenodd"
                                    d="M12 3C7.02944 3 3 7.02944 3 12C3 16.9706 7.02944 21 12 21C16.9706 21 21 16.9706 21 12C21 7.02944 16.9706 3 12 3ZM1 12C1 5.92487 5.92487 1 12 1C18.0751 1 23 5.92487 23 12C23 18.0751 18.0751 23 12 23C5.92487 23 1 18.0751 1 12ZM13 10V18H11V10H13ZM12 8.5C12.8284 8.5 13.5 7.82843 13.5 7C13.5 6.17157 12.8284 5.5 12 5.5C11.1716 5.5 10.5 6.17157 10.5 7C10.5 7.82843 11.1716 8.5 12 8.5Z"
                                    fill="currentColor"
                                ></path>
                            </svg>
                        </div>
                        <span>More Info</span>
                    </button>
                </div>
            </div>
        </div>
    );
}
