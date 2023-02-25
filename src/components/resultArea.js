import PropTypes from 'prop-types';

function ResultArea({ next, total }) {
  if (next) {
    return (
      <div className="result">{next}</div>
    );
  } if (total) {
    return (
      <div className="result">{total}</div>
    );
  }
  return (
    <div className="result">0</div>
  );
}

ResultArea.propTypes = { next: PropTypes.string, total: PropTypes.string };
ResultArea.defaultProps = { next: null, total: null };

export default ResultArea;
