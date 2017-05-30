import React from "react";
import { connect } from "react-redux";

const Button = props => (
  <button
    className={props.messager.pinging ? "active" : ""}
    onClick={() => props.dispatch(toggleCircleAction)}
  >
    {props.messager.pinging ? "Stop pinging" : "Start pinging"}
  </button>
);

const ConnectedButton = connect(state => ({ messager: state.messager }))(
  Button
);

const toggleCircleAction = {
  type: "PING_TOGGLE",
  meta: { toWorker: true }
};

const FRAMES_TILL_FULL = 80;

const Animation = props => (
  <div className="animation">
    <div
      className="animated"
      style={{
        transform: `scale(${props.animation.scale % FRAMES_TILL_FULL / FRAMES_TILL_FULL})`
      }}
    />
  </div>
);

const ConnectedAnimation = connect(state => ({ animation: state.animation }))(
  Animation
);

const Circle = props => (
  <div>
    <h3>Circle</h3>
    <ConnectedButton />
    <ConnectedAnimation />
  </div>
);

export default Circle;
