function SpecialOperations() {
  return (
    <div className="special-container" />
  );
}

function Numbers() {
  return (
    <div className="numbers-container" />
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
