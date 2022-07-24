import styled from "styled-components";

export const mainB = styled.main`
  height: 100vh;
  display: flex;
  justify-content: center;
`;
export const mainContainer = styled.div`
  width: 100%;
  height: 100%;
`;
export const mainHeader = styled.header`
  width: 100%;
  height: 5rem;
  color: hsl(233, 13%, 49%);
  display: flex;
  align-items: center;
  justify-content: center;
`;
export const navMain = styled.nav``;

export const labelTheme = styled.label`
  display: flex;
  align-items: center;
  justify-content: center;
  p {
    color: hsl(234, 14%, 74%);
    opacity: 0.7;
    margin: 0 1rem 0 1rem;
  }
  input {
    -webkit-appearance: none;
    visibility: hidden;
    display: none;
    :checked ~ .check {
      background: #fff;
    }
    :checked ~ .check::before {
      transform: translate(-50px);
    }
    :checked ~ .check::after {
      transform: translate(50px);
    }
  }
  .check {
    position: relative;
    display: block;
    width: 90px;
    height: 40px;
    background: hsl(234, 14%, 74%);
    cursor: pointer;
    border-radius: 20px;
    overflow: hidden;
    transition: ease-in 0.1s;

    ::before {
      content: "";
      position: absolute;
      top: 2px;
      left: 2px;
      background: #fff;
      width: 35px;
      height: 35px;
      border-radius: 50%;
      transition: 0.1s;
    }
    ::after {
      content: "";
      position: absolute;
      top: 2px;
      left: 2px;
      background: hsl(234, 14%, 74%);
      width: 35px;
      height: 35px;
      border-radius: 50%;
      transition: 0.1s;
      transform: translateX(50px);
    }
  }
`;

export const sectionCard = styled.section`
  width: 100%;
  height: 80%;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  flex-wrap: wrap;
`;
export const sectionCards = styled.div`
  width: 280px;
  height: 380px;
  box-shadow: 0 0 1rem #d3d3d3;
  display: flex;
  justify-content: center;
  margin: 1.5rem 0px 1.5rem 0rem;
`;
export const cardsContainer = styled.div`
  width: 90%;
  height: 100%;
  display: flex;
  align-items: center;
  flex-direction: column;
  h2 {
    color: hsl(233, 13%, 49%);
    font-size: 16px;
    margin-top: 2rem;
  }
  span {
    color: hsl(232, 13%, 33%);
    display: flex;
    align-items: center;
    .minus {
      font-size: 2rem;
    }
    p {
      font-size: 3.5rem;
    }
  }
  button {
    border: none;
    cursor: pointer;
    width: 100%;
    height: 2.3rem;
    margin-top: 1.5rem;
    background-image: linear-gradient(
      to right,
      hsl(236, 72%, 79%),
      hsl(237, 63%, 64%)
    );
    color: white;
    letter-spacing: 2px;
    font-size: 0.7rem;
    border-radius: 0.2rem;
    &:hover {
      background: transparent;
      color: hsl(237, 63%, 64%);
      border: 1px solid hsl(237, 63%, 64%);
      border-radius: 0.3rem;
    }
  }
`;
export const navList = styled.nav`
  width: 100%;
  margin-top: 2rem;
  ul {
    list-style: none;
  }
  li {
    padding: 1.3rem;
    border-top: 1px solid hsl(234, 14%, 74%);
    opacity: 0.7;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    max-width: 330px;
    color: hsl(232, 13%, 33%);
    height: 2rem;
    font-size: 0.9rem;
  }
  #end {
    border-bottom: 1px solid hsl(234, 14%, 74%);
    padding: 1.5rem;
  }
`;
export const cardProfessional = styled.div`
  width: 280px;
  height: 430px;
  z-index: 2;
  border-radius: 0.5rem;
  display: flex;
  justify-content: center;
  align-items: center;
  background-image: linear-gradient(
    to right,
    hsl(236, 72%, 79%),
    hsl(237, 63%, 64%)
  );
`;
export const cardProfessionalContainer = styled.div`
  width: 90%;
  height: 90%;
  display: flex;
  align-items: center;
  flex-direction: column;
  h2 {
    color: white;
    font-size: 16px;
    margin-top: 2rem;
  }
  span {
    color: white;
    display: flex;
    align-items: center;
    opacity: 0.9;
    .minus {
      font-size: 2rem;
    }
    p {
      font-size: 3.5rem;
    }
  }
  button {
    border: none;
    width: 100%;
    height: 2.3rem;
    margin-top: 1.5rem;
    background: white;
    color: hsl(237, 63%, 64%);
    letter-spacing: 2px;
    font-size: 0.7rem;
    border-radius: 0.2rem;
    text-transform: uppercase;
    cursor: pointer;
    &:hover {
      background: transparent;
      color: white;
      border: 1px solid white;
      border-radius: 0.3rem;
    }
  }
`;
export const NavListProfessional = styled.nav`
  width: 100%;
  margin-top: 2.2rem;
  ul {
    list-style: none;
  }
  li {
    padding: 1.3rem;
    border-top: 1px solid hsl(234, 14%, 74%);
    opacity: 0.7;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    max-width: 330px;
    color: white;
    font-size: 0.9rem;
    height: 2.3rem;
  }
  #end {
    border-bottom: 1px solid hsl(234, 14%, 74%);
    padding: 1.5rem;
  }
`;
