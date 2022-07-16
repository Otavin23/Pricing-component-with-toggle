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
      </S.mainContainer>
    </S.mainB>
  );
};
export default Home;
