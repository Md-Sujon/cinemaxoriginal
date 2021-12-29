import React from 'react';
import BrandNewSeries from '../BrandNewSeries/BrandNewSeries';
import CinemaBeyondBorder from '../CinemaBeyondBorder/CinemaBeyondBorder';
import CinemaSuperhit from '../CinemaSuperhit/CinemaSuperhit';
import CinemaxSelect from '../CinemaxSelect/CinemaxSelect';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import SecondCarousel from '../SecondCarousel/SecondCarousel';
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
          <SecondCarousel></SecondCarousel>
          <Footer></Footer>
        </div>
    );
};

export default Home;