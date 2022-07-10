import styled from "styled-components";

interface ProjectsModel {
  t: any;
}

const Projects = ({ t }: ProjectsModel) => {
  return (
    <Body>
      <Container>
        <Symbol
          src={require("../../Assets/projects.png")}
          alt="education symbol"
        ></Symbol>
        <Title>{t("projects")}</Title>
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
