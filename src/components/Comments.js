import React from "react";
import { connect } from "react-redux";
import { typeText } from "../redux/comments/actions";

export const Comments = (props) => {
  return (
    <div>
      <input type="text" onChange={(e) => props.typeText(e.target.value)} />
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    searchText: state.searchText,
  };
};

export default connect(mapStateToProps, { typeText })(Comments);
