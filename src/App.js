import React from "react";
import Nav from "./Components/Nav";
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import Row from "./Components/Row";
import RowPoster from "./Components/RowPoster";

import "./index.scss";

function App() {
    return (
        <div className="App">
            <Nav />
            <div className="main-view">
                <Header />
                <Row type="banner" show="movie" z={300} headline="Popular Movies" css="first" />
                <RowPoster type="poster" show="movie" z={299} css="poster" headline="Top 10 Movies from 2019" />
                <Row type="banner" show="movie" z={298} headline="Highest Rated R Movies" />
                <Row type="banner" show="movie" z={297} css="poster" headline="Best Movies of Chris Hemsworth" />
                <Row type="banner" show="tv" z={296} headline="TV Shows Airing Today" />
                <Row type="banner" show="movie" z={295} headline="Now in Cinema" />
            </div>
            <Footer />
        </div>
    );
}

export default App;
