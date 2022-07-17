import React from "react";
import styled from "styled-components";

interface LineProgressModel {
  key: number;
  title: string;
  percent: number;
  progress: string;
}

function LineProgress({ title, percent, progress }: LineProgressModel) {
  return (
    <Body>
      <Skills>
        <Title>
          {title}
          <Image
            src={require(`../../Assets/${title}.webp`)}
            alt={title}
          ></Image>
        </Title>
        <Skill
          style={
            {
              "--percent": `${percent}%`,
              "--progress": `${progress}`,
            } as React.CSSProperties
          }
        >
          <Span>{percent}%</Span>
        </Skill>
      </Skills>
    </Body>
  );
}

export default LineProgress;

const Body = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 100%;
  width: 100vw;
  padding: 0 10%;
`;
const Skills = styled.div`
  margin-bottom: 35px;
  position: relative;
  overflow: hidden;
  &:before {
    width: 100%;
    height: 16px;
    content: "";
    display: block;
    position: absolute;
    background: rgb(245, 243, 235);
    bottom: 2px;
    opacity: 0.9;
    border-radius: 10px;
    box-shadow: inset 4px 4px 6px -1px ${({ theme }) => theme.boxShadow.tree},
      inset -4px -4px 6px -1px ${({ theme }) => theme.boxShadow.four};
  }
`;
const Title = styled.p`
  color: ${({ theme }) => theme.text.color};
  font-weight: 700;
  text-transform: capitalize;
`;
const Image = styled.img`
  height: 20px;
  width: 20px;
  margin-left: 9px;
  object-fit: contain;
`;
const Skill = styled.div`
  border-radius: 10px;
  width: 0%;
  height: 20px;
  background: var(--progress);
  display: block;
  position: relative;
  box-shadow: inset 4px 4px 6px -1px ${({ theme }) => theme.boxShadow.tree},
    inset -4px -4px 6px -1px ${({ theme }) => theme.boxShadow.four};
  animation: progress-animated 2s ease forwards;
  @keyframes progress-animated {
    0% {
      width: 0%;
      opacity: 0;
    }
    100% {
      width: var(--percent);
      opacity: 1;
    }
  }
`;
const Span = styled.span`
  color: ${({ theme }) => theme.text.color};
  position: absolute;
  top: -1.5px;
  right: 5px;
  font-size: 16px;
  font-weight: 400;
`;
