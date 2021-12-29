import React from 'react';
import './SecondCarousel.css';
import {Button,Carousel} from 'react-bootstrap';

const SecondCarousel = () => {
    return (
        <div>
            <Carousel className="carousel">
  <Carousel.Item interval={1000} >
<section>
    <div className="back">
    </div>
    <div className="top">
    </div>
</section>


    <Carousel.Caption className="custom-foot">
      <h3>Unoloukik</h3>
      <h6>Psychological Drama | 5 Episodes</h6>

      <Button className="WatchButton"><h5>Watch Now</h5></Button>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item interval={500}>

  <Carousel.Caption>
      <h3>Morichika</h3>
      <h6>Crime Thriller | 8 Episodes</h6>
      <Button className="WatchButton"><h5>Watch Now</h5></Button>
    </Carousel.Caption>

    <section>
    <div className="back1">
    </div>
    <div className="top1">
    </div>
    </section>
   
  </Carousel.Item>
  <Carousel.Item>
  <section>
    <div className="back2">
    </div>
    <div className="top2">
    </div>
</section>
    <Carousel.Caption>
      <h3>Sugar Free</h3>
      <h6>Comedy Drama | 4 Episodes</h6>
      
      <Button className="WatchButton"><h5>Watch Now</h5></Button>
    </Carousel.Caption>
  </Carousel.Item>

  <Carousel.Item>
  <section>
    <div className="back3">
    </div>
    <div className="top3">
    </div>
</section>
    <Carousel.Caption>
      <h3>Jaago Bahey</h3>
      <h6>Historical Drama | Episodes</h6>
      <Button className="WatchButton"><h5>Watch Now</h5></Button>
    </Carousel.Caption>
  </Carousel.Item>
      
</Carousel>
        </div>
    );
};

export default SecondCarousel;