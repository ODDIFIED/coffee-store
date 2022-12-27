import styled from "styled-components";
// header styling
export const Banner = styled.div`
  height: 80vh;
`;

export const Content = styled.div`
  // border:1px solid black;
  width: 100%;
  max-width: 700px;
  margin: 40px auto;
  color: white;
  padding: 5px;

  h4 {
    font-size: 45px;
    font-weight: 800;
  }

  p {
    font-size: 20px;
    font-weight: 100;
    text-align: center;
  }

  .btn {
    width: 100%;
    max-width: 150px;
    margin: 40px auto;
  }
  .btn > button {
    width: 100%;
    background: #794e21;
    padding: 10px 16px;
    color: white;
    font-weight: 900;
    border: none;
  }
`;
// navbar styling
export const NavContainer = styled.div`
  //   border: 1px solid black;
  padding: 20px;
  display: flex;
  justify-content: space-around;
`;
export const LogoContainer = styled.div`
  display: flex;

  img {
    height: 30px;
  }
  h6 {
    color: white;
    font-size: 18px;
    font-weight: 900;
  }
`;
export const NavItems = styled.div`
  text-decoration: none;
  margin-top: 3px;

  a {
    text-decoration: none;
    color: white;
    font-size: 16px;
    text-transform: Uppercase;
    margin-left: 20px;
  }
`;

// About us styling
export const AboutHeader = styled.div`
  h1 {
    border: 2px solid black;
    width: 15%;
    margin: 50px auto;
    text-align: center;
    font-weight: 900;
  }
  img {
    height: 80vh;
  }
  h4 {
    width: 100%;
    font-size: 21px;
    font-weight: 900;
    margin-left: 50px;
    padding-bottom: 30px;
  }
  h6 {
    width: 100%;
    font-size: 16px;
    font-weight: 900;
    margin-left: 50px;
  }
`;
export const ConHolder = styled.div`
display: flex;
justify-content: space-between;
width: 100%;
max-width: 1000px;
margin: 40px auto;
`;



// About Us Styling
export const CoffeeContainer = styled.div`
border:1px solid red;

`
export const CoffeeImgCon = styled.div`
border:1px solid red;

`
export const CoffeeCon = styled.div`
border:1px solid red;

`
export const ItemContainer = styled.div`
`
