import React, { useEffect, useState } from "react";
import "./BarndNewSeries.css";
import Carousel from "react-elastic-carousel";
import data from "../../data/data.json";

const breakPoints = [
  { width: 1, itemsToShow: 1 },
  { width: 550, itemsToShow: 2 },
  { width: 768, itemsToShow: 3 },
  { width: 1200, itemsToShow: 4 },
];

const BrandNewSeries = () => {
  const [dataLoad, setDataLoad] = useState([]);

  useEffect(() => {
    const dataLoad = data;
    setDataLoad(dataLoad);
  }, []);

  return (
    <div>
      <div>
        <h2>BRAND NEW SERIES</h2>
      </div>
      <div className="Carousel">
        <Carousel breakPoints={breakPoints}>
          {dataLoad.map((item) => (
            <div className="box" key={item.id}>
              <img className="img-responsive" src={item.image} alt="" />
            </div>
          ))}
        </Carousel>
      </div>
    </div>
  );
};

export default BrandNewSeries;
