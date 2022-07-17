import styled from "styled-components";

interface DropdownProps {
  active: boolean;
  t: any;
  HandleChangeLng: any;
  position: boolean;
}
interface PropsStyle {
  position: boolean;
}

const dropDownItems = [
  {
    id: 1,
    language: "English",
    image: "en",
  },
  {
    id: 2,
    language: "Deutsch",
    image: "de",
  },
];

function DropDown({ position, active, t, HandleChangeLng }: DropdownProps) {
  return (
    <DropDownList
      position={position}
      style={{ "--display": active ? "block" : "none" } as React.CSSProperties}
    >
      {dropDownItems.map((item) => (
        <DropDownListItem
          key={item.id}
          onClick={() => {
            HandleChangeLng(item.image);
          }}
        >
          <Image
            src={require(`../../Assets/${item.image}.webp`)}
            alt={item.language}
          ></Image>
          {t(item.language)}
        </DropDownListItem>
      ))}
    </DropDownList>
  );
}

export default DropDown;

const DropDownList = styled.ul<PropsStyle>`
  display: none;
  position: ${({ position }) => (position ? "absolute" : "relative")};
  list-style: none;
  text-align: start;
  width: 9rem;
  right: 50px;
  padding-left: 80px;
  display: var(--display);
  @media (min-width: 992px) {
    padding-top: 20px;
    padding-left: 20px;
  }
`;
const DropDownListItem = styled.li`
  display: flex;
  align-items: center;
  justify-content: flex-start;

  color: ${({ theme }) => theme.text.color};
  cursor: pointer;
  transition: 0.2s;
  &:hover {
    background-color: ${({ theme }) => theme.body.container};
    opacity: 0.9;
  }
  @media (min-width: 992px) {
    background-color: ${({ theme }) => theme.body.background};
  }
`;
const Image = styled.img`
  margin: 10px;
  height: 20px;
  width: 20px;
`;
