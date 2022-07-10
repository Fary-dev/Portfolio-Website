import React from "react";
import styled from "styled-components";
import ContactItem from "./ContactItem";

interface ContactModel {
  t: any;
}

const contactList = [
  {
    icon: "location",
    title: "i live in",
    details: "austria, wien",
  },
  {
    icon: "tel",
    title: "call",
    details: "+43 67762733583",
  },
  {
    icon: "whatsapp",
    title: "whatsapp",
    details: "send massage",
  },
  {
    icon: "email",
    title: "email",
    details: "Fbakhsheshi@ymail.com",
  },
];

const Contact = ({ t }: ContactModel) => {
  return (
    <Body>
      <Container>
        <Space></Space>
        <Symbol
          src={require("../../Assets/contact.png")}
          alt="education symbol"
        ></Symbol>
        <Title>{t("contact")}</Title>
        <Builder>
          {contactList.map((e, idx) => (
            <Grid style={{ "--count": idx } as React.CSSProperties} key={idx}>
              <ContactItem
                icon={e.icon}
                title={t(e.title)}
                details={t(e.details)}
              />
            </Grid>
          ))}
        </Builder>
        <Row
          style={
            {
              "--delay": `${contactList.length + 1}`,
            } as React.CSSProperties
          }
        >
          <Column>
            <Form>
              <H1>{t("contact info")}</H1>
              <RowForm>
                <TextField
                  type="text"
                  className="form-control"
                  id="exampleInputEmail1"
                  aria-describedby="emailHelp"
                  placeholder={t("first name")}
                ></TextField>
                <TextField
                  type="text"
                  className="form-control"
                  id="exampleInputEmail1"
                  aria-describedby="emailHelp"
                  placeholder={t("last name")}
                ></TextField>
              </RowForm>
              <TextField
                type="email"
                className="form-control"
                id="exampleInputEmail1"
                aria-describedby="emailHelp"
                placeholder={t("email")}
              ></TextField>
              <Textarea
                className="form-control"
                id="exampleFormControlTextarea1"
                placeholder={t("massage")}
                rows={5}
              ></Textarea>
              <Button>{t("submit")}</Button>
            </Form>
            <RowIcons>
              <A href="#linkedin">
                <Icon className="social-icons bi bi-linkedin me-3"></Icon>
              </A>
              <A href="#github">
                <Icon className="social-icons bi bi-github me-3"></Icon>
              </A>
              <A href="#facebook">
                <Icon className="social-icons bi bi-facebook"></Icon>
              </A>
            </RowIcons>
          </Column>
          <Iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d42482.524724816816!2d16.38235912385544!3d48.280580053497275!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x476d062cc1efac73%3A0x90e47d0364caad4c!2sFloridsdorf%2C%201210%20Wien!5e0!3m2!1sde!2sat!4v1656256904247!5m2!1sde!2sat"
            style={{ border: "0" }}
            allowFullScreen={true}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title={"my location"}
          ></Iframe>
        </Row>
      </Container>
    </Body>
  );
};

export default Contact;

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
  top: 94px;
  width: clamp(45px, 4.2vw, 50px);
  filter: invert(${({ theme }) => theme.invert});
  opacity: ${({ theme }) => theme.opacity};
`;
const Title = styled.h5`
  color: ${({ theme }) => theme.text.color};
  position: absolute;
  top: clamp(145px, 7vw, 150px);
  opacity: ${({ theme }) => theme.opacity};
`;
const Builder = styled.div`
  display: grid;
  width: 100vw;
  max-width: 1400px;
  padding: 0 30px;
  grid-template-rows: repeat(auto-fill, 1fr);
  grid-template-columns: repeat(auto-fill, 1fr);
  @media (min-width: 750px) {
    grid-template-rows: repeat(2, 1fr);
    grid-template-columns: repeat(2, 1fr);
  }
  @media (min-width: 1170px) {
    margin: 0;
    gap: 0;
    grid-template-rows: repeat(1, 1fr);
    grid-template-columns: repeat(4, 1fr);
  }
