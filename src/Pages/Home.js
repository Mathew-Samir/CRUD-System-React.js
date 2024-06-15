import React from 'react'
import Carousel from 'react-bootstrap/Carousel';
import './Home.css'

const Home = () => {
  return (
  <>
    <Carousel fade>
      <Carousel.Item>
          <img src="https://www.internetcommercesummit.com/storage/2023/09/ecommerce1.jpg" alt="placeholder" text="First slide" />
      </Carousel.Item>
      <Carousel.Item>
          <img src="https://pix4free.org/assets/library/2021-06-16/originals/commercial.jpg" alt="placeholder" text="Second slide" />
      </Carousel.Item>
      <Carousel.Item>
          <img src="https://www.vocso.com/blog/wp-content/uploads/2022/02/eCommerce-Website-Features-1920-x-1080.jpg" alt="placeholder" text="Third slide" />
      </Carousel.Item>
    </Carousel>
  </>
  )
}

export default Home;
