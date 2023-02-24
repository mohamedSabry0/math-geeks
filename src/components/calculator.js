import { useState } from 'react';
import ResultArea from './resultArea';
import ButtonsArea from './buttonsArea';

export default function Calculator() {
  const [calcObj, setCalcObj] = useState({
    total: '0',
    next: null,
    operation: null,
  });
  const { total, next } = calcObj;
  return (
    <div className="calculator-page">
      <div>
        <h3>Let&apos;s do some math</h3>
      </div>
      <div className="calculator-container">
        <ResultArea total={total} next={next} />
        <ButtonsArea calcState={{ calcObj, setCalcObj }} />
      </div>
    </div>
  );
}
