import React, { useEffect, useState } from "react";

import "../scss/HoverMovie.scss";
import "../scss/Row.scss";

export default function HoverMovie(props) {
    const [hover, setHover] = useState(false);
    const [releaseDate, setReleaseDate] = useState("");
    const [title, setTitle] = useState("");
    const [genres, setGenres] = useState([]);
    const [css, setCss] = useState(`outer-hover-container hidden visibility`);

    useEffect(() => {
        setHover(props.hover);
    }, [props.hover]);

    useEffect(() => {
        if (hover) {
            setCss(`outer-hover-container visibility`);
            setTimeout(() => {
                setCss(`outer-hover-container`);
            }, 200);
        } else {
            setCss(`outer-hover-container visibility`);
            setTimeout(() => {
                setCss(`outer-hover-container visibility hidden`);
            }, 200);
        }
    }, [hover]);

    useEffect(() => {
        if (props.show === "movie") {
            setTitle(props.item.title);
            setGenres(props.movieGenres);
            if (props.item.release_date) setReleaseDate(props.item.release_date.slice(0, 4));
        } else {
            setTitle(props.item.name);
            setGenres(props.TVGenres);
            if (props.item.first_air_date) setReleaseDate(props.item.first_air_date.slice(0, 4));
        }
    }, [props.item, props.movieGenres, props.TVGenres]);

    useEffect(() => {}, [props.movieGenres, props.TVGenres]);
    return (
        <div className={css}>
            <div className="hover-container">
                <img alt={props.item.title} className="hover-image-banner" src={`https://image.tmdb.org/t/p/original${props.item.backdrop_path}`} />
                <div className="description-container">
                    <div className="first-layer">
                        <h1>
                            {title} <span>({releaseDate})</span>
                        </h1>
                    </div>
                    <div className="second-layer">
                        <p>{props.item.overview}</p>
                    </div>
                    <div className="third-layer">
                        <p>
                            {props.item.genre_ids.map((itemMovieGenres, indexMovieGenres) => {
                                return (
                                    <span key={indexMovieGenres}>
                                        {indexMovieGenres <= 2
                                            ? genres.map((itemGenresList) => {
                                                  if (indexMovieGenres <= 1 && indexMovieGenres !== props.item.genre_ids.length - 1 && itemMovieGenres === itemGenresList.id) {
                                                      return <span key={(indexMovieGenres + 1) * itemMovieGenres * props.item.id}>{itemGenresList.name + " | "}</span>;
                                                  } else {
                                                      if (itemMovieGenres === itemGenresList.id) {
                                                          return <span key={(indexMovieGenres + 1) * itemMovieGenres * props.item.id}>{itemGenresList.name}</span>;
                                                      }
                                                  }
                                              })
                                            : " "}
                                    </span>
                                );
                            })}
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}
