import styled from "styled-components";

interface Props {
  open: boolean;
  setOpen: (open: boolean) => void;
}
interface PropsStyle {
  open: boolean;
}

function BurgerIcon({ open, setOpen }: Props) {
  return (
    <StyledBurger open={open} onClick={() => setOpen(!open)}>
      <div />
      <div />
      <div />
    </StyledBurger>
  );
}

export default BurgerIcon;

const StyledBurger = styled.button<PropsStyle>`
  width: 1.8rem;
  height: 1.8rem;
  position: fixed;
  top: 20px;
  right: 35px;
  z-index: 2;
  display: none;
  border: none;
  cursor: pointer;
  background: transparent;
  animation: rotateIcon 1s linear forwards;
  &:focus {
    outline: none;
  }
  @media (max-width: 991px) {
    display: flex;
    justify-content: space-around;
    flex-flow: column nowrap;
  }
  div {
    width: 1.6rem;
    height: 0.25rem;
    background-color: ${({ open }) => (open ? "#7e7e7e" : "#b59707")};
    border-radius: 10px;
    transform-origin: 1px;
    transition: all 0.3s linear;
    position: relative;
    transform: translateX(90px);
    &:nth-child(1) {
      transform: ${({ open }) => (open ? "rotate(45deg)" : "rotate(0)")};
    }
    &:nth-child(2) {
      transform: ${({ open }) => (open ? "translateX(100%)" : "translateX(0)")};
      opacity: ${({ open }) => (open ? 0 : 1)};
    }
    &:nth-child(3) {
      transform: ${({ open }) => (open ? "rotate(-45deg)" : "rotate(0)")};
    }
  }
`;
