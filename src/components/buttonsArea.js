import PropTypes from 'prop-types';

function SpecialOperations() {
  return (
    <div className="special-container" />
  );
}

function Button(props) {
  const { s, val } = props;
  return (
    <button type="button" className={`w-${s}`}>{val}</button>
  );
}

Button.propTypes = { s: PropTypes.number, val: PropTypes.number };

Button.defaultProps = { s: 3, val: '.' };

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
      <Button />
    </div>
  );
}

function BasicOperations() {
  return (
    <div className="basic-container" />
  );
}

export default function ButtonsArea() {
  return (
    <div className="flex">
      <div className="flex">
        <SpecialOperations />
        <Numbers />
      </div>
      <BasicOperations />
    </div>
  );
}
