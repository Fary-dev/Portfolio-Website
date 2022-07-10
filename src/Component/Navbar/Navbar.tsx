import "./Navbar.css";
import { Link } from "react-router-dom";
import styled from "styled-components";
import React from "react";

interface NavbarDate {
  thm: any;
  toggleTheme: any;
  t: any;
  HandleChangeLng: any;
  lng: string;
}

const NavList = [
  {
    id: 1,
    title: "about me",
    path: "/about",
    className: "navItem",
  },
  {
    id: 2,
    title: "projects",
    path: "/projects",
    className: "navItem",
  },
  {
    id: 3,
    title: "education",
    path: "/education",
    className: "navItem",
  },
  {
    id: 4,
    title: "experience",
    path: "/experience",
    className: "navItem",
  },
  {
    id: 5,
    title: "skills",
    path: "/skills",
    className: "navItem",
  },
  {
    id: 6,
    title: "contact",
    path: "/contact",
    className: "navItem",
  },
];

function NavBar({ thm, toggleTheme, t, HandleChangeLng, lng }: NavbarDate) {
  return (
    <>
      <Nav>
        <Link to="/" style={{ LinkStyled } as React.CSSProperties}>
          <Row>
            <Logo
              src={require("../../Assets/logo.png")}
              alt="Logo Faramarz Bakhsheshi"
            ></Logo>
            <H6>Faramarz Bakhsheshi</H6>
          </Row>
        </Link>
        <Menu>
          {NavList.map((item) => (
            <MenuItem className={item.className} key={item.id}>
              <Link to={item.path}>{t(item.title)}</Link>
            </MenuItem>
          ))}
        </Menu>
      </Nav>

      <nav className="navbar fixed-top navbar-expand-lg p-2" data-theme={thm}>
        <div className="container-fluid py-1 px-3">
          <Link to="/" className="navbar-brand">
            <div className="br d-flex align-items-center">
              <img
                className="m-0 p-0"
                src={require("../../Assets/logo.png")}
                width="40"
                alt="Logo Faramarz Bakhsheshi"
              />
              <h5 className="d-none d-sm-block m-0">Faramarz Bakhsheshi</h5>
            </div>
          </Link>
          <button
            className="navbar-toggler p-0"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ms-auto">
              <li className="nav-item p-0 pt-2 pt-lg-0 my-auto mx-1">
                <Link to="/about" className="nav-link py-2 p-lg-0 h6 m-0">
                  {t("about me")}
                </Link>
              </li>
              <li className="nav-item my-auto mx-1">
                <Link to="/projects" className="nav-link py-2 p-lg-0 h6 m-0">
                  {t("projects")}
                </Link>
              </li>
              <li className="nav-item my-auto mx-1">
                <Link to="/education" className="nav-link py-2 p-lg-0 h6 m-0">
                  {t("education")}
                </Link>
              </li>
              <li className="nav-item my-auto mx-1">
                <Link to="/experience" className="nav-link py-2 p-lg-0 h6 m-0">
                  {t("experience")}
                </Link>
              </li>
              <li className="nav-item my-auto mx-1">
                <Link to="/skills" className="nav-link py-2 p-lg-0 h6 m-0">
                  {t("skills")}
                </Link>
              </li>
              <li className="nav-item my-auto mx-1">
                <Link to="/contact" className="nav-link py-2 p-lg-0 h6 m-0">
                  {t("contact")}
                </Link>
              </li>
              <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle"
                  href="#lng"
                  id="navbarDropdownMenuLink"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  <img
                    className="mb-2"
                    height="20"
                    width="20"
                    src={lng}
                    alt="language English"
                  />
                </a>
                <ul
                  className="drop-down dropdown-menu dropdown-menu-end"
                  aria-labelledby="navbarDropdownMenu"
                >
                  <li>
                    <a
                      className="drop-down-text dropdown-item"
                      onClick={() => {
                        HandleChangeLng("en");
                      }}
                      href="#en"
                    >
                      <img
                        className="me-4"
                        src={require("../../Assets/en.png")}
                        height="20"
                        width="20"
                        alt=""
                      />
                      {"English"}
                    </a>
                  </li>
                  <li>
                    <a
                      className="drop-down-text dropdown-item"
                      onClick={() => {
                        HandleChangeLng("de");
                      }}
                      href="#de"
                    >
                      <img
                        className="me-4"
                        src={require("../../Assets/de.png")}
                        height="20"
                        width="20"
                        alt=""
                      />
                      {"Deutsch"}
                    </a>
                  </li>
                </ul>
              </li>
              <a href="#theme" className="m-0 m-lg-auto" onClick={toggleTheme}>
                <div className="container dark-theme p-0 m-0 text-center">
                  <img
                    className="dark-theme-icon "
                    width="30"
                    height="30"
                    src={require(`../../Assets/${thm}.png`)}
                    alt="dark mode"
                  />
                </div>
              </a>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}

export default NavBar;

const Nav = styled.nav`
  position: fixed;
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  padding: 5px 16px;
  border: 10px solid ${({ theme }) => theme.body.background};
  background: ${({ theme }) => theme.body.containerLight};
  border-radius: 0 0 20px 20px;
  z-index: 1;
`;
const Row = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;
const Logo = styled.img`
  width: 40px;
  height: 40px;
`;
const H6 = styled.h6`
  color: ${({ theme }) => theme.text.color};
  display: none;
  padding-left: 10px;
  margin: 0;
  @media (min-width: 577px) {
    display: block;
  }
`;
const Menu = styled.ul`
  list-style-type: none;
  display: none;
  align-items: center;
  justify-content: center;
  gap: 10px;

  @media (min-width: 992px) {
    display: flex;
  }
`;
const MenuItem = styled.li`
  padding-top: 0.6rem;
  font-weight: 400;
  a {
    color: ${({ theme }) => theme.text.color};
    text-decoration: none;
    opacity: 0.6;
    transition: 0.2s;
    &:hover {
      opacity: 1;
    }
  }
`;

const LinkStyled = styled(Link)`
  a {
    color: ${({ theme }) => theme.text.color};
    text-decoration: none;
  }
`;
