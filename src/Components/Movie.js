import React, { useEffect, useState } from "react";
import HoverMovie from "./HoverMovie";

import Axios from "axios";

import "../scss/HoverMovie.scss";

function Movie(props) {
    const [hover, setHover] = useState(false);
    const [movieGenres, setMovieGenres] = useState([]);
    const [TVGenres, setTVGenres] = useState([]);

    const toShow = () => {
        setTimeout(() => {
            setHover(!hover);
        }, 1000);
    };
    useEffect(() => {
        const getMovieGenres = async () => {
            try {
                const data = await Axios.get(`
                https://api.themoviedb.org/3/genre/movie/list?api_key=8c8250c4d7821dc09977bd3aecc6b1a5&language=en-US`);
                setMovieGenres(data.data.genres);
            } catch (err) {
                console.error(err);
            }
        };
        getMovieGenres();
        const getTVGenres = async () => {
            try {
                const data = await Axios.get(`
                https://api.themoviedb.org/3/genre/tv/list?api_key=8c8250c4d7821dc09977bd3aecc6b1a5&language=en-US`);
                setTVGenres(data.data.genres);
            } catch (err) {
                console.error(err);
            }
        };
        getTVGenres();
    }, []);

    return (
        <a href={`https://www.themoviedb.org/movie/${props.item.id}`}>
            <div
                // onMouseEnter={toShow}
                // onMouseLeave={() => {
                //     setHover(false);
                //     setTimeout(() => {
                //         setHover(false);
                //     }, 1002);
                // }}
                className="movie-main"
            >
                {props.rank ? props.rank : ""}
                <img
                    className={`image-${props.type}`}
                    alt={props.item.title}
                    src={props.type === "banner" ? `https://image.tmdb.org/t/p/original${props.item.backdrop_path}` : `https://image.tmdb.org/t/p/original${props.item.poster_path}`}
                />
                <HoverMovie show={props.show} movieGenres={movieGenres} TVGenres={TVGenres} item={props.item} hover={hover} />
            </div>
        </a>
    );
}

export default Movie;
