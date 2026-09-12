function App() {
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
          />
        </div>
      </section>
    </main>
  );
}

export default App;
