import React from "react";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronRight } from "@fortawesome/free-solid-svg-icons";
import { faChevronLeft } from "@fortawesome/free-solid-svg-icons";
const Stylebecome = styled.div`
  background-color: black;
  border-radius: 8px;
  color: white;
`;
const StyleSection = styled.section`
  margin: 20px 115px 0 115px;
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
  margin-left: 10px;
  margin-top: 30px;
`;
const StyleComponents = styled.div`
  display: flex;
  flex-direction: row;
  row-gap: 15px;
  margin-top: 30px;
`;

const StyleCompopnent = styled.div`
  margin-right: 15px;
`;

const StylePic = styled.div`
  width: 310px;
  height: 230px;
  position: relative;
`;
const StyleImg = styled.img`
  width: 100%;
  height: 100%;
  display: block;
  object-position: center;
  object-fit: cover;
  border-radius: 12px;
`;
const StyleTitle = styled.div`
  font-size: 18px;
  line-height: 20px;
  font-weight: 600;
  margin-top: 16px;
`;
const StyleSpan1 = styled.span`
  font-size: 16px;
  line-height: 20px;
  font-weight: 600;
  margin-top: 16px;
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
                  <StyleTitle>
                    Community feedback inspired these Airbnb updates
                  </StyleTitle>
                  <div>
                    <StyleSpan1>Book</StyleSpan1>
                    <StyleSpan1>3 minutes</StyleSpan1>
                  </div>
                </StyleCompopnent>
                <StyleCompopnent>
                  <StylePic>
                    <StyleImg
                      src="https://images.contentstack.io/v3/assets/bltb428ce5d46f8efd8/blt21c5c61faa60cd5d/6504c4069bb34a5cbcde9b27/image1.png?crop=100p,100p,x0,y0&width=1200&height=675&auto=webp"
                      alt=""
                    />
                  </StylePic>
                  <StyleTitle>
                    Community feedback inspired these Airbnb updates
                  </StyleTitle>
                  <div>
                    <StyleSpan1>Book</StyleSpan1>
                    <StyleSpan1>3 minutes</StyleSpan1>
                  </div>
                </StyleCompopnent>
                <StyleCompopnent>
                  <StylePic>
                    <StyleImg
                      src="https://images.contentstack.io/v3/assets/bltb428ce5d46f8efd8/blt21c5c61faa60cd5d/6504c4069bb34a5cbcde9b27/image1.png?crop=100p,100p,x0,y0&width=1200&height=675&auto=webp"
                      alt=""
                    />
                  </StylePic>
                  <StyleTitle>
                    Community feedback inspired these Airbnb updates
                  </StyleTitle>
                  <div>
                    <StyleSpan1>Book</StyleSpan1>
                    <StyleSpan1>3 minutes</StyleSpan1>
                  </div>
                </StyleCompopnent>
                <StyleCompopnent>
                  <StylePic>
                    <StyleImg
                      src="https://images.contentstack.io/v3/assets/bltb428ce5d46f8efd8/blt21c5c61faa60cd5d/6504c4069bb34a5cbcde9b27/image1.png?crop=100p,100p,x0,y0&width=1200&height=675&auto=webp"
                      alt=""
                    />
                  </StylePic>
                  <StyleTitle>
                    Community feedback inspired these Airbnb updates
                  </StyleTitle>
                  <div>
                    <StyleSpan1>Book</StyleSpan1>
                    <StyleSpan1>3 minutes</StyleSpan1>
                  </div>
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
