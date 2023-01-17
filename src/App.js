import React from "react";
import Nav from "./Components/Nav";
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import Row from "./Components/Row";
import RowPoster from "./Components/RowPoster";

import "./index.scss";

const api_key = "8c8250c4d7821dc09977bd3aecc6b1a5";
function App() {
    return (
        <div className="App">
            <Nav />
            <div className="main-view">
                <Header />
                <Row type="banner" show="movie" z={300} headline="Popular Movies" css="first" api={api_key} url="discover/movie?sort_by=popularity.desc" />
                {/* <RowPoster type="poster" show="movie" z={299} css="poster" headline="Top 10 Movies from 2019" api={api_key} url="discover/movie?primary_release_year=2019" /> */}
                <Row type="banner" show="movie" z={298} headline="Highest Rated R Movies" api={api_key} url="discover/movie?certification_country=US&certification.lte=G&sort_by=popularity.desc" />
                <Row type="banner" show="movie" z={297} css="poster" headline="Best Movies of Chris Hemsworth" api={api_key} url="discover/movie?with_people=74568&sort_by=vote_average.desc" />
                <Row type="banner" show="tv" z={296} headline="TV Shows Airing Today" api={api_key} url="tv/airing_today?&language=en-US&page=1" />
                <Row type="banner" show="movie" z={295} headline="Now in Cinema" api={api_key} url="movie/now_playing?language=en-US" />
                <RowPoster type="poster" show="movie" z={294} css="poster" headline="Top 10 Comedy Movies" api={api_key} url="discover/movie?with_genres=35&sort_by=popularity.desc" />
                <Row type="banner" show="movie" z={293} css="poster" headline="Best Movies of Ryan Reynolds" api={api_key} url="discover/movie?with_people=10859&sort_by=vote_average.desc" />
                <Row type="banner" show="tv" z={292} headline="Popular TV Shows" api={api_key} url="discover/tv?language=en-US&sort_by=popularity.desc&page=1" />
                <Row type="banner" show="tv" z={291} headline="Comedy TV Shows" api={api_key} url="discover/tv?language=en-US&sort_by=popularity.desc&page=1&with_genres=35" />
                {/* <RowPoster type="poster" show="movie" z={290} css="poster" headline="Top 10 Horror Movies" api={api_key} url="discover/movie?with_genres=27&sort_by=popularity.desc" />
                <Row type="banner" show="movie" z={289} css="poster" headline="Best Movies of Tom Holland" api={api_key} url="discover/movie?with_people=1136406&sort_by=vote_average.desc" />
                <Row type="banner" show="tv" z={288} headline="TV Shows from 2020" api={api_key} url="discover/tv?with_genres=18&primary_release_year=2020" />
                <Row type="banner" show="movie" z={287} headline="Best Drama Movies" api={api_key} url="discover/movie?with_genres=18&sort_by=vote_average.desc&vote_count.gte=10" />
                <Row type="banner" show="movie" z={286} headline="Best Science Fiction Movies" api={api_key} url="discover/movie?with_genres=28&sort_by=vote_average.desc&vote_count.gte=10" />
                <Row type="banner" show="movie" z={285} headline="Best Movies of Hailee Steinfeld" api={api_key} url="discover/movie?with_people=130640&sort_by=vote_average.desc" /> */}
            </div>
            <Footer />
        </div>
    );
}

export default App;
