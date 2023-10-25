<<<<<<< HEAD
import React, { useState } from "react";
import styled from "styled-components";
import "./StyleVariables.css";
const StyleA = styled.a`
  text-decoration: none;
  font-size: var(--font-size-para);
`;
const StyleValueTietle = styled.div`
  color: var(--color4);
  line-height: var(--line-height-para);
  font-weight: var(--font-weight-title);
`;
const StyledValueDetail = styled.div`
  color: var(--color2);
  line-height: var(--line-height-para);
  font-weight: var(--font-weight-para);
=======
import React from "react";
import styled from "styled-components";
const StyleA = styled.a`
  text-decoration: none;
  font-style: 14px;
`;
const StyleValueTietle = styled.div`
  color: black;
  line-height: 18px;
  font-weight: 600;
`;
const StyledValueDetail = styled.div`
  color: #717171;
  line-height: 18px;
  font-weight: 400;
>>>>>>> 85176ae189ac92ef135749a5ae0ac327282c5d95
`;

const GetswaysItem = (props) => {
  return (
    <div>
      <StyleA href={props.linkValue}>
        <StyleValueTietle>{props.valueTitle}</StyleValueTietle>
        <StyledValueDetail>{props.valueDetail}</StyledValueDetail>
      </StyleA>
    </div>
  );
};

export default GetswaysItem;
