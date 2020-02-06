import React from 'react';

var Email = (props) => {
  return (
    <div className="AJemail">
      <hr className="AJemailspacer"></hr>
      <div className="AJemailtitle">Sign up for REI emails</div>
      <div className="AJemailsubtext">Co-op offers, events & cool new gear</div>
      <form className="AJemailform">
        <div className="AJemailinputgroup">
          <label className="AJemailformlabel">Email</label>
          <input className="AJemailforminput" placeholder="Enter your email address"></input>
        </div>
        <button className="AJemailformbutton">Sign me up!</button>
      </form>
    </div>
  );
}

export default Email;