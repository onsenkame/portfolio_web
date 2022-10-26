import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import projImg1 from "../assets/img/project-img1.png";
import projImg2 from "../assets/img/project-img2.png";
import projImg3 from "../assets/img/project-img3.png";
import colorSharp2 from "../assets/img/color-sharp2.png";
import "animate.css";
import TrackVisibility from "react-on-screen";

export const Projects = () => {
  const projectA = [
    {
      title: "Business Startup",
      description: "Design & Development",
      imgUrl: projImg1,
    },
  ];
  const projectB = [
    {
      title: "Business Startup",
      description: "Design & Development",
      imgUrl: projImg3,
    },
  ];
  const projectC = [
    {
      title: "Business Startup",
      description: "Design & Development",
      imgUrl: projImg2,
    },
  ];

  return (
    <section className="project" id="project">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) => (
                <div
                  className={
                    isVisible ? "animate__animated animate__fadeIn" : ""
                  }
                >
                  <h2>Projects</h2>
                  <p>
                    From the back to the front, I'm working on merging form,
                    function, and fun!
                  </p>
                  <Tab.Container
                    id="projects-tabs"
                    defaultActiveKey="first"
                    className="paper"
                  >
                    <Nav
                      variant="pills"
                      className="nav-pills mb-5 justify-content-center align-items-center"
                      id="pills-tab"
                    >
                      <Nav.Item>
                        <Nav.Link eventKey="first">Scribble Me This</Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link eventKey="second">the Lazy Redditor</Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link eventKey="third">Pokemon TCG Store</Nav.Link>
                      </Nav.Item>
                    </Nav>
                    <Tab.Content
                      id="slideInUp"
                      className={
                        isVisible ? "animate__animated animate__slideInUp" : ""
                      }
                    >
                      <Tab.Pane eventKey="first">
                        <Row>
                          {projectA.map((project, index) => {
                            return <ProjectCard key={index} {...project} />;
                          })}
                        </Row>
                        <Row className="paper paperStyle">
                          <h3>
                            Scribble Me This is a full-stack JavaScript Game
                          </h3>
                          <p>
                            leveraging React, Redux, Node.js for the front end,
                            and Socket.IO as well as ML5 with tensorflow for the
                            back end.
                          </p>
                          <h3>For a more in depth look</h3>
                          <p>
                            watch our promotional video on{" "}
                            <a href="https://www.youtube.com/watch?v=eNn01r9uogw">
                              YouTube
                            </a>
                            !
                            <br />
                            You can also check out our github at{" "}
                            <a href="https://github.com/Scribble-Me-This/2022-Scribble-Me-This">
                              Scribble Me This
                            </a>
                          </p>
                        </Row>
                      </Tab.Pane>
                      <Tab.Pane eventKey="second">
                        <Row>
                          {projectB.map((project, index) => {
                            return <ProjectCard key={index} {...project} />;
                          })}
                        </Row>

                        <Row>
                          <h3>
                            theLazyRedditor is an integrated Chrome extention
                          </h3>
                          <p>
                            built with tensorflow.js and the Reddit API. It
                            allows for easy browsing of the Reddit platform
                            using only your hands.
                          </p>
                          <h3>For a more in depth look</h3>
                          <p>
                            Eventually I hope to present this app as a full
                            suite accessability option for those with limited
                            mobility.
                            <br />
                            Check out the github at{" "}
                            <a href="https://github.com/onsenkame/theLazyRedditor">
                              theLazyRedditor
                            </a>
                          </p>
                        </Row>
                      </Tab.Pane>
                      <Tab.Pane eventKey="third">
                        <Row>
                          {projectC.map((project, index) => {
                            return <ProjectCard key={index} {...project} />;
                          })}
                        </Row>
                        <Row>
                          <h3>
                          Pokemon TCG Shop is a full-stack e-commerce application
                          </h3>
                          <p>
                          built with React, Redux, Node.js, Express.js, and PostgreSQL and
              deployed on Heroku. We used pure CSS to style the
              website. This mock online storefront offers up to date information on all Pokemon trading cards courtesy of the Pokemon TCG API.
                          </p>
                          <h3>For a more in depth look</h3>
                          <p>
                            visit the site at <a href="https://cancer-grace-shopper.herokuapp.com/home">Pokemon TCG Shop</a>
                            <br />
                            You can also check out our github at{" "}
                            <a href="https://github.com/GS-Pokemon-TCG-Store/grace-shopper">
                              GS-Pokemon-TCG-Store
                            </a>
                          </p>
                        </Row>
                      </Tab.Pane>
                    </Tab.Content>
                  </Tab.Container>
                </div>
              )}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
      <img className="background-image-right" src={colorSharp2}></img>
    </section>
  );
};
