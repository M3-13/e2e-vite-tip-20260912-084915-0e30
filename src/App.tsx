import { useState, type CSSProperties } from 'react';
import { calculateTip, type TipResult } from './lib/calculation';

const errorStyle: CSSProperties = {
  color: 'var(--color-error)',
  fontSize: '14px',
  margin: 'var(--space-1) 0 0',
};

const resultCardStyle: CSSProperties = {
  marginTop: 'var(--space-4)',
};

const resultRowStyle: CSSProperties = {
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'baseline',
  gap: 'var(--space-3)',
  padding: 'var(--space-3) 0',
  borderBottom: '1px solid var(--color-border)',
  lineHeight: 1.4,
};

const resultRowLastStyle: CSSProperties = {
  ...resultRowStyle,
  borderBottom: 'none',
  paddingBottom: 0,
};

const resultLabelStyle: CSSProperties = {
  fontSize: '14px',
  color: 'var(--color-muted)',
};

const resultValueStyle: CSSProperties = {
  fontSize: '20px',
  color: 'var(--color-fg)',
  fontVariantNumeric: 'tabular-nums',
};

type ResultRowProps = {
  label: string;
  value: string;
  last?: boolean;
};

function ResultRow({ label, value, last = false }: ResultRowProps) {
  return (
    <div style={last ? resultRowLastStyle : resultRowStyle}>
      <span style={resultLabelStyle}>{label}</span>
      <span style={resultValueStyle}>{value}</span>
    </div>
  );
}

function App() {
  const [amount, setAmount] = useState('');
  const [tipPercent, setTipPercent] = useState('');
  const [numPeople, setNumPeople] = useState('');

  const result: TipResult = calculateTip({ amount, tipPercent, numPeople });

  return (
    <main className="page">
      <h1>Trinkgeld-Rechner</h1>
      <section className="card">
        <div className="field">
          <label htmlFor="amount">Betrag</label>
          <input
            id="amount"
            name="amount"
            type="text"
            inputMode="decimal"
            placeholder="0,00"
            value={amount}
            onChange={(event) => setAmount(event.target.value)}
          />
        </div>
        <div className="field">
          <label htmlFor="tipPercent">Trinkgeld-Prozent (%)</label>
          <input
            id="tipPercent"
            name="tipPercent"
            type="text"
            inputMode="decimal"
            placeholder="10"
            value={tipPercent}
            onChange={(event) => setTipPercent(event.target.value)}
          />
        </div>
        <div className="field">
          <label htmlFor="numPeople">Personenzahl</label>
          <input
            id="numPeople"
            name="numPeople"
            type="text"
            inputMode="numeric"
            placeholder="1"
            value={numPeople}
            onChange={(event) => setNumPeople(event.target.value)}
          />
        </div>
      </section>

      {result.ok ? (
        <section className="card" style={resultCardStyle}>
          <ResultRow label="Trinkgeld" value={result.tip.toFixed(2)} />
          <ResultRow label="Gesamtbetrag" value={result.total.toFixed(2)} />
          <ResultRow label="Betrag pro Person" value={result.perPerson.toFixed(2)} last />
        </section>
      ) : (
        <p role="alert" style={errorStyle}>
          {result.error}
        </p>
      )}
    </main>
  );
}

export default App;
