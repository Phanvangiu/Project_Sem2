import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
<<<<<<< HEAD
import { faChevronCircleLeft } from "@fortawesome/free-solid-svg-icons";
import { faChevronCircleRight } from "@fortawesome/free-solid-svg-icons";
=======
import { faChevronLeft } from "@fortawesome/free-solid-svg-icons";
import { faChevronRight } from "@fortawesome/free-solid-svg-icons";
>>>>>>> 85176ae189ac92ef135749a5ae0ac327282c5d95

import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

import StyledBoxContainer from "../../ui/StyledBoxContainer";
import { faHeart } from "@fortawesome/free-solid-svg-icons";

const responsive = {
  superLargeDesktop: {
    // the naming can be any, depends on you.
    breakpoint: { max: 4000, min: 3000 },
    items: 1,
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 1,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 1,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
  },
};

const ButtonGroup = ({ next, previous, goToSlide, ...rest }) => {
  const {
    carouselState: { currentSlide },
  } = rest;
  return (
    <div className="carousel-button-group-body">
      <button className={currentSlide === 0 ? "disable" : "body-item-arrowleft"} onClick={() => previous()}>
<<<<<<< HEAD
        <FontAwesomeIcon className="icon" icon={faChevronCircleLeft} />
      </button>
      <button className={currentSlide === 3 ? "disable" : "body-item-arrowright"} onClick={() => next()}>
        <FontAwesomeIcon className="icon" icon={faChevronCircleRight} />
=======
        <FontAwesomeIcon className="icon" icon={faChevronLeft} />
      </button>
      <button className={currentSlide === 3 ? "disable" : "body-item-arrowright"} onClick={() => next()}>
        <FontAwesomeIcon className="icon" icon={faChevronRight} />
>>>>>>> 85176ae189ac92ef135749a5ae0ac327282c5d95
      </button>
    </div>
  );
};

const StyledItemContainer = styled.div`
  display: grid;
`;

const StyledCarousel = styled(Carousel)`
  box-shadow: rgba(0, 0, 0, 0.02) 0px 1px 3px 0px, rgba(27, 31, 35, 0.15) 0px 0px 0px 1px;
  border-radius: 10px;

  & p {
    aspect-ratio: 1;
    width: 100%;
    height: 100%;
    background-color: beige;
  }

  &:hover .icon {
<<<<<<< HEAD
    visibility: visible;
  }
=======
    display: block;
  }

  & .icon{
    font-size: 15px;
  }

  & .body-item-arrowleft, & .body-item-arrowright{
    display: none;
  }

  &:hover .body-item-arrowleft, &:hover .body-item-arrowright{
    display: inline;
  }

 
>>>>>>> 85176ae189ac92ef135749a5ae0ac327282c5d95
`;

const StyledInfoBox = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 0.7rem;

  .first-box >p{
    margin-bottom: 10px;
  }
`;

function BodyItem() {
  return (
    <StyledItemContainer>
<<<<<<< HEAD
      <StyledCarousel customButtonGroup={<ButtonGroup />} arrows={false} responsive={responsive}>
=======
      <StyledCarousel dotListClass="custom-dot-list-style" showDots={true} customButtonGroup={<ButtonGroup />} arrows={false} responsive={responsive}>
>>>>>>> 85176ae189ac92ef135749a5ae0ac327282c5d95
        <p>A</p>
        <p>B</p>
        <p>C</p>
        <p>D</p>
      </StyledCarousel>
      <StyledInfoBox>
        <div className="first-box">
          <p>Ninh Giang, Viet Nam</p>
          <p>81 km away</p>
          <p>Oct 6 - 11</p>
          <p>$56 night</p>
        </div>
        <p className="second-box">5*</p>
      </StyledInfoBox>
    </StyledItemContainer>
  );
}

export default BodyItem;
