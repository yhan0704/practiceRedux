import React from "react";
import { connect } from "react-redux";
import { addSubscriber } from "../redux/subscribers/actions";

function Subsribers(props) {
  return (
    <div>
      <p>subscribers:{props.count}</p>
      <button onClick={() => props.addSubscriber()}>subscribe</button>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    count: state.count,
  };
};

// const mapDispatchToProps = (dispatch) => {
//   return {
//     addSubscriber: () => dispatch(addSubscriber()),
//   };
// };

export default connect(mapStateToProps, { addSubscriber })(Subsribers);
