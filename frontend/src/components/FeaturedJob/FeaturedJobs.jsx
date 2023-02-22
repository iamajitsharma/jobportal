import jobData from "../../assets/data/jobs";
import FeaturedJobList from "./FeaturedJobList";

const FeaturedJobs = () => {
  return (
    <>
      {jobData.map((job) => (
        <FeaturedJobList key={job.id} job={job} />
      ))}
    </>
  );
};

export default FeaturedJobs;
