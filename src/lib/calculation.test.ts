import { describe, expect, it } from 'vitest';
import { calculateTip } from './calculation';

describe('calculateTip', () => {
  it('AC-01: 100, 10 und 2 ergeben Trinkgeld 10,00, Gesamt 110,00 und 55,00 pro Person', () => {
    const result = calculateTip({ amount: '100', tipPercent: '10', numPeople: '2' });
    expect(result.ok).toBe(true);
    if (!result.ok) return;
    expect(result.tip).toBe(10);
    expect(result.total).toBe(110);
    expect(result.perPerson).toBe(55);
  });

  it('AC-02: 99.99, 15 und 3 ergeben Trinkgeld 15,00, Gesamt 114,99 und 38,33 pro Person', () => {
    const result = calculateTip({
      amount: '99.99',
      tipPercent: '15',
      numPeople: '3',
    });
    expect(result.ok).toBe(true);
    if (!result.ok) return;
    expect(result.tip).toBe(15);
    expect(result.total).toBe(114.99);
    expect(result.perPerson).toBe(38.33);
  });

  describe('ungültige Eingaben (AC-03)', () => {
    it('leerer Betrag ergibt einen Fehler', () => {
      const result = calculateTip({ amount: '', tipPercent: '10', numPeople: '2' });
      expect(result).toEqual({ ok: false, error: expect.any(String) });
    });

    it('leeres Trinkgeld-Prozent ergibt einen Fehler', () => {
      const result = calculateTip({ amount: '100', tipPercent: '', numPeople: '2' });
      expect(result).toEqual({ ok: false, error: expect.any(String) });
    });

    it('leere Personenzahl ergibt einen Fehler', () => {
      const result = calculateTip({ amount: '100', tipPercent: '10', numPeople: '' });
      expect(result).toEqual({ ok: false, error: expect.any(String) });
    });

    it('nicht-numerischer Betrag ergibt einen Fehler', () => {
      const result = calculateTip({
        amount: 'abc',
        tipPercent: '10',
        numPeople: '2',
      });
      expect(result).toEqual({ ok: false, error: expect.any(String) });
    });

    it('nicht-numerisches Trinkgeld-Prozent ergibt einen Fehler', () => {
      const result = calculateTip({
        amount: '100',
        tipPercent: 'zehn',
        numPeople: '2',
      });
      expect(result).toEqual({ ok: false, error: expect.any(String) });
    });

    it('nicht-numerische Personenzahl ergibt einen Fehler', () => {
      const result = calculateTip({
        amount: '100',
        tipPercent: '10',
        numPeople: 'viele',
      });
      expect(result).toEqual({ ok: false, error: expect.any(String) });
    });

    it('negativer Betrag ergibt einen Fehler', () => {
      const result = calculateTip({ amount: '-5', tipPercent: '10', numPeople: '2' });
      expect(result).toEqual({ ok: false, error: expect.any(String) });
    });

    it('negatives Trinkgeld-Prozent ergibt einen Fehler', () => {
      const result = calculateTip({
        amount: '100',
        tipPercent: '-10',
        numPeople: '2',
      });
      expect(result).toEqual({ ok: false, error: expect.any(String) });
    });

    it('Personenzahl 0 ergibt einen Fehler', () => {
      const result = calculateTip({ amount: '100', tipPercent: '10', numPeople: '0' });
      expect(result).toEqual({ ok: false, error: expect.any(String) });
    });

    it('Personenzahl kleiner als 1 ergibt einen Fehler', () => {
      const result = calculateTip({ amount: '100', tipPercent: '10', numPeople: '0.5' });
      expect(result).toEqual({ ok: false, error: expect.any(String) });
    });

    it('unendlicher Wert ergibt einen Fehler', () => {
      const result = calculateTip({
        amount: 'Infinity',
        tipPercent: '10',
        numPeople: '2',
      });
      expect(result).toEqual({ ok: false, error: expect.any(String) });
    });
  });
});
