import classes from "../styles/Home.module.scss";
import { Container, Row, Col } from "reactstrap";
import heroImg from "./../assets/images/homeBg-01.svg";
import { Link } from "react-router-dom";
import FeaturedJobs from "../components/FeaturedJob/FeaturedJobs";
import SectionTitle from "../shared/SectionTitle";
import FeaturedCandidate from "../components/FeaturedCandidate/FeaturedCandidate";
import SearchBar from "../shared/SearchBar";
const Home = (props) => {
  return (
    <>
      <section className={classes.hero}>
        <Container>
          <Row className="d-flex align-items-center">
            <Col lg="6">
              <div className={classes.hero_content}>
                <h1>India's first IT Jobsite</h1>
                <p>
                  Lorem, ipsum dolor sit amet consectetur adipisicing
                  elit.aesentium dolore maxime commodi?
                </p>
              </div>
            </Col>
            <Col lg="6">
              <div className={classes.hero_img}>
                <img src={heroImg} alt="Home Hero" />
              </div>
            </Col>
          </Row>
          <SearchBar />
        </Container>
      </section>

      {/* Featured Job Section Start */}
      <section>
        <Container>
          <Row>
            <Col lg="12">
              <SectionTitle Title={"Featured Jobs"} />
            </Col>
            <FeaturedJobs />
          </Row>
        </Container>
      </section>

      {/* Featured Candidate List Start */}
      <Container>
        <Row>
          <Col lg="12">
            <SectionTitle Title={"Featured Candiates"} />
          </Col>
          <FeaturedCandidate />
        </Row>
      </Container>
    </>
  );
};

export default Home;
