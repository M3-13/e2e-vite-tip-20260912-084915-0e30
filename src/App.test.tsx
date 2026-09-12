import { afterEach, beforeEach, describe, expect, it } from 'vitest';
import { act } from 'react';
import { createRoot, type Root } from 'react-dom/client';
import App from './App';

let container: HTMLDivElement;
let root: Root;

beforeEach(() => {
  (globalThis as { IS_REACT_ACT_ENVIRONMENT?: boolean }).IS_REACT_ACT_ENVIRONMENT =
    true;
  container = document.createElement('div');
  document.body.appendChild(container);
  root = createRoot(container);
});

afterEach(() => {
  act(() => root.unmount());
  document.body.removeChild(container);
});

describe('App scaffold', () => {
  it('renders the heading', () => {
    act(() => root.render(<App />));
    expect(container.querySelector('h1')?.textContent).toBe('Trinkgeld-Rechner');
  });

  it('renders three labelled input fields', () => {
    act(() => root.render(<App />));
    const labels = Array.from(container.querySelectorAll('label')).map(
      (l) => l.textContent,
    );
    expect(labels).toEqual(['Betrag', 'Trinkgeld-Prozent (%)', 'Personenzahl']);
    expect(container.querySelectorAll('input')).toHaveLength(3);
  });
});
