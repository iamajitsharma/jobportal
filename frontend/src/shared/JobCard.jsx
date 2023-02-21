import classes from "./JobCard.module.scss";
import { Link } from "react-router-dom";
import { Button } from "reactstrap";
import { TbCurrencyRupee } from "react-icons/tb";
const Card = ({ job }) => {
  const { id, jobTitle, salary, jobLocation, experience, companyLogo } = job;

  return (
    <div className={classes.jobCard}>
      <div className={classes.jobHeader}>
        <div className={classes.title}>
          <h4>
            <Link to={`job/${id}`}>{jobTitle}</Link>
          </h4>
        </div>
        <div className={classes.companyName}>
          <img src={companyLogo} alt="" />
        </div>
      </div>
      <div className={classes.jobBody}>
        <h4 className={classes.jobLocation}>
          <i class="ri-map-pin-line"></i>
          {jobLocation}
        </h4>
        <h4 className={classes.salary}>
          <TbCurrencyRupee />
          {salary}
        </h4>
      </div>
    </div>
  );
};

export default Card;
