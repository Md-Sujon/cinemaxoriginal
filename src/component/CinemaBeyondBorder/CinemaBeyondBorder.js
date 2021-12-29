import React, { useEffect, useState } from 'react';
import data from "../../data/data.json";
import Carousel from "react-elastic-carousel";

const breakPoints = [
    { width: 1, itemsToShow: 1 },
    { width: 550, itemsToShow: 2 },
    { width: 768, itemsToShow: 3 },
    { width: 1200, itemsToShow: 4 },
  ];

const CinemaBeyondBorder = () => {
    const [dataLoad, setDataLoad] = useState([]);

    useEffect(() => {
      const dataLoad = data;
      setDataLoad(dataLoad);
    }, []);
    return (
        <div>
             <div>
        <h2>CINEMA BEYOND BORDER</h2>
      </div>
      <div>
        <Carousel breakPoints={breakPoints}>
          {dataLoad.map((item) => (
            <div className="boxNewSeries" key={item.id}>
              
              <img className="img-responsive" src={item.image} alt="" ></img>
            </div>
          ))}
        </Carousel>
      </div>
        </div>
    );
};

export default CinemaBeyondBorder;