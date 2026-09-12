VERDICT: APPROVED

## Sicherheitsprüfung

### 1. Secrets
Keine hartkodierten Schlüssel, Passwörter, Token oder geheimen URLs im sichtbaren Code. `.gitignore` schließt typische lokale Umgebungsdateien (`.env`, `node_modules`, Logs) aus.

### 2. Injection & Eingaben
`src/lib/calculation.ts` validiert alle drei Eingaben über `parseFinite`:

- leere Strings werden als `null` zurückgegeben,
- `Number(...)` mit `Number.isFinite` fängt `NaN`, `Infinity` und `-Infinity` ab,
- negative Werte und Personenzahlen unter `1` werden abgelehnt.

Es kommen weder `eval`, `new Function`, `document.write`, `innerHTML` noch `dangerouslySetInnerHTML` vor. Alle abgeleiteten Werte werden ausschließlich über React-Textknoten gerendert (`{result.tip.toFixed(2)}` usw.). Das Standard-Escaping von React greift.

**AC-07: erfüllt.**  
**AC-08: erfüllt.**

### 3. AuthN/AuthZ
Nicht anwendbar. Die Anwendung ist eine rein clientseitige SPA ohne serverseitige Endpunkte, Sessions oder Zugriffsschutz.

### 4. Dependencies
Der Scanner `npm audit` meldet:

- **vitest**: critical (`GHSA-5xrq-8626-4rwp`) – betrifft den Vitest-UI-Server (`<3.2.6`), Fix in `5.0.0`
- **vite**: high (`GHSA-fx2h-pf6j-xcff`) – Path Traversal / Dateileck im Dev-Server (`<=6.4.2`), Fix in `8.3.0`
- **@vitest/mocker**: moderate (`GHSA-82fw-gwwq-j7x9`) – Fix über Vitest `5.0.0`
- **esbuild**: moderate (`GHSA-67mh-4wv8-2f99`) – betrifft den Dev-Server (`<=0.24.2`), Fix über Vite `8.3.0`

Diese Pakete sind Test-/Build-Werkzeuge und nicht Teil des ausgelieferten statischen Produkt-Bundles. Der kritische Vitest-UI-Server ist in `vite.config.ts` nicht aktiviert, und der Vite-Dev-Server ist keine produktiv ausgelieferte Komponente. Innerhalb der Sicherheitskriterien dieser Spezifikation (`AC-07`, `AC-08`) ergeben sich daraus keine Verstöße; es besteht kein blockierendes Finding.

**Empfehlung:** `vite` und `vitest` auf die vom Audit genannten Hauptversionen aktualisieren und den Dev-/UI-Server nicht ungeschützt im Netz exponieren.

`semgrep` wurde nicht ausgeführt (`[skipped]`). Das Fehlen dieser Ausgabe ist keine Evidenz für eine Schwachstelle; die Lücke wird als Hinweis dokumentiert.

### 5. Konfiguration & Transport
Keine auffälligen Debug-, CORS- oder Permissions-Einstellungen sichtbar. Die Vite-Konfiguration ist minimal und aktiviert keine riskanten Serveroptionen.

## Notes (non-blocking)
- `npm audit` zeigt bekannte Advisories für Dev-/Build-Abhängigkeiten (`vite`, `vitest`, `@vitest/mocker`, `esbuild`). Da die Spec keine Anforderung an Dependency-Versionen enthält und die betroffenen Serverfunktionen hier nicht aktiviert oder exponiert sind, fließt dies nicht in das Verdict ein.
- Die Berechnung prüft die Ergebnisse nicht zusätzlich auf Endlichkeit (`tip`, `total`, `perPerson`). Bei extrem großen, aber endlichen Eingaben wie `1e308` könnten `Infinity`-Ergebnisse entstehen. Dies ist kein Kriteriumsverstoß und kein vorliegender XSS-/Injection-Pfad, sollte aber funktional im Blick bleiben.