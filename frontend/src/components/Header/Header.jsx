import React, { useRef, useEffect } from "react";
import logo from "../../assets/images/logo.png";
import classes from "./Header.module.scss";
import { Link, NavLink } from "react-router-dom";
import { Container, Row, Button } from "reactstrap";

const navLinks = [
  {
    path: "/jobs",
    display: "Search Job",
  },
  {
    path: "/internship",
    display: "Internship",
  },
  {
    path: "/employer",
    display: "Post a job",
  },
];

const Header = () => {
  const headerRef = useRef(null);
  useEffect(() => {
    stickyHeaderHandler();
    return window.removeEventListener("scroll", stickyHeaderHandler);
  });

  const stickyHeaderHandler = () => {
    window.addEventListener("scroll", () => {
      if (
        document.body.scrollTop > 80 ||
        document.documentElement.scrollTop > 80
      ) {
        headerRef.current.classList.add(`${classes.sticky__header}`);
      } else {
        headerRef.current.classList.remove(`${classes.sticky__header}`);
      }
    });
    console.log(headerRef);
  };
  return (
    <header className={classes.header} ref={headerRef}>
      <Container>
        <Row>
          <div className={classes.nav_wrapper}>
            <div className={classes.logo}>
              <Link to={"/"}>
                <img src={logo} alt="Logo" />
              </Link>
            </div>
            <div className={classes.navigation}>
              <ul className={classes.menuList}>
                {navLinks.map((item, index) => (
                  <li key={index}>
                    <NavLink to={item.path}>{item.display}</NavLink>
                  </li>
                ))}
              </ul>
              <div className={classes.nav_right}>
                <div className={classes.nav_btns}>
                  <Button
                    className={`${classes.btn} ${classes.secondary__btn}`}
                  >
                    <Link to="/login">Login</Link>
                  </Button>
                  <Button className={`${classes.btn} ${classes.primary__btn}`}>
                    <Link to="/register">Register</Link>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </Row>
      </Container>
    </header>
  );
};

export default Header;
