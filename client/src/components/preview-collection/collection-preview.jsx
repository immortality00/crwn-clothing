import React from "react";
import { withRouter } from "react-router-dom";
import {
  CollectionPreviewStyles,
  TitleStyles,
  PreviewStyles
} from "./collection-preview.styles";
import CollectionItem from "../collection-item/collection-item";

const CollectionPreview = ({ title, items, history, match, routeName }) => (
  <CollectionPreviewStyles>
    <TitleStyles onClick={() => history.push(`${match.path}/${routeName}`)}>
      {title.toUpperCase()}
    </TitleStyles>
    <PreviewStyles>
      {items
        .filter((item, idx) => idx < 4)
        .map(item => (
          <CollectionItem key={item.id} item={item} />
        ))}
    </PreviewStyles>
  </CollectionPreviewStyles>
);

export default withRouter(CollectionPreview);
