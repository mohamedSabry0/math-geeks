import PropTypes from 'prop-types';

function SpecialOperations() {
  return (
    <div className="special-container">
      <Button op="C" />
      <Button op="+/-" />
      <Button op="%" />
    </div>
  );
}

function Button(props) {
  const { s, val, op } = props;
  return (
    <button type="button" className={`w-${s}`}>
      {val}
      {op}
    </button>
  );
}

Button.propTypes = { s: PropTypes.number, val: PropTypes.number, op: PropTypes.string };

Button.defaultProps = { s: 3, val: '', op: '' };

function Numbers() {
  return (
    <div className="numbers-container">
      <Button val={1} />
      <Button val={2} />
      <Button val={3} />
      <Button val={4} />
      <Button val={5} />
      <Button val={6} />
      <Button val={7} />
      <Button val={8} />
      <Button val={9} />
      <Button s={6} val={0} />
      <Button op="." />
    </div>
  );
}

function BasicOperations() {
  return (
    <div className="basic-container">
      <Button op="/" />
      <Button op="x" />
      <Button op="-" />
      <Button op="+" />
      <Button op="=" />
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
