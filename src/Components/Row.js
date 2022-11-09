import React, { useEffect, useState } from "react";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

import Movie from "./Movie";

import Axios from "axios";

import "../scss/Row.scss";
import "swiper/css";
import "swiper/css/navigation";

export default function Row(props) {
    return (
        <div style={{ zIndex: props.z }} className={`images-outer-row-container ${props.css}-images-outer-row-container`}>
            <h1 className={`${props.css}-h1 headline`}>{props.headline}</h1>
            <Swiper
                modules={[Navigation, Pagination, Scrollbar, A11y]}
                loop
                spaceBetween={0}
                slidesPerView={5.2}
                slidesPerGroup={5}
                speed={1500}
                navigation
                pagination={{ clickable: true }}
                className={`images-row-container ${props.css}`}
                style={{ overflow: "visible" }}
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
