/* eslint react/prefer-stateless-function: 0 */
import React from 'react';
import MyButton from './MyButton';

class Calculator extends React.Component {
  render() {
    return (
      <div className="Numbers">
        <MyButton val="7" />
        <MyButton val="8" />
        <MyButton val="9" />
        <MyButton val="4" />
        <MyButton val="5" />
        <MyButton val="6" />
        <MyButton val="1" />
        <MyButton val="2" />
        <MyButton val="3" />
        <MyButton classN="Zero" val="0" />
        <MyButton val="." />
      </div>
    );
  }
}

export default Calculator;
