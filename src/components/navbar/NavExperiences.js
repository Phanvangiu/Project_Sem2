import styled, { css } from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";

import StyledButtonContainer from "../../ui/StyledButtonContainer";

const StyledContainer = styled(StyledButtonContainer)`
  width: 50rem;
  display: flex;
  margin: auto;
  margin-bottom: 1rem;
  box-shadow: rgba(0, 0, 0, 0.02) 0px 1px 3px 0px, rgba(27, 31, 35, 0.15) 0px 0px 0px 1px;

  &:hover {
    box-shadow: rgba(0, 0, 0, 0.02) 0px 1px 3px 0px, rgba(27, 31, 35, 0.15) 0px 0px 0px 1px;
  }

  & button {
    text-align: left;
    box-shadow: none;
    padding: 1rem;

    & p:nth-of-type(1) {
      margin-bottom: 5px;
      font-weight: 600;
    }
  }

  & button:hover {
    background-color: #ebebeb;
    box-shadow: rgba(0, 0, 0, 0.02) 0px 1px 3px 0px, rgba(27, 31, 35, 0.15) 0px 0px 0px 1px;
  }
  transition: width .2s, opacity .2s, transform .2s, visibility 300ms linear ;
  

  ${(props) => {
    if (props.onEffect == 2) {
      return css`
        opacity: 1;
        visibility: visible;
        position: static;
        transform: translateY(0);
        width: 50rem;
      `;
    }
    
    if(props.onEffect == 1){
      return css`
        position: absolute;
        visibility: hidden;
      `
    }
    
    if(props.onEffect == 0) {
      return css`
        opacity: 0;
        visibility: hidden;
        position: absolute;
        width: 22rem;
        transform: translateY(-70%);
      `;
    }
  }}
`;

const StyledWhere = styled(StyledButtonContainer)`
  flex-grow: 1;
`;

const StyledDate = styled(StyledButtonContainer)`
  flex-grow: 1;
`;

const StyledWho = styled(StyledButtonContainer)`
  flex-grow: 1;
  display: flex;
  justify-content: space-between;
  align-items: center;

  & .icon {
    background-color: red;
    border-radius: 50%;
    font-size: 20px;
    padding: 8px;
    color: white;
  }
`;

function NavExperiences({ effect }) {
  return (
    <StyledContainer onEffect={effect}>
      <StyledWhere>
        <p>Where</p>
        <p>Search destinations</p>
      </StyledWhere>
      <StyledDate>
        <p>Date</p>
        <p>Add dates</p>
      </StyledDate>
      <StyledWho>
        <div>
          <p>Who</p>
          <p>Add guests</p>
        </div>
        <FontAwesomeIcon className="icon" icon={faMagnifyingGlass} />
      </StyledWho>
    </StyledContainer>
  );
}

export default NavExperiences;
