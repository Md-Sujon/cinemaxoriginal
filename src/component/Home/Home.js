import React from 'react';
import BrandNewSeries from '../BrandNewSeries/BrandNewSeries';
import CinemaBeyondBorder from '../CinemaBeyondBorder/CinemaBeyondBorder';
import CinemaSuperhit from '../CinemaSuperhit/CinemaSuperhit';
import CinemaxSelect from '../CinemaxSelect/CinemaxSelect';
import Header from '../Header/Header';
import SeriesMustWatch from '../SeriesMustWatch/SeriesMustWatch';
const Home = () => {


    return (
        <div>
           <Header></Header>
          <BrandNewSeries></BrandNewSeries>
          <CinemaSuperhit></CinemaSuperhit>
          <SeriesMustWatch></SeriesMustWatch>
          <CinemaBeyondBorder></CinemaBeyondBorder>
          <CinemaxSelect></CinemaxSelect>
        </div>
    );
};

export default Home;