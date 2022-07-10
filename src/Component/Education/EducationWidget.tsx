import React from "react";
import styled from "styled-components";

interface EducationWidgetModel {
  direction: number;
  id: number;
  title: string;
  date: string;
  details: string;
}

function EducationWidget({
  direction,
  id,
  title,
  date,
  details,
}: EducationWidgetModel) {
  return (
    <Body>
      <Container
        style={
          {
            "--id": `${id}`,
            "--translate": `${direction}`,
          } as React.CSSProperties
        }
      >
        <Title>{title}</Title>
        <Row>
          <Date>{date}</Date>
          <Details>{details}</Details>
        </Row>
      </Container>
    </Body>
  );
}

export default EducationWidget;

const Body = styled.div`
  background-color: transparent;
  overflow: hidden;
  padding: 15px 5px;
  margin: 0;
`;
const Container = styled.div`
  background-color: ${({ theme }) => theme.body.container};
  position: relative;
  border-radius: 15px;
  padding: 15px;
  z-index: 1;
  opacity: 0;
  box-shadow: 0 0 8px 2px ${({ theme }) => theme.shadow};
  animation: animated-edu 1s ease forwards;
  animation-delay: calc(var(--id) * 100ms);
  @keyframes animated-edu {
    from {
      transform: translateX(calc(-100px * var(--translate)));
      opacity: 0;
    }
    to {
      transform: translateX(0px);
      opacity: 1;
    }
  }
  &:hover {
    box-shadow: 0 0 8px 2px rgba(255, 208, 1, 0.6);
    opacity: 1;
  }
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
const Row = styled.div`
  display: flex;
  flex-direction: column;
`;
const Date = styled.h4`
  text-align: center;
  font-weight: 100;
  font-size: clamp(0.7rem, 1.5vw, 1rem);
  color: ${({ theme }) => theme.text.light};
`;
const Details = styled(Date)``;
