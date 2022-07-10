import styled from "styled-components";

interface ExperienceWidgetModel {
  key: number;
  id: number;
  title: string;
  date: string;
  details: string;
}

function ExperienceWidget({ id, title, date, details }: ExperienceWidgetModel) {
  return (
    <Body>
      <Container id={`${id}`}>
        <ResizeItem>
          <Title>{title}</Title>
          <Date>{date}</Date>
          <Details>{details}</Details>
        </ResizeItem>
      </Container>
    </Body>
  );
}

export default ExperienceWidget;

const Body = styled.div`
  justify-content: center;
  align-items: center;
  background-color: transparent;
  padding: 0px;
`;
const Container = styled.div`
  display: flex;
  flex-direction: column;
  background: ${({ theme }) => theme.body.container};
  border-radius: 20px;
  padding: 15px;
  margin: 15px;
  box-shadow: 0 0 8px 2px ${({ theme }) => theme.shadow};
  opacity: 0;
  justify-content: center;
  align-items: center;
  transform: scale(0.2);
  animation: animated-experience 1s ease forwards;
  animation-delay: calc(${(props) => props.id} * 300ms);
  @keyframes animated-experience {
    0% {
      transform: scale(0.2);
      opacity: 1;
    }
    50% {
      transform: scale(1.05);
      opacity: 0.7;
    }
    100% {
      transition: transform 0.2s cubic-bezier(0, 0.55, 0.45, 1);
      opacity: 1;
      transform: scale(1);
    }
  }
  &:hover {
    box-shadow: 0 0 8px 2px rgba(255, 208, 1, 0.6);
    opacity: 1;
  }
  @media (min-width: 750px) {
    height: 220px;
  }
  @media (min-width: 970px) {
    height: 220px;
  }
  @media (min-width: 1170px) {
    height: 290px;
  }
`;
const ResizeItem = styled.div`
  opacity: 1;
  transform: scale(0.2);
  animation: animated-experience 1s ease forwards;
  animation-delay: calc(${(props) => props.id} * 300ms);
`;
const Title = styled.h3`
  text-align: center;
  border-bottom: 2px solid ${({ theme }) => theme.text.color};
  -o-border-image: linear-gradient(
      to right,
      transparent,
      ${({ theme }) => theme.text.light},
      transparent
    )
    0.5;
  border-image: linear-gradient(
      to right,
      transparent,
      ${({ theme }) => theme.text.light},
      transparent
    )
    0.5;
  color: ${({ theme }) => theme.text.color};
  font-weight: 700;
  font-size: clamp(1rem, 3.5vw, 1.2rem);
  padding-bottom: 2vh;
`;
const Date = styled.h4`
  text-align: center;
  font-weight: 100;
  font-size: clamp(0.7rem, 1.5vw, 1rem);
  color: ${({ theme }) => theme.text.light};
`;
const Details = styled(Date)``;
