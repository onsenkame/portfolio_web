import meter1 from "../assets/img/meter1.svg";
import meter2 from "../assets/img/meter2.svg";
import meter3 from "../assets/img/meter3.svg";
import Carousel from 'react-bootstrap/Carousel'
import "react-multi-carousel/lib/styles.css";
import arrow1 from "../assets/img/arrow1.svg";
import arrow2 from "../assets/img/arrow2.svg";
import { Container, Row, Col } from "react-bootstrap";
import colorSharp from "../assets/img/color-sharp.png";

export const About = () => {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };

  return (
    <section className="banner" id="skills">
      <Container>
        <Row>
          <Col xs={12} md={6} xl={7}>
            <div className="paper">
              <span className="tagline">ようこそ！</span>
              <h1>
                Hi! I'm Warren Au
                <br></br>
              </h1>
              <p>
                Always learning and linking knowledge, I have found success in
                places familiar and far through my ability to quickly learn new
                concepts and technologies, problem solve, and integrate my
                combined knowledge to further my personal and team objectives.
                From refining a detail oriented and adaptive problem solving
                mind though experiments with biochemistry, to teaching and
                fostering individual and professional growth of my student and
                peers abroad- I readily bring the sum total of my experiences to
                tackle the toughest problems to help efficiently foster a better
                future.
              </p>
            </div>
          </Col>
          <Col xs={12} md={6} xl={5}>
            <Carousel responsive={responsive}
                      infinite={true}
                      className="owl-carousel owl-theme skill-slider">
              <Carousel.Item interval={5000}>
                <img className="d-block w-100" src={meter1} alt="First slide" />
              </Carousel.Item>
              <Carousel.Item interval={5000}>
                <img
                  className="d-block w-100"
                  src={meter1}
                  alt="Second slide"
                />
              </Carousel.Item>
              <Carousel.Item interval={5000}>
                <img className="d-block w-100" src={meter1} alt="Third slide" />
              </Carousel.Item>
            </Carousel>
          </Col>
        </Row>
        <Row>
          <section className="skill" id="skills">
            <div className="container">
              <div className="row">
                <div className="col-12">
                  <div className="skill-bx wow zoomIn">
                    <h2>Skills</h2>
                    <p>
                      Lorem Ipsum is simply dummy text of the printing and
                      typesetting industry.<br></br> Lorem Ipsum has been the
                      industry's standard dummy text.
                    </p>
                    <Carousel
                      responsive={responsive}
                      infinite={true}
                      className="owl-carousel owl-theme skill-slider"
                    >
                      <div className="item">
                        <img src={meter1} />
                        <h5>Web Development</h5>
                      </div>
                      <div className="item">
                        <img src={meter2} />
                        <h5>Brand Identity</h5>
                      </div>
                      <div className="item">
                        <img src={meter3} />
                        <h5>Logo Design</h5>
                      </div>
                      <div className="item">
                        <img src={meter1} />
                        <h5>Web Development</h5>
                      </div>
                    </Carousel>
                  </div>
                </div>
              </div>
            </div>
            <img
              className="background-image-left"
              src={colorSharp}
            />
          </section>
        </Row>
      </Container>
    </section>
  );
};
