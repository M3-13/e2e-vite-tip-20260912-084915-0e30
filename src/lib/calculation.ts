export type TipInput = { amount: string; tipPercent: string; numPeople: string };
export type TipResult =
  | { ok: true; tip: number; total: number; perPerson: number }
  | { ok: false; error: string };

function round2(x: number): number {
  return Math.round(x * 100) / 100;
}

function parseFinite(value: string): number | null {
  if (value.trim() === '') {
    return null;
  }
  const n = Number(value);
  if (!Number.isFinite(n)) {
    return null;
  }
  return n;
}

export function calculateTip(input: TipInput): TipResult {
  const amount = parseFinite(input.amount);
  const tipPercent = parseFinite(input.tipPercent);
  const numPeople = parseFinite(input.numPeople);

  if (amount === null || tipPercent === null || numPeople === null) {
    return { ok: false, error: 'Bitte gib in allen Feldern gültige Zahlen ein.' };
  }
  if (amount < 0) {
    return { ok: false, error: 'Der Betrag darf nicht negativ sein.' };
  }
  if (tipPercent < 0) {
    return { ok: false, error: 'Das Trinkgeld-Prozent darf nicht negativ sein.' };
  }
  if (numPeople < 1) {
    return { ok: false, error: 'Die Personenzahl muss mindestens 1 betragen.' };
  }

  const tip = round2((amount * tipPercent) / 100);
  const total = round2(amount + tip);
  const perPerson = round2(total / numPeople);

  return { ok: true, tip, total, perPerson };
}
