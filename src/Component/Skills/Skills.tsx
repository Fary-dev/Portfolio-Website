import LineProgress from "./LineProgress";
import Progress from "./Progress";
import styled from "styled-components";

interface SkillsModel {
  t: any;
}
const SkillsList = [
  {
    name: "dart",
    percent: 90,
    color: "#07af9b",
  },
  {
    name: "flutter",
    percent: 95,
    color: "#0e4f86",
  },
  {
    name: "html",
    percent: 95,
    color: "#c7592a",
  },
  {
    name: "scss",
    percent: 80,
    color: "#72445e",
  },
  {
    name: "javascript",
    percent: 70,
    color: "#ccba20",
  },
  {
    name: "react",
    percent: 60,
    color: "#54b6d1",
  },
  {
    name: "github",
    percent: 95,
    color: "#000",
  },
];

const Skills = ({ t }: SkillsModel) => {
  return (
    <Body>
      <Container>
        <Space></Space>
        <Symbol
          src={require("../../Assets/skills.png")}
          alt="skills symbol"
        ></Symbol>
        <Title>{t("skills")}</Title>
        <Column>
          {SkillsList.map((e, idx) => (
            <LineProgress
              key={idx}
              title={e.name}
              percent={e.percent}
              progress={e.color}
            />
          ))}
        </Column>
        <Grid>
          {SkillsList.map((e, i) => (
            <Progress
              key={i}
              percent={e.percent ?? 0}
              id={i + 1}
              title={e.name}
              color={e.color}
            />
          ))}
        </Grid>
      </Container>
    </Body>
  );
};

export default Skills;

const Body = styled.div`
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
  top: 95px;
  width: clamp(45px, 4.2vw, 47px);
  filter: invert(${({ theme }) => theme.invert});
  opacity: ${({ theme }) => theme.opacity};
`;
const Title = styled.h5`
  color: ${({ theme }) => theme.text.color};
  position: absolute;
  top: clamp(145px, 7vw, 150px);
  opacity: ${({ theme }) => theme.opacity};
`;
const Column = styled.div`
  display: flex;
  flex-direction: column;
  @media (min-width: 750px) {
    display: none;
  }
`;
const Grid = styled.div`
  max-width: 1400px;

  display: grid;
  grid-template-rows: repeat(3, 1fr);
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 5vw 10vw;
  padding: 0 30px;
  @media (max-width: 750px) {
    display: none;
  }
`;
