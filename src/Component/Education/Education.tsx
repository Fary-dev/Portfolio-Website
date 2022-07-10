import EducationWidget from "./EducationWidget";
import styled from "styled-components";

interface EducationModel {
  thm: any;
  t: any;
}
const EducationList = [
  {
    title: "school",
    date: "1993 - 2004",
    description: "elem-ms",
  },
  {
    title: "osku university of iran",
    date: "2006 - 2009",
    description: "software computer",
  },
  {
    title: "firoozkuh university of iran",
    date: "2011 - 2014",
    description: "bachelor of software engineering",
  },
  {
    title: "self study",
    date: "2021 - 2022",
    description: "Dart and Flutter",
  },
  {
    title: "self study",
    date: "2022 - ",
    description: "JavaScript and React",
  },
];

const Education = ({ thm, t }: EducationModel) => {
  return (
    <Body>
      <Container>
        <Space></Space>
        <Symbol
          src={require("../../Assets/education.png")}
          alt="education symbol"
        ></Symbol>
        <Title>{t("education")}</Title>
        <ListViewBuilder>
          {EducationList.map((e, idx) => (
            <EducationWidget
              direction={idx + 1}
              id={idx}
              title={t(e.title)}
              date={e.date}
              details={t(e.description)}
              key={idx}
            />
          ))}
        </ListViewBuilder>
        <Row>
          <Left>
            {" "}
            {EducationList.filter((element, idx) => idx % 2 === 0).map(
              (e, idx) => (
                <EducationWidget
                  direction={idx + 1}
                  id={idx}
                  title={t(e.title)}
                  date={e.date}
                  details={t(e.description)}
                  key={idx}
                />
              )
            )}
          </Left>
          <Center>
            <Point></Point>
            <Point></Point>
            <Point></Point>
            <Point></Point>
            <Point></Point>
          </Center>
          <Right>
            {EducationList.filter((element, idx) => idx % 2 !== 0).map(
              (e, idx) => (
                <EducationWidget
                  direction={-(idx + 1)}
                  id={idx}
                  title={t(e.title)}
                  date={e.date}
                  details={t(e.description)}
                  key={idx}
                />
              )
            )}
          </Right>
        </Row>
      </Container>
    </Body>
  );
};

export default Education;

const Body = styled.body`
  background-color: ${({ theme }) => theme.body.background};
  overflow: hidden;
  padding: 0 10px;
`;
const Container = styled.div`
  display: flex;
  flex-direction: column;
  background-color: ${({ theme }) => theme.body.containerLight};
  min-height: 100vh;
  width: 100%;
  justify-content: center;
  align-items: center;
  position: relative;
`;
const Space = styled.div`
  top: 0;
  display: block;
  height: 157px;
  width: 100%;
`;
const Symbol = styled.img`
  position: absolute;
  top: 70px;
  width: clamp(65px, 4.2vw, 100px);
  filter: invert(${({ theme }) => theme.invert});
  opacity: ${({ theme }) => theme.opacity};
`;
const Title = styled.h5`
  color: ${({ theme }) => theme.text.color};
  position: absolute;
  top: clamp(135px, 7vw, 150px);
  opacity: ${({ theme }) => theme.opacity};
`;
const ListViewBuilder = styled.div`
  max-width: 100%;
  min-width: 10%;
  width: 90%;
  display: block;
  max-width: 1400px;
  @media (min-width: 750px) {
    display: none;
  }
`;
const Row = styled.div`
  max-width: 100%;
  min-width: 10%;
  width: 90%;
  display: none;
  max-width: 1400px;
  justify-content: center;
  align-items: center;
  @media (min-width: 750px) {
    display: flex;
  }
`;
const Left = styled.div`
  max-width: 100%;
  min-width: 10%;
  width: 50%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 80px;
  margin: 50px 50px 0 0px;
  padding-bottom: 50px;
`;
const Center = styled.div`
  display: flex;
  flex-direction: column;
  height: 700px;
  margin: 0 auto 0 auto;
  justify-content: space-around;
  align-items: center;
  content: "";
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  width: 1px;
  background-image: linear-gradient(
    0deg,
    ${({ theme }) => theme.body.container},
    ${({ theme }) => theme.body.container} 50%,
    transparent 50%,
    transparent 100%
  );
  background-size: 2px 20px;
  padding: 3px;
`;
const Right = styled.div`
  max-width: 100%;
  min-width: 10%;
  width: 50%;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  margin: auto 0 auto 50px;
  gap: 80px;
`;
const Point = styled.div`
  height: 5px;
  width: 65px;
  box-shadow: 1px 1px 1px 0 rgba(255, 208, 1, 0.2);
  &:nth-child(even) {
    margin-left: 62px;
    background-image: linear-gradient(
      270deg,
      ${({ theme }) => theme.body.container},
      ${({ theme }) => theme.body.container} 10%,
      transparent 100%,
      transparent 100%
    );
  }
  &:nth-child(odd) {
    margin-right: 63px;
    background-image: linear-gradient(
      90deg,
      ${({ theme }) => theme.body.container},
      ${({ theme }) => theme.body.container} 10%,
      transparent 100%,
      transparent 100%
    );
  }
`;
