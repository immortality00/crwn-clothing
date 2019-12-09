import React from "react";
import {
  CartItemStyles,
  ItemDetailsStyled,
  TextStyled
} from "./cart-item.styles";

const CartItem = ({ item: { imageUrl, price, name, quantity } }) => (
  <CartItemStyles>
    <img src={imageUrl} alt="item" />
    <ItemDetailsStyled>
      <TextStyled>{name}</TextStyled>
      <span>
        {quantity} * ${price}
      </span>
    </ItemDetailsStyled>
  </CartItemStyles>
);

export default React.memo(CartItem);
