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
  gap: 5px;
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
  width: 100%;
  max-width: 900px;
  margin: 40px auto;

  h1 {
    border: 2px solid black;
    width: 15%;
    font-size: 20px;
    margin: 50px auto;
    text-align: center;
    font-weight: 900;
  }
  img {
    width: 100%;
    height: 70vh;
  }
  h4 {
    width: 90%;
    font-size: 17px;
    font-weight: 900;
    // margin-left: 50px;
    padding-bottom: 10px;
  }
  h6 {
    width: 90%;
    font-size: 14px;
    font-weight: 900;
    // margin-left: 50px;
    color: grey;
  }
`;
export const ConHolder = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 40px;
  width: 100%;
`;

// Menu Styling

export const CoffeeHolder = styled.div`
  width: 100%;
  margin: 80px auto;
  max-width: 900px;

  h4 {
    border: 2px solid black;
    width: 200px;
    font-size: 25px;
    font-style: normal;
    text-align: center;
    margin: 30px auto;
    line-height: 42px;
    font-weight: 900;
    padding: 5px 20px;
  }
  .sp {
    border: 2px solid black;
    width: 200px;
    font-size: 20px;
    font-style: normal;
    text-align: center;
    margin: 30px auto;
    line-height: 42px;
    font-weight: 900;
    padding: 5px 20px;
  }
  .item-grid {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 30px;
  }
`;
export const CoffeeCon = styled.div`
  width: 100%;
  margin-top: 20px;
`;
export const CoffeeImgCon = styled.div`
  width: 100%;
  height: 60%;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;
export const ItemContainer = styled.div`
  background-color: gainsboro;

  .coffee-cart {
    display: flex;
    justify-content: space-between;
    padding: 10px;
  }
  h5 {
    font-weight: 900;
    font-size: 15px;
    margin-top: 10px;
    text-transform: Capitalize;
  }
  button {
    border: 1px solid black;
    text-transform: uppercase;
    font-size: 8px;
    font-weight: 900;
    padding-inline: 13px;
    background: none;
  }
  p {
    font-size: 20px;
    font-weight: 900;
    color: rgb(148, 109, 58);
    padding: 10px;
  }
  .pp {
    font-size: 10px;
    color: grey;
  }
`;

// contact styling
export const ContactPage = styled.div`
  width: 100%;
  max-width: 900px;
  height: 70vh;
  margin: auto;
  h4 {
    border: 2px solid black;
    font-size: 25px;
    width: 20%;
    margin: 30px auto;
    text-align: center;
  }

  .item-holder {
    width: 100%;
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    gap: 15px;
  }
`;

export const TactCard = styled.div`
  widthg: 100%;
  margin-top: 50px;
  padding: 20px;

  .icon {
    font-size: 40px;
    width: 100%;
    margin: auto;

    margin-bottom: 20px;
    display: flex;
    justify-content: center;
  }
  .tt h5 {
    width: 100%;
    margin: auto;
    font-size: 20px;
    font-weight: 900;
    font-normal: normal;
    margin-bottom: 10px;
    text-align: center;
  }
  .px h5 {
    font-size: 14px;
    font-weight: 900;
    text-align: center;
    color : gray ;
  }
`;
