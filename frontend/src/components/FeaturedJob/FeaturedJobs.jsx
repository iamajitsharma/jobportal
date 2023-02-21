import React from "react";
import jobData from "../../assets/data/jobs";
import JobCard from "../../shared/JobCard";
import { Col } from "reactstrap";

const FeaturedJobs = () => {
  return (
    <>
      {jobData.map((job) => (
        <Col lg="3" key={job.id} className="mb-4">
          <JobCard job={job} />
        </Col>
      ))}
    </>
  );
};

export default FeaturedJobs;
