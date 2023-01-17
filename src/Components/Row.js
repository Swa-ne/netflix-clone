import React, { useEffect, useState } from "react";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

import Movie from "./Movie";

import Axios from "axios";

import "../scss/Row.scss";
import "swiper/css";
import "swiper/css/navigation";

export default function Row(props) {
    const [movies, setMovies] = useState([]);
    const url = "https://api.themoviedb.org/3/";
    const [urlFinal, setUrlFinal] = useState();
    useEffect(() => {
        setUrlFinal(`${url}${props.url}&api_key=${props.api}`);
    }, [props.url, props.api]);
    useEffect(() => {
        const getMovies = async () => {
            try {
                const data = await Axios.get(urlFinal);
                setMovies(data.data.results);
            } catch (err) {
                console.error(err);
            }
        };
        getMovies();
    }, [urlFinal]);

    return (
        <div style={{ zIndex: props.z }} className={`images-outer-row-container ${props.css}-images-outer-row-container`}>
            <h1 className={`${props.css}-h1 headline`}>{props.headline}</h1>
            <Swiper
                modules={[Navigation, Pagination, Scrollbar, A11y]}
                loop
                speed={1500}
                navigation
                pagination={{ clickable: true }}
                className={`images-row-container ${props.css}`}
                style={{ overflow: "visible" }}
                breakpoints={{
                    0: {
                        slidesPerView: 2.2,
                        spaceBetween: 0,
                        slidesPerGroup: 2,
                    },
                    768: {
                        slidesPerView: 3.2,
                        spaceBetween: 0,
                        slidesPerGroup: 3,
                    },
                    1024: {
                        slidesPerView: 4.2,
                        spaceBetween: 0,
                        slidesPerGroup: 4,
                    },
                    1100: {
                        slidesPerView: 5.2,
                        spaceBetween: 0,
                        slidesPerGroup: 5,
                    },
                }}
            >
                {movies.map((item, index) => {
                    return (
                        <div key={index}>
                            {item.backdrop_path !== null ? (
                                <>
                                    <SwiperSlide key={index} className="row-image">
                                        <Movie show={props.show} item={item} type={props.type} />
                                    </SwiperSlide>
                                </>
                            ) : (
                                ""
                            )}
                        </div>
                    );
                })}
            </Swiper>
        </div>
    );
}
