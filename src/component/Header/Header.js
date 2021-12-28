import React from 'react';
import { Button, Carousel } from 'react-bootstrap';
import './Header.css';

const Header = () => {
    return (
     
    <Carousel className="carousel">
  <Carousel.Item interval={1000} >
    <img
      className="d-block img"
      src="https://snagfilms-a.akamaihd.net/dd078ff5-b16e-45e4-9723-501b56b9df0a/images/2021/08/12/1628770036394_unoloukikposter3840x10804thepcopy_32x9Images.jpg?impolicy=resize&w=1536&h=432"
      alt="First slide"
    />
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

    <img
      className="d-block w-100"
      src="https://snagfilms-a.akamaihd.net/dd078ff5-b16e-45e4-9723-501b56b9df0a/images/2021/07/12/1626098789510_morichika3840px1080lastversion_32x9Images.jpg?impolicy=resize&w=1536&h=432"
      alt="Second slide"
    />
   
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src="https://snagfilms-a.akamaihd.net/dd078ff5-b16e-45e4-9723-501b56b9df0a/images/2021/11/18/1637236411430_329_32x9Images.jpg?impolicy=resize&w=1536&h=432"
      alt="Third slide"
    />
    <Carousel.Caption>
      <h3>Sugar Free</h3>
      <h6>Comedy Drama | 4 Episodes</h6>
      
      <Button className="WatchButton"><h5>Watch Now</h5></Button>
    </Carousel.Caption>
  </Carousel.Item>

  <Carousel.Item>
    <img
      className="d-block w-100"
      src="https://snagfilms-a.akamaihd.net/dd078ff5-b16e-45e4-9723-501b56b9df0a/images/2021/12/23/1640265386986_3840x1080_32x9Images.jpg?impolicy=resize&w=1536&h=432"
      alt="Third slide"
    />
    <Carousel.Caption>
      <h3>Jaago Bahey</h3>
      <h6>Historical Drama | Episodes</h6>
      <Button className="WatchButton"><h5>Watch Now</h5></Button>
    </Carousel.Caption>
  </Carousel.Item>


{/* <Carousel.Item className="carousel-button">

</Carousel.Item> */}
      
</Carousel>
    
    );
};

export default Header;