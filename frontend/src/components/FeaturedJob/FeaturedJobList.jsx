import React from "react";
import classes from "./FeaturedJob.module.scss";
import { BiRupee } from "react-icons/bi";
import { GoLocation } from "react-icons/go";
import { BsLightning } from "react-icons/bs";
import { Col, Button } from "reactstrap";
import { Link } from "react-router-dom";

const FeaturedJobList = ({ job }) => {
  const {
    id,
    jobTitle,
    salary,
    jobType,
    jobLocation,
    experience,
    companyLogo,
  } = job;
  return (
    <div className={classes.featuredJobList}>
      <Col lg="4">
        <div className={classes.jobTitle}>
          <Link to={id}>
            <h2>{jobTitle}</h2>
          </Link>
          <div className={classes.featureJob_details}>
            <ul>
              <li>
                <span>
                  <GoLocation />
                </span>
                {jobLocation}
              </li>

              <li>
                <span>
                  <BsLightning />
                </span>
                {experience}
              </li>
            </ul>
          </div>
        </div>
      </Col>
      <Col lg="2">
        <div className={classes.salary}>
          <h4>
            <span>
              <BiRupee />
            </span>
            {salary} /month
          </h4>
        </div>
      </Col>
      <Col lg="2">
        <div className={classes.jobType}>
          <h4>{jobType}</h4>
        </div>
      </Col>
      <Col lg="2">
        <div className={classes.companyLogo}>
          <img src={companyLogo} alt="" />
        </div>
      </Col>
      <Col lg="2" className={classes.apply_button}>
        <Button className={classes.primary__btn}>
          <Link to={id}>Apply Now</Link>
        </Button>
      </Col>
    </div>
  );
};

export default FeaturedJobList;