`;
const Grid = styled.div`
  opacity: 0;
  animation: animated-contact-item 1s ease forwards;
  animation-delay: calc(var(--count) * 200ms + 400ms);

  @keyframes animated-contact-item {
    from {
      transform: translateY(200px);
      opacity: 0;
    }
    to {
      transform: translateY(0px);
      opacity: 1;
    }
  }
`;
const Row = styled.div`
  overflow: hidden;
  width: calc(100% - 53px);
  // justify-content: center;
  // align-items: center;
  max-width: 1400px;
  margin: 30px 0;
  display: flex;
  flex-direction: column;
  border-radius: 20px;
  height: 1000px;
  opacity: 0;
  animation: animated-contact-container 1s ease forwards;
  animation-delay: calc(var(--delay) * 200ms + 400ms);

  @keyframes animated-contact-container {
    from {
      transform: translateY(200px);
      opacity: 0;
    }
    to {
      transform: translateY(0px);
      opacity: 1;
    }
  }
  @media (min-width: 750px) {
    flex-direction: row;
    height: 100%;
  }
`;
const Column = styled.div`
  flex: 50%;
  display: flex;
  flex-direction: column;
  background-color: ${({ theme }) => theme.body.container};
  padding: 20px;
`;
const H1 = styled.h1`
  text-align: center;
  color: ${({ theme }) => theme.text.color};
`;
const Form = styled.form`
  display: flex;
  flex-direction: column;
`;
const RowForm = styled.div`
  display: flex;
  flex-direction: row;
  gap: 20px;
`;
const TextField = styled.input`
  margin: 10px 0;
  background-color: ${({ theme }) => theme.textField.background};
  border: 1px solid ${({ theme }) => theme.textField.borderColor};
  color: ${({ theme }) => theme.text.color};

  &:focus {
    outline: none;
    background-color: ${({ theme }) => theme.body.containerLight};
    border-color: rgb(255, 209, 4);
    box-shadow: 0 1 10px ${({ theme }) => theme.primaryColor};
    color: ${({ theme }) => theme.text.color};
  }
  &::placeholder {
    color: rgba(105, 105, 105, 0.5);
  }
`;
const Textarea = styled.textarea`
  margin: 10px 0;
  background-color: ${({ theme }) => theme.textField.background};
  border: 1px solid ${({ theme }) => theme.textField.borderColor};
  color: ${({ theme }) => theme.text.color};

  &:focus {
    outline: none;
    background-color: ${({ theme }) => theme.body.containerLight};
    border-color: rgb(255, 209, 4);
    box-shadow: 0 1 10px ${({ theme }) => theme.primaryColor};
    color: ${({ theme }) => theme.text.color};
  }
  &::placeholder {
    color: rgba(105, 105, 105, 0.5);
  }
`;
const Iframe = styled.iframe`
  flex: 50%;
  left: 0;
  top: 0;
  height: 509px;
  width: 100%;
`;
const Button = styled.button`
  width: 40%;
  margin: 20px 0;
  padding: 5px 0;
  color: ${({ theme }) => theme.button.color};
  background-color: ${({ theme }) => theme.body.containerLight};
  border: 2px solid ${({ theme }) => theme.button.borderColor};
  opacity: 1;
  border-radius: 5px;
  transition: 0.3s;

  &:hover {
    color: #000;
    background-color: ${({ theme }) => theme.primaryColor};
    border: 2px solid ${({ theme }) => theme.primaryColor};
  }
`;
const RowIcons = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: end;
`;
const A = styled.a``;
const Icon = styled.i`
  color: ${({ theme }) => theme.text.color};
  font-size: 25px;
  transition: color 300ms;

  &:hover {
    color: ${({ theme }) => theme.primaryColor};
  }
`;
