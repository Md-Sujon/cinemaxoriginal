import React, { useEffect, useState } from 'react';
import './CinemaSuperhit.css';
import data from '../../data/data.json'
import Carousel from "react-elastic-carousel";


const breakPoints = [
    { width: 1, itemsToShow: 1 },
    { width: 550, itemsToShow: 2 },
    { width: 768, itemsToShow: 3 },
    { width: 1200, itemsToShow: 5 },
  ];

const CinemaSuperhit = () => {

    const [dataLoad, setDataLoad] = useState([]);

    useEffect(() => {
      const dataLoad = data;
      setDataLoad(dataLoad);
    }, []);

    return (
        <div>
      <div>
        <h2>Cinema Superhit</h2>
      </div>
      <div>
        <Carousel breakPoints={breakPoints}>
          {dataLoad.map((item) => (
            <div className="boxSuperhit" key={item.id}>
              
              <img className="img-responsive" src={item.image} alt="" ></img>
            </div>
          ))}
        </Carousel>
      </div>
    </div>
    );
};

export default CinemaSuperhit;