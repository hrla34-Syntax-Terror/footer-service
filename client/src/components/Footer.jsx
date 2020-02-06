import React from 'react';
import Feedback from './Feedback.jsx';
import Email from './Email.jsx';

class Footer extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        Footer
        <Feedback></Feedback>
        <Email></Email>
      </div>
    )
  }
}

export default Footer;