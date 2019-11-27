import React from "react";
import {
  CollectionPreviewStyles,
  TitleStyles,
  PreviewStyles
} from "./collection-preview.styles";
import CollectionItem from "../collection-item/collection-item";

const CollectionPreview = ({ title, items }) => (
  <CollectionPreviewStyles>
    <TitleStyles>{title.toUpperCase()}</TitleStyles>
    <PreviewStyles>
      {items
        .filter((item, idx) => idx < 4)
        .map(item => (
          <CollectionItem key={item.id} item={item} />
        ))}
    </PreviewStyles>
  </CollectionPreviewStyles>
);

export default CollectionPreview;
