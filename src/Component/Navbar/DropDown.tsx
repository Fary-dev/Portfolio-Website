import styled from "styled-components";

interface DropdownProps {
  active: boolean;
  t: any;
  HandleChangeLng: any;
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

function DropDown({ active, t, HandleChangeLng }: DropdownProps) {
  return (
    <DropDownList
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
            src={require(`../../Assets/${item.image}.png`)}
            alt={item.language}
          ></Image>{" "}
          {t(item.language)}
        </DropDownListItem>
      ))}
    </DropDownList>
  );
}

export default DropDown;

const DropDownList = styled.ul`
  display: var(--display);
  position: absolute;
  list-style: none;
  text-align: start;
  width: 9rem;
  right: 50px;
`;
const DropDownListItem = styled.li`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  background-color: ${({ theme }) => theme.body.container};
  color: ${({ theme }) => theme.text.color};
  cursor: pointer;
  transition: 0.2s;
  &:hover {
    // background-color: ${({ theme }) => theme.body.containerLight};
    opacity: 0.6;
  }
`;
const Image = styled.img`
  margin: 10px;
  height: 20px;
  width: 20px;
`;
