import React from "react";
import * as S from "./style";

const Home = () => {
  return (
    <S.mainB>
      <S.mainContainer>
        <S.mainHeader>
          <h1>Our Pricing</h1>
        </S.mainHeader>

        <S.navMain>
          <S.labelTheme>
            <p>Annually</p>
            <input type="checkbox" />
            <span className="check"></span>
            <p>Monthly</p>
          </S.labelTheme>
        </S.navMain>

        <S.sectionCard>
          <S.sectionCards>
            <S.cardsContainer>
              <h2>Basic</h2>
              <span>
                <p id="minus">$</p>
                <p>199.99</p>
              </span>

              <S.navList>
                <ul>
                  <li>500 GB Storage</li>
                  <li>2 Users Allowed</li>
                  <li id="end">Send up to 3 GB</li>
                </ul>
              </S.navList>
              <button>LEARN MORE</button>
            </S.cardsContainer>
          </S.sectionCards>
          <S.sectionCards>asda</S.sectionCards>
          <S.sectionCards>asda</S.sectionCards>
        </S.sectionCard>
      </S.mainContainer>
    </S.mainB>
  );
};
export default Home;
