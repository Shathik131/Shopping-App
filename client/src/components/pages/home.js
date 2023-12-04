import React, { useState } from "react";
import { Container, Row, Col, Carousel, Button, Card } from "react-bootstrap";

const Home = () => {
  const HomeCard = [
    {
      Id: 1,
      Image:
        "http://wpdemo.magikthemes.com/brezza/wp-content/uploads/sites/8/2016/07/product3-300x300.jpg",
      Header: "Orange",
      wight: "1kg",
      Price: "₹80",
    },
    {
      Id: 2,
      Image:
        "http://wpdemo.magikthemes.com/brezza/wp-content/uploads/sites/8/2016/07/product8-300x300.jpg",
      Header: "Apple",
      wight: "1kg",
      Price: "₹120",
    },
    {
      Id: 3,
      Image:
        "http://wpdemo.magikthemes.com/brezza/wp-content/uploads/sites/8/2016/07/product2-300x300.jpg",
      Header: "Watermelon",
      wight: "1kg",
      Price: "₹150",
    },
    {
      Id: 4,
      Image:
        "http://wpdemo.magikthemes.com/brezza/wp-content/uploads/sites/8/2016/07/product13-300x300.jpg",
      Header: "Grapes",
      wight: "1kg",
      Price: "₹100",
    },
    {
      Id: 5,
      Image:
        "http://wpdemo.magikthemes.com/brezza/wp-content/uploads/sites/8/2016/07/product12-300x300.jpg",
      Header: "Pomegranate",
      wight: "1kg",
      Price: "₹160",
    },
    {
      Id: 8,
      Image:
        "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=270/app/images/products/sliding_image/15220a.jpg?ts=1690806475",
      Header: " Raw Mango",
      wight: "1kg",
      Price: "₹50",
    },
    {
      Id: 7,
      Image:
        "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=270/app/images/products/sliding_image/355051a.jpg?ts=1687326264",
      Header: "Papaya",
      wight: "1kg",
      Price: "₹120",
    },
    {
      Id: 6,
      Image:
        "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=270/app/images/products/sliding_image/532458a.jpg",
      Header: "Green Apple",
      wight: "1kg",
      Price: "₹150",
    },
  ];

  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex) => {
    setIndex(selectedIndex);
  };

  return (
    <Container fluid>
      <Row>
        <Carousel activeIndex={index} onSelect={handleSelect} className='p-0'>
          <Carousel.Item>
            <img
              src='../fruit_image/car_img-2.jpg'
              alt=''
              className='img-fluid w-100'
            />
            <Carousel.Caption className=' carousel_center '>
              <div className='text-center'>
                <h3>Second slide label</h3>
                <p className=' fw-bolder fs-3 '>
                  FILL UP YOUR LIFE WITH VITAMINS !.
                </p>
              </div>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              src='../fruit_image/car_img-3.jpg'
              alt=''
              className='img-fluid w-100'
            />
            <Carousel.Caption className='carousel_center '>
              <div className='text-center'>
                {" "}
                <h3>FRUITS</h3>
                <p className=' fw-bolder '>
                  So that connoisseurs develop loyalty of these products, ELITE
                  FRUITS works on brand recognition. Elite Fruits and its
                  Partner-producers are committed to the quality of their
                  products. Through a wide range of fruit, the consumer will
                  find all the expertise of ELITE FRUITS'choices. To help you
                  find your way around the marketing seasons, a calendar is
                  available for each variety processed by ELITE FRUITS
                </p>
              </div>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
      </Row>

      <Row>
        <Col xs={12} sm={6} className='p-0'>
          <div data-aos='slide-up' className=' p-5 '>
            <h2 className=' text-center'>WELCOME</h2>
            <div className=''>
              <p>
                fruit enthusiasts and health-conscious individuals alike.
                Immerse yourself in a world of colorful, juicy delights as you
                explore the bounty of nature's goodness that we have carefully
                curated for you.
              </p>
              <p>
                At our Fruit Store, we take pride in offering a diverse
                selection of the finest fruits, sourced from trusted growers who
                prioritize quality and sustainability. Whether you're in the
                mood for the crisp sweetness of apples, the tropical indulgence
                of mangoes, or the refreshing burst of citrus from oranges, our
                store has something for every palate.
              </p>
            </div>
          </div>
        </Col>
        <Col xs={12} sm={6} className='p-0'>
          <div className='px-5 py-3'>
            <img
              src='../fruit_image/h_img-2.jpg'
              alt='....'
              className='img-fluid rounded'
            />
          </div>
        </Col>
      </Row>

      <Row>
        <h1 className='text-center'>HEALTHY FRUITS</h1>
        {HomeCard.map((data) => (
          <Col
            xs={12}
            md={6}
            lg={3}
            key={data.Id}
            className='d-flex justify-content-center  p-5'
          >
            <Card
              style={{ width: "18rem" }}
              data-aos='slide-up'
              className=' card_shadow rounded shadow-lg'
            >
              <Card.Img variant='top' src={data.Image} />
              <Card.Body className='card_bottom_color'>
                <Card.Title>{data.Header}</Card.Title>
                <div className='d-flex justify-content-between align-items-center mt-3'>
                  <Card.Text>
                    {data.wight} {data.Price}
                  </Card.Text>
                  <Button variant='primary'>Add</Button>
                </div>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default Home;
