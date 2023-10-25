import React from "react";
import AboutSession from "./AboutSession";
import styled from "styled-components";
<<<<<<< HEAD
import "./StyleVariables.css";
=======
>>>>>>> 85176ae189ac92ef135749a5ae0ac327282c5d95
const TitleAbout = ["Support", "Hosting", "Airbnb"];
const link = "https://www.airbnb.com/";
const SupportDetail = [
  "Help Center",
  "AirCover",
  " Anti-discrimination",
  "Disability support",
  "Cancellation options",
  "Report neighborhood concern",
];
const HostingDetail = [
  "Airbnb your home",
  "AirCover for Hosts",
  "Hosting resources",
  "Community forum",
  "Hosting responsibly",
  "Airbnb-friendly apartments",
];
const AirbnbDetail = [
  "Newsroom",
  "New features",
  "Careers",
  "Investors",
  "Gift cards",
  "Airbnb.org emergency stays",
];
const StyleAbout = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  column-gap: 40px;
<<<<<<< HEAD
  border-bottom: 1px solid var(--color2);
=======
  border-bottom: 1px solid #717171;
>>>>>>> 85176ae189ac92ef135749a5ae0ac327282c5d95
  padding-bottom: 50px;
`;
const StyleA = styled.a`
  display: block;
  text-decoration: none;
<<<<<<< HEAD
  color: var(--color1);
  font-size: var(--font-size-para);
  font-weight: var(--font-weight-para);
  line-height: (--line-height-para);
  cursor: pointer;
  &:hover {
    text-decoration: underline;
    text-decoration-color: var(--color2);
=======
  font-style: 16px;
  color: black;
  font-size: 14px;
  font-weight: 400px;
  line-height: 18px;
  cursor: pointer;
  &:hover {
    text-decoration: underline;
    text-decoration-color: #717171;
>>>>>>> 85176ae189ac92ef135749a5ae0ac327282c5d95
  }
  /* &:hover:empty {
    cursor: not-allowed;
    pointer-events: none;
  } */
`;
const About = () => {
  return (
    <StyleAbout>
      <AboutSession
        title={TitleAbout[0]}
        item={SupportDetail.map((value, index) => (
          <StyleA href={link}>{value}</StyleA>
        ))}
      ></AboutSession>
      <AboutSession
        title={TitleAbout[1]}
        item={HostingDetail.map((value, index) => (
          <StyleA href={link}>{value}</StyleA>
        ))}
      ></AboutSession>
      <AboutSession
        title={TitleAbout[2]}
        item={AirbnbDetail.map((value, index) => (
          <StyleA href={link}>{value}</StyleA>
        ))}
      ></AboutSession>
    </StyleAbout>
  );
};

export default About;
