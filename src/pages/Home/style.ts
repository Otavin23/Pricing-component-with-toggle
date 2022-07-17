import styled from "styled-components";

export const mainB = styled.main`
  width: 850px;
  height: 100vh;
  display: flex;
  justify-content: center;
`;
export const mainContainer = styled.div`
  width: 95%;
  height: 100%; da idain idan dna
   dai dniand aindi a
   dai ndi nia ndiand 
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
