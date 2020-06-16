import React, { useState } from "react";
import Carousel from "react-bootstrap/Carousel";

//image slider carousel for the landing page with images from web sources
const ControlledCarousel = () => {
  const [index, setIndex] = useState(0);

  //for handling selected slide display
  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };
  const getWindowWidth = () => window.innerWidth // to get the window inner width
  return (
    <Carousel activeIndex={index} onSelect={handleSelect} style={{ width: getWindowWidth() }}>
      <Carousel.Item className="h-75">
        <img
          className="d-block w-100"
          src="https://www.safetyandhealthmagazine.com/ext/resources/images/news/words/glove-stop-coronavirus.jpg?1584626830&auto=format&w=512&q=75&resize=width:50px,height:50px"
          alt="First slide"
        />
      </Carousel.Item>
      <Carousel.Item className="h-75">
        <img
          className="d-block w-100"
          src="https://img.rasset.ie/00140c52-800.jpg"
          alt="Second slide"
        />
      </Carousel.Item>
      <Carousel.Item className="h-75">
        <img
          className="d-block w-100"
          src="https://www.hkpr.on.ca/wp-content/uploads/2020/04/GettyImages-1203224882-800x533.jpg?w=600&auto=format&crop=fit&q=85"
          alt="Third slide"
        />
      </Carousel.Item>
    </Carousel>
  );
}
export default ControlledCarousel;