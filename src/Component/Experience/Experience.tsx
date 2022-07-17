import ExperienceWidget from "./ExperienceWidget";
import styled from "styled-components";
import SymbolExperience from "../../Assets/experience.webp";

interface ExperienceModel {
  t: any;
}
const ExperienceList = [
  {
    title: "Geschäftsführer einer Computer Firma",
    date: "2010 - 2011",
    details:
      "Computer Reparatur, Grafik Diesign, Kundenberatung, Verkauf, Computer",
  },
  {
    title: "Bankleiter, Post Bank Iran",
    date: "2013 – 2017",
    details: "Kontoführung, Kapitalanlage, Kundenberatung",
  },
  {
    title: "Worked Independently",
    date: "2018 – 2021",
    details: "Worked Independently",
  },
  {
    title: "Freelance",
    date: "2021 – current",
    details: "Frontend Developer, Dart with Flatter Framework",
  },
];

const Experience = ({ t }: ExperienceModel) => {
  return (
    <Body>
      <Container>
        <Space></Space>
        <Symbol src={SymbolExperience} alt="experience symbol"></Symbol>
        <Title>{t("experience")}</Title>
        <ListBuilder>
          {ExperienceList.map((e, idx) => (
            <ExperienceWidget
              key={idx}
              id={idx}
              title={t(e.title)}
              date={e.date}
              details={t(e.details)}
            />
          ))}
        </ListBuilder>
      </Container>
    </Body>
  );
};

export default Experience;
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
  top: 85px;
  width: clamp(50px, 4.2vw, 70px);
  filter: invert(${({ theme }) => theme.invert});
  opacity: ${({ theme }) => theme.opacity};
`;
const Title = styled.h5`
  color: ${({ theme }) => theme.text.color};
  position: absolute;
  top: clamp(145px, 7vw, 150px);
  opacity: ${({ theme }) => theme.opacity};
`;
const ListBuilder = styled.div`
  max-width: 1400px;
  display: grid;
  grid-template-rows: repeat(auto-fit, 1fr);
  grid-template-columns: 1fr;
  @media (min-width: 750px) {
    grid-template-rows: repeat(2, 1fr);
    grid-template-columns: repeat(2, 1fr);
    padding: 0 20px;
  }
  @media (min-width: 970px) {
    grid-template-rows: repeat(2, 1fr);
    grid-template-columns: repeat(2, 1fr);
    padding: 0 20px;
  }
  @media (min-width: 1170px) {
    grid-template-rows: 1fr;
    grid-template-columns: repeat(4, 1fr);
    padding: 0 20px;
  }
`;
