import React from "react";
import styled from "styled-components";
<<<<<<< HEAD
import "./StyleVariables.css";
const StyleH3 = styled.h3`
  font-size: var(--font-size-title);
  font-weight: var(--font-weight-title);
  line-height: var(--line-height-para);
=======
const StyleH3 = styled.h3`
  font-size: 16px;
  font-weight: 600;
  line-height: 18px;
>>>>>>> 85176ae189ac92ef135749a5ae0ac327282c5d95
  margin-bottom: 12px;
`;
const StyleAGrid = styled.div`
  display: grid;
  grid-template-rows: repeat(6, 1fr);
  row-gap: 14px;
`;
const AboutSession = (props) => {
  return (
    <section>
      <StyleH3>{props.title}</StyleH3>
      <StyleAGrid>{props.item}</StyleAGrid>
    </section>
  );
};

export default AboutSession;
