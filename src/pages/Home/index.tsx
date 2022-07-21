import React, { useState } from "react";
import * as S from "./style";

const Home = () => {
  const [button, setButton] = useState<boolean>(false);

  function handleupdate() {
    setButton(!button);
  }
  console.log(button dua udbaudb au da);

  return (
    <S.mainB>
      <S.mainContainer>
        <S.mainHeader>
          <h1>Our Pricing</h1>
        </S.mainHeader>
        <S.navMain>
          <S.labelTheme>
            <p>Annually</p>
            <input type="checkbox" onClick={handleupdate} />
            <span className="check"></span>
            <p>Monthly</p>
          </S.labelTheme>
        </S.navMain>

        <S.sectionCard>
          <S.sectionCards>
            <S.cardsContainer>
              <h2>Basic</h2>
              <span>
                <p className="minus">$</p>
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

          <S.cardProfessional>
            <S.cardProfessionalContainer>
              <h2>Professional</h2>
              <span>
                <p className="minus">$</p>
                <p>249.99</p>
              </span>
              <S.NavListProfessional>
                <ul>
                  <li>2 TB Storage</li>
                  <li>10 Users Allowed</li>
                  <li id="end">Send up to 20 GB</li>
                </ul>
              </S.NavListProfessional>
              <button>learn more</button>
            </S.cardProfessionalContainer>
          </S.cardProfessional>

          <S.sectionCards>
            <S.cardsContainer>
              <h2>Master</h2>
              <span>
                <p className="minus">$</p>
                <p>399.99</p>
              </span>

              <S.navList>
                <ul>
                  <li>2 TB Storage</li>
                  <li>10 Users Allowed</li>
                  <li id="end">Send up to 20 GB</li>
                </ul>
              </S.navList>

              <button>LEARN MORE</button>
            </S.cardsContainer>
          </S.sectionCards>
        </S.sectionCard>
      </S.mainContainer>
    </S.mainB>
  );
};
export default Home;
