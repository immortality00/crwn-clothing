import React from "react";
import { connect } from "react-redux";
import { toggleCartHidden } from "../../redux/cart/cart-actions";
import { selectCartItemsCount } from "../../redux/cart/cart-selector";
import { createStructuredSelector } from "reselect";
import {
  CartIconStyles,
  ShoppingIcon,
  ItemCountStyles
} from "./cart-icon.styles";

const CartIcon = ({ toggleCartHidden, itemCount }) => (
  <CartIconStyles onClick={toggleCartHidden}>
    <ShoppingIcon />
    <ItemCountStyles>{itemCount}</ItemCountStyles>
  </CartIconStyles>
);

const mapDispatchToProps = dispatch => ({
  toggleCartHidden: () => dispatch(toggleCartHidden())
});
const mapStateToProps = createStructuredSelector({
  itemCount: selectCartItemsCount
});
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CartIcon);
