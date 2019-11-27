import React from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import CartItem from "../cart-item/cart-item";
import { selectCartItems } from "../../redux/cart/cart-selector";
import {
  CartDropdownStyles,
  CartItemsStyles,
  CartDropdownButton,
  EmptyMessageStyles
} from "./cart-dropdown.styles";
import { withRouter } from "react-router-dom";
import { toggleCartHidden } from "../../redux/cart/cart-actions";

const CartDropdown = ({ cartItems, history, dispatch }) => (
  <CartDropdownStyles>
    <CartItemsStyles>
      {cartItems.length ? (
        cartItems.map(cartItem => (
          <CartItem key={cartItem.id} item={cartItem} />
        ))
      ) : (
        <EmptyMessageStyles>Your Cart Is Empty</EmptyMessageStyles>
      )}
    </CartItemsStyles>
    <CartDropdownButton
      onClick={() => {
        history.push("/checkout");
        dispatch(toggleCartHidden());
      }}
    >
      GO TO CHECKOUT
    </CartDropdownButton>
  </CartDropdownStyles>
);

const mapStateToProps = createStructuredSelector({
  cartItems: selectCartItems
});

export default withRouter(connect(mapStateToProps)(CartDropdown));
