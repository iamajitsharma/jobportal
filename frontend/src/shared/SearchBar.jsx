import React, { useState } from "react";
import classes from "../styles/style.module.scss";
import { Container, Col, Row, Button } from "reactstrap";
import { BiBriefcase, BiSearchAlt2, BiRupee } from "react-icons/bi";
import { CiLocationOn } from "react-icons/ci";
const SearchBar = () => {
  const [salaryRange, setsalaryRange] = useState(0);

  const salaryRangeHandler = (event) => {
    setsalaryRange(event.target.value);
    console.log(salaryRange);
  };

  return (
    <Row className={classes.search_bar}>
      <Col lg="3" className="p-0">
        <div className={classes.search_form}>
          <BiBriefcase />
          <input
            type="text"
            className="form-control"
            required
            placeholder="Job title, Company"
          />
        </div>
      </Col>
      <Col lg="3" className="p-0">
        <div className={classes.search_form}>
          <CiLocationOn />
          <input
            type="text"
            className="form-control"
            required
            placeholder="Location"
          />
        </div>
      </Col>
      <Col lg="3" className="p-0">
        <div className={classes.search_form}>
          <BiRupee />
          <input
            value={salaryRange}
            onChange={salaryRangeHandler}
            type="range"
            min={0}
            max={500000}
            className="form-control"
            required
            placeholder="CTC"
          />
        </div>
      </Col>
      <Col lg="3" className="p-0">
        <Button type="submit" className={classes.search_btn}>
          <BiSearchAlt2 />
          Find job
        </Button>
      </Col>
    </Row>
  );
};

export default SearchBar;
