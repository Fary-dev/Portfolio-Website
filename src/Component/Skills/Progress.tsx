import React from "react";
import styled from "styled-components";

interface ProgressModel {
  key: number;
  id: number;
  percent: number;
  title: string;
  color: string;
}

function Progress({ id, percent, title, color }: ProgressModel) {
  const PercentConvertor = 422 - (422 * percent) / 100;

  return (
    <Body>
      <Skills>
        <Outer>
          <Inner>
            <Number
              style={
                {
                  "--color": color,
                  "--id": id,
                } as React.CSSProperties
              }
            >
              {percent}%
            </Number>
          </Inner>
        </Outer>
        <Svg xmlns="http://www.w3.org/2000/svg" version="1.1">
          <Circle
            cx={80}
            cy={80}
            r={70}
            style={
              {
                "--color": color,
                "--percent": PercentConvertor,
                "--id": id,
              } as React.CSSProperties
            }
          ></Circle>
        </Svg>
      </Skills>
      <Skill>
        {title}
        <Image src={require(`../../Assets/${title}.webp`)} alt={title}></Image>
      </Skill>
    </Body>
  );
}

export default Progress;

const Body = styled.div`
  height: 250px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;
const Skills = styled.div`
  width: 160px;
  height: 160px;
  position: relative;
`;
const Outer = styled.div`
  height: 160px;
  width: 160px;
  border-radius: 50%;
  box-shadow: 6px 6px 10px -1px ${({ theme }) => theme.boxShadow.one},
    -6px -6px 10px -1px ${({ theme }) => theme.boxShadow.two};
  padding: 20px;
`;
const Inner = styled.div`
  height: 120px;
  width: 120px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: inset 4px 4px 6px -1px ${({ theme }) => theme.boxShadow.tree},
    inset -4px -4px 6px -1px ${({ theme }) => theme.boxShadow.four},
    -0.5px -0.5px 0px ${({ theme }) => theme.boxShadow.five},
    0.5px 0.5px 0px ${({ theme }) => theme.boxShadow.six},
    -0px 12px 10px 10px ${({ theme }) => theme.boxShadow.seven};
`;
const Number = styled.div`
  color: var(--color);
  font-weight: 700;
  opacity: 0;
  animation: animT 1s ease forwards;
  animation-delay: calc(500ms * var(--id));
  @keyframes animT {
    0% {
      opacity: 0;
    }

    100% {
      opacity: 1;
    }
  }
`;
const Svg = styled.svg`
  width: 160px;
  height: 160px;
  position: absolute;
  top: 0;
  left: 0;
  transform: rotate(-90deg);
`;
const Circle = styled.circle`
  stroke-linecap: round;
  fill: none;
  stroke: var(--color);
  stroke-width: 20px;
  stroke-dasharray: 422;
  stroke-dashoffset: 422;
  opacity: 0;
  animation: anim 1s linear forwards;
  animation-delay: calc(450ms * var(--id));
  @keyframes anim {
    100% {
      opacity: 1;
      stroke-dashoffset: var(--percent);
    }
  }
`;
const Skill = styled.p`
  color: ${({ theme }) => theme.text.color};
  text-transform: capitalize;
  padding-top: 10px;
`;
const Image = styled.img`
  object-fit: contain;
  max-width: 25px;
  margin: 0 5px;
`;
