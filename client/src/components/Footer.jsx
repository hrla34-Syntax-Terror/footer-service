import React from 'react';
import Feedback from './Feedback.jsx';

class Footer extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        Footer
        <Feedback></Feedback>
      </div>
    )
  }
}

export default Footer;