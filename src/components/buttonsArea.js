import PropTypes from 'prop-types';
import calculate from '../logic/calculate';

function Button({ s, name, calcState }) {
  const { calcObj, setCalcObj } = calcState;
  function handleClick(event) {
    const buttonName = event.target.innerText;
    setCalcObj(calculate(calcObj, buttonName));
  }
  return (
    <button onClick={handleClick} type="button" className={`w-${s}`}>
      {name}
    </button>
  );
}

function ButtonsArea({ calcState }) {
  return (
    <div className="all-btns">
      <div className="g-btns">
        <div className="special-container">
          <Button name="AC" calcState={calcState} />
          <Button name="+/-" calcState={calcState} />
          <Button name="%" calcState={calcState} />
        </div>
        <div className="numbers-container">
          <Button name="1" calcState={calcState} />
          <Button name="2" calcState={calcState} />
          <Button name="3" calcState={calcState} />
          <Button name="4" calcState={calcState} />
          <Button name="5" calcState={calcState} />
          <Button name="6" calcState={calcState} />
          <Button name="7" calcState={calcState} />
          <Button name="8" calcState={calcState} />
          <Button name="9" calcState={calcState} />
          <Button s={6} name="0" calcState={calcState} />
          <Button name="." calcState={calcState} />
        </div>
      </div>
      <div className="basic-container">
        <Button name="÷" calcState={calcState} />
        <Button name="x" calcState={calcState} />
        <Button name="-" calcState={calcState} />
        <Button name="+" calcState={calcState} />
        <Button name="=" calcState={calcState} />
      </div>
    </div>
  );
}

const calcTypes = {
  calcObj: PropTypes.shape({
    total: PropTypes.string,
    next: PropTypes.string,
    operation: PropTypes.string,
  }).isRequired,
  setCalcObj: PropTypes.func.isRequired,
};

Button.propTypes = {
  s: PropTypes.number,
  name: PropTypes.string,
  calcState: PropTypes.shape(calcTypes).isRequired,
};
Button.defaultProps = { s: 3, name: '' };

ButtonsArea.propTypes = { calcState: PropTypes.shape(calcTypes).isRequired };

export default ButtonsArea;
