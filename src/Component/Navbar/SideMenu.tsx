import styled from "styled-components";
import BurgerIcon from "./BurgerIcon";
import { NavList } from "./Navbar";
import { Link } from "react-router-dom";

interface Props {
  open: boolean;
  setOpen: (open: boolean) => void;
}
interface PropsStyle {
  open: boolean;
}
function SideMenu({ open, setOpen }: Props) {
  return (
    <SidebarMenu open={open} onClick={() => setOpen(!open)}>
      <BurgerIcon open={open} setOpen={setOpen} />
      {NavList.map((item) => (
        <Link to={item.path} key={item.id} style={LinkStyled}>
          <ListBuilder date-text={item.title}>{item.title}</ListBuilder>
        </Link>
      ))}
    </SidebarMenu>
  );
}

export default SideMenu;

const SidebarMenu = styled.div<PropsStyle>`
  position: absolute;
  display: ${({ open }) => (open ? "flex" : "none")};
  height: 100vh;
  width: 100vw;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  z-index: 3;
  background: ${({ theme }) => theme.body.container};
  @media (min-width: 992px) {
    display: none;
  }
`;
const ListBuilder = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: ${({ theme }) => theme.text.color};
  font-size: 1.8rem;
  padding: 2vh;
  text-transform: capitalize;
  opacity: 0.5;
  transition: 0.3s;
  &:hover {
    opacity: 1;
    text-shadow: 2px -2px 10px ${({ theme }) => theme.shadow};
  }
`;
const LinkStyled = {
  textDecoration: "none",
};
