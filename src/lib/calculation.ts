export type TipInput = { amount: string; tipPercent: string; numPeople: string };
export type TipResult =
  | { ok: true; tip: number; total: number; perPerson: number }
  | { ok: false; error: string };

export function calculateTip(input: TipInput): TipResult {
  void input;
  return { ok: false, error: 'nicht implementiert' };
}
