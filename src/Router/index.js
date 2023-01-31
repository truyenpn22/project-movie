import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomeContainer from './../Container/Home/index';
import MoviesContainer from './../Container/Movies/index';
import TvSeriesContainer from './../Container/TvSeries/index';
import SearchContainer from './../Container/Search/index';
import DetailsContainer from './../Container/Details/index';
import HeaderComponents from './../Components/Header/index'
import FooterComponents from './../Components/Footer/index'


const RouterComponent = () => {
  return (
    <>
      <BrowserRouter>
      <HeaderComponents />
        <Routes>
          <Route path="/" element={<HomeContainer />} />
          <Route path="/movies" element={<MoviesContainer />} />
          <Route path="/series" element={<TvSeriesContainer />} />
          <Route path="/search" element={<SearchContainer />} />
          <Route path="/details/:movieid/:mediatype" element={<DetailsContainer />} />
        </Routes>
        <FooterComponents />
      </BrowserRouter>
    </>
  );
};

export default RouterComponent;
