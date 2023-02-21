import React from "react";
import classes from "./FeaturedCandidate.scss";
import { Card, CardBody, CardTitle, CardImg } from "reactstrap";

const CandidateCard = ({ candidates }) => {
  const {
    id,
    fullName,
    ProfileImg,
    experience,
    CurrentCTC,
    NoticePeriod,
    HomeTown,
    Relocate,
  } = candidates;

  return (
    <div className={classes.candidate_Card}>
      <Card>
        <CardBody>
          <CardImg alt="" src={ProfileImg} width="100%" />
          <CardTitle>{fullName}</CardTitle>
        </CardBody>
      </Card>
    </div>
  );
};

export default CandidateCard;
