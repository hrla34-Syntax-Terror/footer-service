import React from 'react';

var Feedback = (props) => {
  return (
    <div className="AJfeedback">
      <img className="AJlefttrees AJfooterTrees" src="https://hrla34-syntax-terror-anthony.s3-us-west-1.amazonaws.com/trees_left.svg"></img>
      <div className="AJfeedbacktext">How are we doing? <a className="AJfeedbacktextlink">Give us Feedback</a> on this page.</div>
      <img className="AJrighttrees AJfooterTrees" src="https://hrla34-syntax-terror-anthony.s3-us-west-1.amazonaws.com/right.svg"></img>
    </div>
  );
}