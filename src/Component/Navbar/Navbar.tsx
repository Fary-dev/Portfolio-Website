import { useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import DropDown from "./DropDown";
import BurgerIcon from "./BurgerIcon";
import SideMenu from "./SideMenu";

interface NavbarDate {
  thm: any;
  toggleTheme: any;
  t: any;
  HandleChangeLng: any;
  lng: string;
}

export const NavList = [
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
  const [DropDownShow, setDropDownShow] = useState(false);
  const [open, setOpen] = useState(false);

  return (
    <>
      <AppBar>
        <Nav>
          <Link
            to="/"
            style={LinkStyled}
            onClick={() => {
              setDropDownShow(false);
            }}
          >
            <Row>
              <Logo
                src={require("../../Assets/logo.png")}
                alt="Logo Faramarz Bakhsheshi"
              ></Logo>
              <H5>Faramarz Bakhsheshi</H5>
            </Row>
          </Link>
          <Row>
            <BurgerIcon open={open} setOpen={setOpen} />
          </Row>
          <Menu>
            {NavList.map((item) => (
              <MenuItem
                className={item.className}
                key={item.id}
                onClick={() => {
                  setDropDownShow(false);
                }}
              >
                <Link to={item.path}>{t(item.title)}</Link>
              </MenuItem>
            ))}
            <MenuItem>
              <Image
                onClick={() => {
                  !DropDownShow
                    ? setDropDownShow(true)
                    : setDropDownShow(false);
                }}
                src={lng}
              ></Image>
            </MenuItem>
            <MenuItem>
              <Center>
                <ThemeIcon
                  onClick={toggleTheme}
                  src={require(`../../Assets/${thm}.png`)}
                ></ThemeIcon>
              </Center>
            </MenuItem>
          </Menu>
        </Nav>
        <Div
          onClick={() => {
            setDropDownShow(false);
          }}
        >
          <DropDown
            active={DropDownShow}
            t={t}
            HandleChangeLng={HandleChangeLng}
          />
        </Div>
      </AppBar>
      <SideMenu open={open} setOpen={setOpen} />
    </>
  );
}
export default NavBar;

const AppBar = styled.div`
  position: fixed;
  width: 100%;
  z-index: 1;
`;
const Nav = styled.nav`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  padding: 5px 16px;
  border: 10px solid ${({ theme }) => theme.body.background};
  background: ${({ theme }) => theme.body.containerLight};
  border-radius: 0 0 20px 20px;
`;
const LinkStyled = {
  textDecoration: "none",
};
const Row = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;
const Logo = styled.img`
  width: 40px;
  height: 40px;
`;
const H5 = styled.h5`
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
const Image = styled.img`
  height: 25px;
  width: 25px;
  cursor: pointer;
`;
const Div = styled.div``;
const Center = styled.div`
  padding-top: 3px;
  display: flex;
  align-items: center;
  justify-content: center;
`;
const ThemeIcon = styled.img`
  height: 30px;
  width: 30px;
`;
