import styled from "styled-components";
import ProjectWidget from "./ProjectWidget";
import SymbolProjects from "../../Assets/projects.webp";

interface ProjectsModel {
  t: any;
}
const projectsList = [
  {
    device: "website",
    title: "restaurant website",
    subtitle: "Website with Dart",
    description:
      "This Project I have written with Dart programming language and flutter framework, fully Responsive websites!",
    image: "project1",
    url: "https://github.com/Fary-dev/Resturant_Web",
  },
  {
    device: "mobile",
    title: "Delivery Food",
    subtitle: "Mobile ui & ux with Dart",
    description:
      "This Project I have written with Dart programming language and flutter framework with to much Functionality!",
    image: "project2",
    url: "https://github.com/Fary-dev/Food_Delivery",
  },
  {
    device: "website",
    title: "Portfolio website",
    subtitle: "Website with typescript ",
    description:
      "This Project I have written with typescript and React, full Responsive and Modern!",
    image: "project3",
    url: "https://github.com/Fary-dev/Website-with-HTML-CSS",
  },
  {
    device: "mobile",
    title: "Cryptocurrency",
    subtitle: "Mobile with Dart",
    description:
      "This is also have written with Dart programming language and flutter framework just for show Rest APi.",
    image: "project4",
    url: "https://github.com/Fary-dev/cryptocurrency",
  },
];

const Projects = ({ t }: ProjectsModel) => {
  return (
    <Body>
      <Container>
        <Space></Space>
        <Symbol src={SymbolProjects} alt="education symbol"></Symbol>
        <Title>{t("projects")}</Title>
        {projectsList.map((item, idx) => (
          <Padding key={idx}>
            <ProjectWidget
              id={idx + 1}
              device={item.device}
              title={item.title}
              subtitle={item.subtitle}
              description={item.description}
              image={item.image}
              url={item.url}
              t={t}
            />
          </Padding>
        ))}
      </Container>
    </Body>
  );
};

export default Projects;

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
  height: 180px;
  width: 100%;
`;
const Symbol = styled.img`
  position: absolute;
  top: 85px;
  width: clamp(65px, 4.2vw, 100px);
  filter: invert(${({ theme }) => theme.invert});
  opacity: ${({ theme }) => theme.opacity};
`;
const Title = styled.h5`
  color: ${({ theme }) => theme.text.color};
  position: absolute;
  top: clamp(145px, 7vw, 150px);
  opacity: ${({ theme }) => theme.opacity};
`;
const Padding = styled.div`
  padding: 5vw;
`;
