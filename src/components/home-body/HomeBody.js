import styled from "styled-components";
import "./home-body.css"

import BodyItem from "./BodyItem";
import StyledHomePageContainer from "../../ui/StyledHomePageContainer";

const StyledBody = styled.div`
`;

const StyledContainer = styled(StyledHomePageContainer)`
  display: grid;
<<<<<<< HEAD
  grid-template-columns: repeat(5, 1fr);
  column-gap: 1rem;
  row-gap: 1rem;
=======
  grid-template-columns: repeat(6, 1fr);
  column-gap: 1rem;
  row-gap: 1rem;


  @media  (max-width: 1879px) {
    grid-template-columns: repeat(5, 1fr);
  }

  @media  (max-width: 1640px) {
    grid-template-columns: repeat(4, 1fr);
  }

  @media  (max-width: 1127px) {
    grid-template-columns: repeat(3, 1fr);
  }

  @media  (max-width: 950px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media  (max-width: 550px) {
    grid-template-columns: repeat(1, 1fr);
  }
>>>>>>> 85176ae189ac92ef135749a5ae0ac327282c5d95
  
`;

function HomeBody() {
  return (
    <StyledBody>
      <StyledContainer>
<<<<<<< HEAD
=======
      
>>>>>>> 85176ae189ac92ef135749a5ae0ac327282c5d95
        <BodyItem className="item" />
        <BodyItem className="item" />
        <BodyItem className="item" />
        <BodyItem className="item" />
        <BodyItem className="item" />

        <BodyItem className="item" />
        <BodyItem className="item" />
        <BodyItem className="item" />
        <BodyItem className="item" />
        <BodyItem className="item" />

        <BodyItem className="item" />
        <BodyItem className="item" />
        <BodyItem className="item" />
        <BodyItem className="item" />
        <BodyItem className="item" />
<<<<<<< HEAD
=======

>>>>>>> 85176ae189ac92ef135749a5ae0ac327282c5d95
      </StyledContainer>
    </StyledBody>
  );
}

export default HomeBody;
