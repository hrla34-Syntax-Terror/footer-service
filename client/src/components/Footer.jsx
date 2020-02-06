import React from 'react';
import Feedback from './Feedback.jsx';
import Email from './Email.jsx';
import Engage from './Engage.jsx';
import Links from './Links.jsx';

class Footer extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="AJfootwrapper">
        Footer
        <Feedback></Feedback>
        <Email></Email>
        <div className="AJbottomfooter">
          <Engage></Engage>
          <Links></Links>
        </div>
      </div>
    )
  }
}

export default Footer;