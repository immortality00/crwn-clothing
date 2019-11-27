import styled from "styled-components";
import CustomButton from "../custom-button/custom-button";

export const CartDropdownStyles = styled.div`
  position: absolute;
  width: 240px;
  height: 340px;
  display: flex;
  flex-direction: column;
  padding: 20px;
  border: 1px solid black;
  background-color: white;
  top: 90px;
  right: 40px;
  z-index: 5;
  overflow-y: auto;

  button {
    margin-top: auto;
  }
`;
export const CartItemsStyles = styled.div`
  height: 240px;
  display: block;
  flex-direction: column;
  overflow: scroll;
`;

export const EmptyMessageStyles = styled.div`
  font-size: 18px;
  margin: 50px auto;
`;
export const CartDropdownButton = styled(CustomButton)`
  margin-top: auto;
`;
