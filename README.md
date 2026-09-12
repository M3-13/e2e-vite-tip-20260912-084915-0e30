# Trinkgeld-Rechner

Ein kleiner Trinkgeld-Rechner als Single-Page-Web-App. Der Nutzer gibt Betrag,
Trinkgeld-Prozent und Personenzahl ein; Trinkgeld, Gesamtbetrag und Betrag pro
Person werden live auf ganze Cent gerundet angezeigt. Ungültige Eingaben zeigen
eine verständliche Fehlermeldung statt eines Ergebnisses. Die Berechnung liegt
in einer eigenen reinen Funktion mit Unit-Tests.

## Tech-Stack

- **Sprache**: TypeScript
- **Framework**: React
- **Build-Tool**: Vite
- **Tests**: Vitest
- **Paketmanager**: npm

## Installation

```bash
npm install
```

## Entwicklung

Startet den Vite-Dev-Server mit Hot-Reload:

```bash
npm run dev
```

## Build

Baut die App für die Produktion in den Ordner `dist/`:

```bash
npm run build
```

## Test

Führt die Unit-Tests der Berechnungsfunktion aus:

```bash
npm test
```

## Bedienung

Die App zeigt drei Eingabefelder:

- **Betrag** – der Rechnungsbetrag
- **Trinkgeld-Prozent (%)** – der Trinkgeld-Prozentsatz
- **Personenzahl** – auf wie viele Personen aufgeteilt wird

Bei jeder Änderung werden die Live-Ergebnisse (Trinkgeld, Gesamtbetrag, Betrag
pro Person) sofort neu berechnet, ohne dass ein Absenden nötig ist. Ungültige
Eingaben (leer, nicht-numerisch, negativ oder Personenzahl unter 1) zeigen eine
Fehlermeldung statt eines Ergebnisses.

## Funktionsliste

- Drei beschriftete Eingabefelder (Betrag, Trinkgeld-Prozent, Personenzahl)
- Live-Berechnung von Trinkgeld, Gesamtbetrag und Betrag pro Person
- Kaufmännische Rundung auf zwei Nachkommastellen
- Validierung der Eingaben mit verständlicher Fehlermeldung
- Reine, deterministische Berechnungsfunktion mit Unit-Tests
- Responsive Darstellung bis 480px Breite
