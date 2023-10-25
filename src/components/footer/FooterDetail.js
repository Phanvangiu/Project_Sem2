import React from "react";
<<<<<<< HEAD
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook } from "@fortawesome/free-brands-svg-icons";
import { faTwitter } from "@fortawesome/free-brands-svg-icons";
import { faSquareInstagram } from "@fortawesome/free-brands-svg-icons";
import "./StyleVariables.css";
const StyleARight = styled.a`
  text-decoration: none;
  color: var(--color1);
  font-style: var(--font-size-para);
`;
const StyleALeft = styled.a`
  display: inline;
  text-decoration: none;
  color: var(--color4);
  font-style: var(--font-size-para);
`;
const StyleFlex = styled.div`
  display: flex;
  justify-content: space-between;
  flex-direction: row;
  padding: 24px 0;
  margin: 0px 10px;
`;
const StyleInline = styled.div`
  display: inline;
`;
const StyleLi = styled.li`
  margin: 0 10px;
  display: inline-block;
  text-decoration: none;
`;
const FooterDetail = () => {
  return (
    <StyleFlex>
      <StyleInline>
        <span>© 2023 Airbnb. </span>
        <StyleARight href="https://www.airbnb.com/">Terms</StyleARight>
        <span> . </span>
        <StyleARight href="https://www.airbnb.com/">Sitemap</StyleARight>
        <span> . </span>
        <StyleARight href="https://www.airbnb.com/">PrivacyYour</StyleARight>
        <span> . </span>
        <StyleARight href="https://www.airbnb.com/">
          Privacy Choices{" "}
        </StyleARight>
        <button>
          <StyleARight href="https://www.airbnb.com/">z</StyleARight>
        </button>
      </StyleInline>
      <StyleInline>
        <StyleLi>
          <StyleALeft href="https://www.airbnb.com/">z</StyleALeft>
        </StyleLi>
        <StyleLi>
          <StyleALeft href="https://www.airbnb.com/">ENGLISH "US"</StyleALeft>
        </StyleLi>
        <StyleLi>
          <StyleALeft href="https://www.airbnb.com/">z</StyleALeft>
        </StyleLi>
        <StyleLi>
          <StyleALeft href="https://www.airbnb.com/">
            <FontAwesomeIcon icon={faFacebook} />
          </StyleALeft>
        </StyleLi>
        <StyleLi>
          <StyleALeft href="https://www.airbnb.com/">
            <FontAwesomeIcon icon={faTwitter} />
          </StyleALeft>
        </StyleLi>
        <StyleLi>
          <StyleALeft href="https://www.airbnb.com/">
            <FontAwesomeIcon icon={faSquareInstagram} />
          </StyleALeft>
        </StyleLi>
      </StyleInline>
    </StyleFlex>
=======

const FooterDetail = () => {
  return (
    <div>
      <div>
        <p>© 2023 Airbnb</p>
        <a href="https://www.airbnb.com/">Terms</a>
        <a href="https://www.airbnb.com/">Sitemap</a>
        <a href="https://www.airbnb.com/">PrivacyYour</a>
        <a href="https://www.airbnb.com/">Privacy Choices</a>
        <button>
          <a href="https://www.airbnb.com/">z</a>
        </button>
      </div>
      <div>
        <a href="https://www.airbnb.com/">z</a>
        <a href="https://www.airbnb.com/">z</a>
        <a href="https://www.airbnb.com/">z</a>
        <a href="https://www.airbnb.com/">z</a>
        <a href="https://www.airbnb.com/">z</a>
        <a href="https://www.airbnb.com/">z</a>
      </div>
    </div>
>>>>>>> 85176ae189ac92ef135749a5ae0ac327282c5d95
  );
};

export default FooterDetail;
