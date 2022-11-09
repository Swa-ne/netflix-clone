import React, { useEffect, useState } from "react";
import HoverMovie from "./HoverMovie";

import Axios from "axios";

function Movie(props) {
    return (
        <a href={`https://www.themoviedb.org/movie/${props.item.id}`}>
            <div
                onMouseEnter={toShow}
                onMouseLeave={() => {
                    setHover(false);
                    setTimeout(() => {
                        setHover(false);
                    }, 1002);
                }}
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
