# Design — Project Identity

> This document is project-long-lived. Tokens are not changed without
> the Architect's approval. Developers MUST use these tokens
> instead of improvising their own colors/spacings.

## Style Direction

Minimalistisch hell mit ruhigem Petrol-Akzent, aufgeräumt und sachlich wie ein vertrauenswürdiges Finanz-Tool.

## Colors

- `--color-bg`: **#F7F8F7**
- `--color-surface`: **#FFFFFF**
- `--color-fg`: **#1A1D1C**
- `--color-accent`: **#0F766E**
- `--color-accent_hover`: **#0C5F59**
- `--color-accent_active`: **#0A4F4A**
- `--color-border`: **#E2E6E4**
- `--color-muted`: **#5F6B68**
- `--color-error`: **#B3261E**
- `--color-focus_ring`: **#0F766E33**

## Typography

- `font_family`: Inter, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif
- `heading_weight`: 600
- `body_weight`: 400
- `size_scale`: xs: 12px; sm: 14px; md: 16px; lg: 20px; xl: 28px

## Spacing Scale

- `--space-0`: 4px
- `--space-1`: 8px
- `--space-2`: 12px
- `--space-3`: 16px
- `--space-4`: 24px
- `--space-5`: 32px
- `--space-6`: 48px

## Border-Radii

- `--radius-sm`: 6px
- `--radius-md`: 10px
- `--radius-lg`: 16px
- `--radius-pill`: 999px

## Components

### Button

padding 12px 24px, radius md, bg=accent (#0F766E), Text weiß (#FFFFFF), font-weight 600, min-height 44px (Touch-Ziel), Zustände: default accent, hover accent_hover (#0C5F59), active accent_active (#0A4F4A) mit 1px Innenversatz, focus sichtbarer Ring (focus_ring), disabled opacity 0.5 + cursor not-allowed.

### Card

bg=surface (#FFFFFF), border 1px border (#E2E6E4), radius lg (16px), padding 24px, optionaler Schatten 0 1px 2px rgba(26,29,28,0.06), Abstand zwischen Karten 24px.

### Input

height 44px (Touch-Ziel), padding 10px 12px, radius md (10px), border 1px border (#E2E6E4), bg=surface, Text 16px/fg, Label 14px/muted darüber mit 8px Abstand, Zustände: focus border accent + Ring 3px focus_ring, invalid border error (#B3261E), disabled bg #F0F2F1 + opacity 0.6.

### ErrorText

Farbe error (#B3261E), font-size 14px, margin-top 4px, role=alert, erscheint nur bei Validierungsfehler.

### ResultRow

Label 14px/muted, Wert 20px/fg mit font-variant-numeric: tabular-nums, Zeilenhöhe 1.4, Abstand zwischen Zeilen 16px, Trennung durch 1px border unter der Zeile außer der letzten.

### PageShell

bg=bg (#F7F8F7), Inhalt vertikal zentriert, max-width 480px, padding 24px 16px, Überschrift 28px/heading_weight 600.

## Layout Principles

- Container max-width 480px, horizontal zentriert, auf kleinen Screens volle Breite mit 16px Seiten-Padding.
- Single-Column-Layout: Überschrift, Eingabe-Card, Fehlerbereich, Ergebnis-Card.
- Vertikaler Rhythmus: 24px zwischen Sektionen, 16px zwischen Feldern, 8px zwischen Label und Input.
- Breakpoints: unter 480px fluid und einspaltig, ab 480px zentriert mit fester Maximalbreite.
- Zahlen rechtsbündig oder mit tabular-nums ausrichten, damit Live-Updates ohne Layout-Springen lesbar bleiben.
