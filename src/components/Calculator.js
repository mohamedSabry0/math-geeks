import React from 'react';
import MyButton from './MyButton';

class Calculator extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <MyButton val="1" />
      </div>
    );
  }
}

export default Calculator;
