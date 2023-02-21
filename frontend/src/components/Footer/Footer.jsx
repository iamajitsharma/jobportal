import React from "react";
import classes from "./Footer.module.scss";
import { NavLink } from "react-router-dom";
const Footer = () => {
  const employerLinks = [
    {
      path: "#",
      display: "Post a job",
    },
    {
      path: "#",
      display: "Pricing",
    },
    {
      path: "#",
      display: "Terms & Conditions",
    },
    {
      path: "#",
      display: "Privacy Policy",
    },
  ];

  const copyRightYear = new Date().getFullYear();
  return (
    <footer className={classes.footer}>
      <div className={classes.container}>
        <div className={classes.footer_one}>
          <div className={classes.footer_Heading}>
            <h4>Recent Job</h4>
          </div>
          <ul className={classes.employer_links}>
            {employerLinks.map((item, index) => (
              <li key={index}>
                <NavLink to={item.path}>{item.display}</NavLink>
              </li>
            ))}
          </ul>
        </div>
        <div className={classes.footer_two}>
          <div className={classes.footer_Heading}>
            <h4>Employer</h4>
          </div>
          <ul className={classes.employer_links}>
            {employerLinks.map((item, index) => (
              <li key={index}>
                <NavLink to={item.path}>{item.display}</NavLink>
              </li>
            ))}
          </ul>
        </div>
        <div className={classes.footer_three}>
          <div className={classes.footer_Heading}>
            <h4>Work with us</h4>
          </div>
          <ul className={classes.employer_links}>
            {employerLinks.map((item, index) => (
              <li key={index}>
                <NavLink to={item.path}>{item.display}</NavLink>
              </li>
            ))}
          </ul>
        </div>
        <div className={classes.footer_four}>
          <div className={classes.footer_Heading}>
            <h4>Know us</h4>
          </div>
          <ul className={classes.employer_links}>
            {employerLinks.map((item, index) => (
              <li key={index}>
                <NavLink to={item.path}>{item.display}</NavLink>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className={classes.copyright}>
        <p>Developed by Ajit Sharma © {copyRightYear}. All rights Reserved</p>
      </div>
    </footer>
  );
};

export default Footer;
