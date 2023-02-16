import PropTypes from 'prop-types';
import calculate from '../logic/calculate';

function SpecialOperations() {
  return (
    <div className="special-container">
      <Button name="AC" />
      <Button name="+/-" />
      <Button name="%" />
    </div>
  );
}

function Button(props) {
  const { s, name } = props;
  function handleClick(event) {
    const buttonName = event.target.innerText;
    calculate({}, buttonName);
  }
  return (
    <button onClick={handleClick} type="button" className={`w-${s}`}>
      {name}
    </button>
  );
}

Button.propTypes = { s: PropTypes.number, name: PropTypes.string };

Button.defaultProps = { s: 3, name: '' };

function Numbers() {
  return (
    <div className="numbers-container">
      <Button name="1" />
      <Button name="2" />
      <Button name="3" />
      <Button name="4" />
      <Button name="5" />
      <Button name="6" />
      <Button name="7" />
      <Button name="8" />
      <Button name="9" />
      <Button s={6} name="0" />
      <Button name="." />
    </div>
  );
}

function BasicOperations() {
  return (
    <div className="basic-container">
      <Button name="/" />
      <Button name="x" />
      <Button name="-" />
      <Button name="+" />
      <Button name="=" />
    </div>
  );
}

export default function ButtonsArea() {
  return (
    <div className="all-btns">
      <div className="g-btns">
        <SpecialOperations />
        <Numbers />
      </div>
      <BasicOperations />
    </div>
  );
}
