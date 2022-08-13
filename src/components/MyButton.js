import React from 'react';

class MyButton extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <button type="button" className="">{this.props.val}</button>
    );
  }
}

export default MyButton;
