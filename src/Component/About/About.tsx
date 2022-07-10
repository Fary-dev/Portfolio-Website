import styled from "styled-components";

interface AboutModel {
  thm: any;
  t: any;
}

const About = ({ thm, t }: AboutModel) => {
  return (
    <Body>
      <Container>
        <Space></Space>
        <Text>
          {t("Hello,I'm")}
          <Span>Faramarz</Span>
        </Text>
        <TextPrimary>{t("Frontend Developer")}</TextPrimary>
        <Image src={require("../../Assets/developer.png")}></Image>
        <P>
          {t(
            "My name is Faramarz Bakhsheshi I'm a Front End Developer, Bachelor of Software Engineering in Iran. I describe myself as a passionate developer who loves coding, open source, the web and mobile platform.Aside from my job, I like to create and contribute to open source projects. That helps me to learn a ton of new stuff, grow as a developer and support other open source projects. In my free time you can find me longboarding , at the gym."
          )}
        </P>
        <Button>{t("download resume")}</Button>
      </Container>
    </Body>
  );
};

export default About;

const Body = styled.body`
  background-color: ${({ theme }) => theme.body.background};
  overflow: hidden;
  box-sizing: border-box;
  padding: 0 10px;
`;
const Container = styled.div`
  display: flex;
  flex-direction: column;
  background-color: ${({ theme }) => theme.body.containerLight};
  min-height: 100vh;
  min-width: 100%;
  justify-content: center;
  align-items: center;
`;
const Space = styled.div`
  display: inline-block;
  height: 60px;
`;
const Text = styled.h1`
  display: flex;
  color: ${({ theme }) => theme.text.color};
  font-size: clamp(26px, 3.5vw, 36px);
  flex-direction: Row;
  justify-content: center;
  align-items: center;
  animation: hello 1s ease forwards;
  animation-delay: 300ms;
  opacity: 0;
`;
const Span = styled.span`
  color: ${({ theme }) => theme.primaryColor};
  font-size: clamp(28px, 3.5vw, 40px);
  padding-left: 10px;
  animation: hello 1s ease forwards;
  animation-delay: 500ms;
  opacity: 0;
  text-shadow: 1px -1px 3px ${({ theme }) => theme.shadow};
`;
const TextPrimary = styled(Text)`
  background-color: ${({ theme }) => theme.primaryColor};
  color: ${({ theme }) => theme.button.textColor};
  font-size: clamp(20px, 2.5vw, 28px);
  padding: 10px;
  border-radius: 10px;
  animation: hello 1s ease forwards;
  animation-delay: 800ms;
  opacity: 0;
`;
const Image = styled.img`
  display: block;
  width: 30vw;
  max-width: 400px;
  height: auto;
  animation: hello 1s ease forwards;
  animation-delay: 1000ms;
  opacity: 0;
  @media (max-width: 750px) {
    display: none;
  }
`;
const P = styled.p`
  max-width: 1400px;
  color: ${({ theme }) => theme.text.p};
  font-size: clamp(16px, 2.5vw, 20px);
  padding: 5vh 5vw;
  animation: hello 1s ease forwards;
  animation-delay: 1200ms;
  opacity: 0;
  @media (min-width: 750px) {
    width: 90%;
  }
  @media (min-width: 970px) {
    width: 85%;
  }
  @media (min-width: 1170px) {
    width: 80%;
  }
`;
const Button = styled.button`
  padding: 5px 20px;
  color: ${({ theme }) => theme.button.color};
  background-color: ${({ theme }) => theme.body.containerLight};
  border: 2px solid ${({ theme }) => theme.button.borderColor};
  animation: hello 1s ease forwards;
  animation-delay: 1500ms;
  opacity: 0;
  border-radius: 5px;
  transition: 0.3s;

  @keyframes hello {
    from {
      transform: translateY(200px);
      opacity: 0;
    }
    to {
      transform: translateY(0px);
      opacity: 1;
    }
  }
  &:hover {
    color: #000;
    background-color: ${({ theme }) => theme.primaryColor};
    border: 2px solid ${({ theme }) => theme.primaryColor};
  }
`;
