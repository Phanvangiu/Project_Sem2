import React from "react";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronRight } from "@fortawesome/free-solid-svg-icons";
import { faChevronLeft } from "@fortawesome/free-solid-svg-icons";
const Stylebecome = styled.div`
  background-color: black;
  border-radius: 8px;
  color: white;
  margin-top: 20px;
`;
const StyleSection = styled.section`
  width: 1280px;
  margin: 0 auto;
`;
const StyleH1 = styled.h1`
  padding-top: 30px;
  line-height: 52px;
  font-size: 56px;
`;
const StyleDivSpan = styled.div`
  font-size: 26px;
  line-height: 30px;
  font-weight: 400;
  margin-top: 16px;
`;
const StyleButton = styled.button`
  width: 30px;
  height: 30px;
  border-radius: 50%;
  border: 1px solid white;
  color: white;
  background-color: black;
`;
const StyleComponents = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 20px;
`;
const StyleCompopnent = styled.div`
  display: flex;
  flex-direction: column;
`;

const StylePic = styled.div`
  width: 300px;
  height: 400px;
`;
const StyleImg = styled.img`
  object-fit: cover;
`;
const BecomeBest = () => {
  return (
    <div>
      <Stylebecome>
        <StyleSection>
          <section>
            <StyleH1>Become your best Host</StyleH1>
            <StyleDivSpan>
              <span>Resources to help you meet your goals</span>
            </StyleDivSpan>
          </section>
          <section>
            <div>
              <StyleButton>
                <FontAwesomeIcon icon={faChevronLeft} />
              </StyleButton>
              <StyleButton>
                <FontAwesomeIcon icon={faChevronRight} />
              </StyleButton>
            </div>
            <div>
              <StyleComponents>
                <StyleCompopnent>
                  <StylePic>
                    <StyleImg
                      src="https://images.contentstack.io/v3/assets/bltb428ce5d46f8efd8/blt21c5c61faa60cd5d/6504c4069bb34a5cbcde9b27/image1.png?crop=100p,100p,x0,y0&width=1200&height=675&auto=webp"
                      alt=""
                    />
                  </StylePic>
                  <div>Comjhsrgff</div>
                  <div>kksdhhfuirubv</div>
                </StyleCompopnent>
              </StyleComponents>
            </div>
          </section>
        </StyleSection>
      </Stylebecome>
    </div>
  );
};

export default BecomeBest;
