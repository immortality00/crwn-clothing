import React from "react";
import {
  CollectionItemStyles,
  ImageStyles,
  CollectionFooterStyles,
  NameStyles,
  PriceStyles,
  AddButton
} from "./collection-item.styles";
import { connect } from "react-redux";
import { addItem } from "../../redux/cart/cart-actions";

const CollectionItem = ({ item, addItem }) => {
  const { name, price, imageUrl } = item;
  return (
    <CollectionItemStyles>
      <ImageStyles className="image" imageUrl={imageUrl} />
      <CollectionFooterStyles>
        <NameStyles>{name}</NameStyles>
        <PriceStyles>{price}</PriceStyles>
      </CollectionFooterStyles>
      <AddButton onClick={() => addItem(item)} inverted>
        Add To Cart
      </AddButton>
    </CollectionItemStyles>
  );
};

const mapDispatchToProps = dispatch => ({
  addItem: item => dispatch(addItem(item))
});
export default connect(
  null,
  mapDispatchToProps
)(CollectionItem);
