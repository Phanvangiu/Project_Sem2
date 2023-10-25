import React, { useState } from "react";
import Getaways from "./Getaways";
import StyledHomePageContainer from "../../ui/StyledHomePageContainer";
import styled from "styled-components";
import GetswaysItem from "./GetswaysItem";
import About from "./About";
import FooterDetail from "./FooterDetail";
<<<<<<< HEAD
import "./StyleVariables.css";

=======
>>>>>>> 85176ae189ac92ef135749a5ae0ac327282c5d95
const itemTitleGetaway = [
  "Popular",
  "Arts & culture",
  "Outdoors",
  "Mountains",
  "Beach",
  "Unique stays",
  "Categories",
  "Things to do",
  "Airbnb-friendly apartments",
];
const itemPopular = [
  "Canmore",
  "Tucson",
  "Anaheim",
  "Benalmasdena",
  "Jasper",
  "Monterey",
  "Marbella",
  "Mountainview",
  "Paso Robles",
  "Mijas",
  "Devonport",
  "Santa Barbara",
  "Prescott",
  "Mallacoota",
  "Sonoma",
  "Scottsdale",
  "Ibiza",
  "Lasenrana",
  "Padstow",
];
const itemPopulardetail = [
  "Apartment rentals",
  "Vacation rentals",
  "Apartment rentals",
  "Vacation rentals",
  "Cabin rentals",
  "Apartment rentals",
  "Apartment rentals",
  "House rentals",
  "House rentals",
  "Vacation rentals",
  "Cottage rentals",
  "Cottage rentals",
  "Vacation rentals",
  "Beach house rentals",
  "Beach house rentals",
  "House rentals",
  "Apartment rentals",
  "Beachfront rentals",
  "Cottage rentals",
  "Beach house rentals",
];
const link = "https://www.airbnb.com/";
const titleGetaways = ["Inspiration for future getaways"];
const StyledContainer = styled(StyledHomePageContainer)`
  width: 100%;
  padding-right: 5%;
  padding-left: 5%;
<<<<<<< HEAD
  background-color: var(--background-color-footer);
=======
  background-color: rgb(247, 247, 247);
>>>>>>> 85176ae189ac92ef135749a5ae0ac327282c5d95
`;
const StyleFuture = styled.div`
  padding-top: 48px;
`;
const StyleListGetaways = styled.div`
  display: flex;
`;
const StyleGetaways = styled.button`
<<<<<<< HEAD
  color: var(--color2);
  background-color: inherit;
  border: none;
  font-size: var(--font-size-para);
  font-weight: var(--font-weight-title);
  line-height: var(--line-height-para);
=======
  color: #717171;
  background-color: inherit;
  border: none;
  font-size: 14px;
  font-weight: 600;
  line-height: 18px;
>>>>>>> 85176ae189ac92ef135749a5ae0ac327282c5d95
  margin: 6px 6px 8px -10px;
  padding: 10px;
  cursor: pointer;
  border-bottom: ${({ clicked }) => (clicked ? "2px solid black;" : "2px")};
  &:hover {
<<<<<<< HEAD
    border-bottom: 2px solid var(--color3);
=======
    border-bottom: 2px solid #dddddd;
>>>>>>> 85176ae189ac92ef135749a5ae0ac327282c5d95
    z-index: 2;
  }
`;
const StyleFutureGetaways = styled.div`
  margin-bottom: 8px;
<<<<<<< HEAD
  font-size: var(--font-size-title);
  line-height: var(--line-height-title);
  font-weight: var(--font-weight-title);
`;
const StyleHr = styled.hr`
  color: 2px solid var(--color3);
  margin: -7px 0px 0px -10px;
`;
const StyleGetswaysItem = styled.div`
  color: var(--color1);
=======
  font-size: 22px;
  line-height: 26px;
  font-weight: 600;
`;
const StyleHr = styled.hr`
  color: 2px solid #dddddd;
  margin: -5px 0px 0px -10px;
`;
const StyleGetswaysItem = styled.div`
>>>>>>> 85176ae189ac92ef135749a5ae0ac327282c5d95
  display: grid;
  margin-top: 35px;
  margin-bottom: 45px;
  grid-template-columns: repeat(6, 1fr);
<<<<<<< HEAD
  grid-template-rows: repeat(3, 1fr);
  row-gap: 24px;
  column-gap: 18px;
  border-bottom: 1px solid var(--color2);
  padding-bottom: 48px;
`;
=======
  gap: 24px;
  border-bottom: 1px solid #717171;
  padding-bottom: 48px;
`;


>>>>>>> 85176ae189ac92ef135749a5ae0ac327282c5d95
const Footer = () => {
  const [activeButton, setActiveButton] = useState(true);
  const handleClick = (status) => {
    setActiveButton(status);
  };
  return (
    <StyledContainer>
      <StyleFuture>
        <StyleFutureGetaways>{titleGetaways}</StyleFutureGetaways>
<<<<<<< HEAD
        {/* <StyleListGetaways>
=======
        <StyleListGetaways>
>>>>>>> 85176ae189ac92ef135749a5ae0ac327282c5d95
          {itemTitleGetaway.map((value, index) => (
            <StyleGetaways
              clicked={index === activeButton}
              onClick={() => handleClick(index)}
            >
              <Getaways value={<div>{value}</div>}></Getaways>
            </StyleGetaways>
          ))}
        </StyleListGetaways>
<<<<<<< HEAD
        <StyleHr></StyleHr> */}
        {/* <StyleGetswaysItem>
=======
        <StyleHr></StyleHr>
        <StyleGetswaysItem>
>>>>>>> 85176ae189ac92ef135749a5ae0ac327282c5d95
          {itemPopular.map((value, index) => (
            <GetswaysItem
              key={index}
              linkValue={link}
              valueTitle={value}
              valueDetail={itemPopulardetail[index]}
            ></GetswaysItem>
          ))}
<<<<<<< HEAD
        </StyleGetswaysItem> */}
=======
        </StyleGetswaysItem>
>>>>>>> 85176ae189ac92ef135749a5ae0ac327282c5d95
        <About></About>
        <FooterDetail></FooterDetail>
      </StyleFuture>
    </StyledContainer>
  );
};

export default Footer;
