import React from 'react';
import Feedback from './Feedback.jsx';
import Email from './Email.jsx';
import Engage from './Engage.jsx';
import Links from './Links.jsx';
import Contact from './Contact.jsx';
import Difference from './Difference.jsx';
import Legal from './Legal.jsx';

class Footer extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="AJfootwrapper">
        <Feedback></Feedback>
        <Email></Email>
        <div className="AJbottomfooter">
          <Engage></Engage>
          <Links></Links>
          <Contact></Contact>
          <Difference></Difference>
          <Legal></Legal>
        </div>
      </div>
    )
  }
}

export default Footer;