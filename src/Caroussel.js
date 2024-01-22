// import React from 'react'
import Carousel from 'react-bootstrap/Carousel';
// import ExampleCarouselImage from 'components/ExampleCarouselImage';

function Slider() {
  return (

    <Carousel>
      <Carousel.Item>
        <img src="./C:\Users\DeLL\Desktop\Dev\Workshops\workshop-react\public\image\tourisme-durable-nature-vert.png" alt=""/>  
       { /*<ExampleCarouselImage text="First slide" /> */ }

        <Carousel.Caption>
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img src="./C:\Users\DeLL\Desktop\Dev\Workshops\workshop-react\public\image\tunisie-header-3.jpg" alt="" />
       { /*<ExampleCarouselImage text="Second slide" /> */}
        <Carousel.Caption>
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img src="./C:\Users\DeLL\Desktop\Dev\Workshops\workshop-react\public\image\arton78733.jpg" alt="" />

        {/* <ExampleCarouselImage text="Third slide" /> */ }

        <Carousel.Caption>
          <h3>Third slide label</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default Slider
