import React, { useEffect, useState } from "react";
import * as S from "./style";
import { plan } from "../../@types/interfaces";

const Home = () => {
  const [button, setButton] = useState<boolean>(false);
  const [prices, setPrices] = useState<plan>();

  function handleupdate() {
    if (button === false) {
      setPrices({
        prices: {
          basic: 19.99,
          professional: 24.99,
          master: 39.99,
        },
      });
    }
    if (button === true) {
      setPrices({
        prices: {
          basic: 199.99,
          professional: 249.99,
          master: 399.99,
        },
      });
    }
    setButton(!button);
  }

  console.log(prices?.prices.basic.toFixed(2));

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
                <p>
                  {prices?.prices.master === undefined
                    ? 199.99
                    : prices?.prices.basic}
                </p>
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
                <p>
                  {prices?.prices.master === undefined
                    ? 249.99
                    : prices?.prices.professional}
                </p>
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
                <p>
                  {prices?.prices.master === undefined
                    ? 399.99
                    : prices?.prices.master}
                </p>
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
