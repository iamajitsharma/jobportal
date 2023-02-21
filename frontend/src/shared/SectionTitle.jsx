import classes from "../styles/style.module.scss";

const SectionTitle = ({ Title }) => {
  return <h2 className={classes.section_title}>{Title}</h2>;
};

export default SectionTitle;
