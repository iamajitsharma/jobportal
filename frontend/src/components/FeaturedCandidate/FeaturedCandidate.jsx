import React from "react";
import CandidateCard from "./CandidateCard";
import candidateData from "../../assets/data/candidateData";
import { Col } from "reactstrap";
import Slider from "react-slick";

const FeaturedCandidate = () => {
  const setting = {
    dot: true,
    infinite: true,
    autoPlay: true,
    speed: 1000,
    swipeToSlide: true,
    autoPlaySpeed: 2000,
    slidesToShow: 4,

    responsive: [
      {
        breakpoint: 992,
        setting: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 576,
        setting: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <>
      <Slider {...setting}>
        {candidateData.map((candidate) => (
          <Col lg="3" key={candidate.id}>
            <CandidateCard candidates={candidate} />
          </Col>
        ))}
      </Slider>
    </>
  );
};

export default FeaturedCandidate;
