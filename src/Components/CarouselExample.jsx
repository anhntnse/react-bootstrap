import Carousel from 'react-bootstrap/Carousel';
import image1 from '../images/image1.jpg';
import image2 from '../images/image2.jpg';
import image3 from '../images/image3.jpg';


function UncontrolledExample() {
  return (
    <Carousel>
      <Carousel.Item>
      <img src={image1} alt="Meo" />
      <Carousel.Caption>
          <h3>Meo</h3>
          <p>Meo Meo Meo Meo Meo Meo</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
      <img src={image2} alt="Meo" />
        <Carousel.Caption>
          <h3>Meow</h3>
          <p>Meow Meow Meow Meow</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
      <img src={image3} alt="Meo" />
        <Carousel.Caption>
          <h3>Meovv</h3>
          <p>
            Meovv Meovv Meovv Meovv Meovv
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default UncontrolledExample;