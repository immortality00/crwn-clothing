import React from "react";
import MenuItem from "../menu-items/menu-item";
import { DirectoryMenuStyles } from "./directory.styles";
import { connect } from "react-redux";
import { selectDirectorySections } from "../../redux/directory/directory-selectors";
import { createStructuredSelector } from "reselect";

const Directory = ({ sections }) => (
  <DirectoryMenuStyles>
    {sections.map(({ id, ...otherSectionProps }) => (
      <MenuItem key={id} {...otherSectionProps} />
    ))}
  </DirectoryMenuStyles>
);

const mapStateToProps = createStructuredSelector({
  sections: selectDirectorySections
});

export default connect(mapStateToProps)(Directory);
