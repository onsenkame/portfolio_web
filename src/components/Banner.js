import { useState, useEffect } from "react";
import { Container, Row, Col, Nav } from "react-bootstrap";
import { ArrowRightCircle } from "react-bootstrap-icons";
import { Link } from "react-router-dom";
import "animate.css";

export const Banner = () => {
  const [loopNum, setLoopNum] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [text, setText] = useState("");
  const [delta, setDelta] = useState(300 - Math.random() * 10);
  const [index, setIndex] = useState(1);
  const toRotate = ["Fullstack Engineer", "Web Designer", "Adventurer"];
  const period = 1000;

  useEffect(() => {
    let ticker = setInterval(() => {
      tick();
    }, delta);

    return () => {
      clearInterval(ticker);
    };
  }, [text]);

  const tick = () => {
    let i = loopNum % toRotate.length;
    let fullText = toRotate[i];
    let updatedText = isDeleting
      ? fullText.substring(0, text.length - 1)
      : fullText.substring(0, text.length + 1);

    setText(updatedText);

    if (isDeleting) {
      setDelta((prevDelta) => prevDelta / 2);
    }

    if (!isDeleting && updatedText === fullText) {
      setIsDeleting(true);
      setIndex((prevIndex) => prevIndex - 1);
      setDelta(period);
    } else if (isDeleting && updatedText === "") {
      setIsDeleting(false);
      setLoopNum(loopNum + 1);
      setIndex(1);
      setDelta(300);
    } else {
      setIndex((prevIndex) => prevIndex + 1);
    }
  };

  return (
    <section className="banner" id="home">
      <Container fluid="lg">
        <Row className="justify-content-center align-items-center">
          <Col xs={12} md={8} xl={8}>
            <div className="paper">
              <span className="tagline">ようこそ！</span>
              <h1>
                {`Hi! I'm Warren Au`} <br></br>
                <span
                  className="txt-rotate"
                  dataperiod="1000"
                  data-rotate='[ "Fullstack Engineer", "Web Designer", "Adventurer" ]'
                >
                  <span className="wrap">{text}</span>
                </span>
              </h1>
              <p>
                Finding and applying the lessons we learn in everything!
                <br></br>
                Come take a look at my travels and solutions!
              </p>
              <button onClick={() => console.log("connect")}>
                <Nav.Link as={Link} to="/about">
                  About Me <ArrowRightCircle size={25} />
                </Nav.Link>
              </button>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};
