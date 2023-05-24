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
  h5{
    font-size: 45px;
    text-align: center;
    margin-top: 60px;
  }
`;
// navbar styling
export const NavContainer = styled.div`
  //   border: 1px solid black;
  padding: 20px;
  display: flex;
  justify-content: space-around;
  
  Link{
    text-decoration: none;
  }
 
  span{
    background: white;
    border: 1px solid white;
    padding-inline: 5px;
    height: 30vh;
    font-weight: 900;
    font-size: 13px;
    color: brown;
    text-decoration: none;
    border-radius: 100% ;
    position: relative;
    top: -20px;
  }
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
    cursor: pointer;
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
    display: grid ;
    grid-template-columns: repeat(4, 1fr);
    // align-items: center;
    gap: 90px;
  }
`;

export const TactCard = styled.div`
  margin-top: 50px;
  
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
    color: gray;
  }
`;

// Footer styling
export const FooterHold = styled.div`
  border: 1px solid brown;
  background-color: rgb(81, 52, 20);
  height: 90vh;
  color: white;

  .big-container{
    width: 100%;
    max-width: 900px;
    margin: 140px auto;
    display: grid ;
    grid-template-columns: repeat(3, 1fr);
    gap:20px;
    // justify-content: space-between;
  }
  h5{
    font-size : 15px ;
    line-height: 30px ;
  }
  .footcon{
    justify-content: space-evenly ;
  }
  .foot-text{
    color: white;
    width: 90% ;
  }

  .icon-folder{
    display: flex ;
    gap: 10px ;
    margin-top: 5px ;
  }
  .right-holder{
    width: 130% ;
    margin-top: 130px ;
  }
`;

// ProductCard styling

export const ProductLeft = styled.div`
  margin-top: -40px;

  h1{
    font-size: 30px;
    border: none;
    width: 100%;
    text-align: left;
  }
  p{
    font-weight: 900;
    padding-bottom: 20px;
    margin-top: -20px;

  }
  span{
    border: 1px solid black;
    font-weight: 600;
    font-size: 12px;
    padding: 3px 5px;

  }
  .price_tag{
    width: 30%;
    display: flex;
    justify-content: space-between;
    margin-top: 40px;
  }
  .price_tag > h2{
    font-size: 18px;
  }
  .price_tag>button {
    border: 1px solid black;
    font-size: 12px;
    font-weight: 900;
    padding: 3px;
  }
`
export const ConHolders = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 30px;
  width: 100%;
  
  .product-imgcard{
    height: 50vh;
  }
  .product-imgcard > img{
    height: 100%;
  }
`
export const CartCard = styled.div`
 
  .cart-container{
    border: 2px solid red;
    width: 100%;
    max-width: 800px;
    margin: auto; 
  }

`
