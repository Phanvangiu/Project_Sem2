import React from "react";
import styled from "styled-components";
import { css } from "styled-components";

const StyledNav = styled.div`
  position: relative;
  /* background-color: white; */
  z-index: 10;
  ${(props) => {
    if (props.$zIndex === 5) {
      return css`
        z-index: 999;
      `;
    }
  }}

  animation: all 2s ease-in-out;

  ${(props) => {
    if (props.$borderBottom) {
      return css`
        border-bottom: 1px solid black;
      `;
    }
  }}
`;

const StyledContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 0;
  flex-wrap: wrap;

  ${(props) => {
    if (props.$variant === "home") {
      return css`
        width: 90%;
        margin: auto;

        @media only screen and (max-width: 1400px) {
          & {
            width: 93%;
          }
        }

        @media only screen and (max-width: 1200px) {
          & {
            width: 95%;
          }
        }
        @media only screen and (max-width: 992px) {
          & {
            width: 95%;
          }
        }
      `;
    }
  }}

  ${(props) => {
    if (props.$gap === 1) {
      return css`
        gap: 1rem;
      `;
    }
  }}
`;

export default function NavBarContainer({ children, variant, gap, zIndex, borderBottom }) {
  return (
    <StyledNav $borderBottom={borderBottom} $zIndex={zIndex}>
      <StyledContainer $gap={gap} $variant={variant}>
        {children}
      </StyledContainer>
    </StyledNav>
  );
}
