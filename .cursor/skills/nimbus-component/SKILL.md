---
name: nimbus-component
description: Create Nimbus Design System compliant HTML/CSS/JS UI blocks for the google-cloud-docs-capstone project. Use when creating, refactoring, or reviewing page sections, components, interaction patterns, and layouts in static HTML files.
---

# Nimbus Component Creation

Creates WCAG 2.2 AA compliant HTML UI components following Nimbus Design System v1.0.

## Quick Rules

1. **No hardcoded values** — always use `--nimbus-*` CSS vars or `nimbus-*` Tailwind utilities
2. **Tokens file**: `src/styles/theme.css` — all `--nimbus-*` vars defined here
3. **Full spec**: see [DESIGN_SYSTEM_SPEC.md](DESIGN_SYSTEM_SPEC.md)

## Component Creation Checklist

```
- [ ] Identify component type (Button / Card / Input / Alert / Layout / other)
- [ ] Use correct variant pattern from the spec
- [ ] Apply Nimbus tokens only (no hex literals, no px literals)
- [ ] Add all interaction states (hover, active, focus, disabled)
- [ ] Include focus-visible ring on interactive elements
- [ ] Add aria-label for icon-only controls
- [ ] Associate labels with inputs
- [ ] Keep behavior in small vanilla JS helpers (avoid framework assumptions)
- [ ] Keep reusable CSS classes near the page style block or shared stylesheet
```

## Token Reference (quick)

```html
<!-- Colors → var(--nimbus-primary), var(--nimbus-text-primary), var(--nimbus-border) -->
<!-- Spacing → var(--nimbus-space-4), var(--nimbus-space-2), var(--nimbus-space-8) -->
<!-- Radius → var(--nimbus-radius-sm/md/lg/xl) -->
<!-- Shadow → var(--nimbus-shadow-sm/md/lg) -->
<!-- Motion → var(--nimbus-motion-fast/medium/slow) -->
```

## Component Templates

### Button

```html
<button class="nimbus-btn nimbus-btn--primary" type="button">Label</button>
<button class="nimbus-btn nimbus-btn--secondary" type="button">Label</button>
<button class="nimbus-btn nimbus-btn--ghost" type="button">Label</button>
<button class="nimbus-btn nimbus-btn--destructive" type="button">Delete</button>
```

```css
.nimbus-btn {
  align-items: center;
  border-radius: var(--nimbus-radius-md);
  border: 1px solid transparent;
  cursor: pointer;
  display: inline-flex;
  font-size: var(--nimbus-body-m-size);
  font-weight: 500;
  gap: var(--nimbus-space-2);
  height: 36px;
  justify-content: center;
  min-width: 96px;
  padding: 0 var(--nimbus-space-4);
  transition: background var(--nimbus-motion-fast), box-shadow var(--nimbus-motion-fast);
}
.nimbus-btn:focus-visible { outline: 2px solid var(--nimbus-primary); outline-offset: 2px; }
.nimbus-btn:disabled { opacity: 0.4; pointer-events: none; }
.nimbus-btn--primary { background: var(--nimbus-primary); color: var(--nimbus-surface); }
.nimbus-btn--primary:hover { background: var(--nimbus-primary-hover); }
.nimbus-btn--secondary { background: var(--nimbus-surface); border-color: var(--nimbus-border); color: var(--nimbus-text-primary); }
.nimbus-btn--secondary:hover { background: var(--nimbus-surface-subtle); }
```

### Card

```html
<article class="nimbus-card nimbus-card--default">...</article>
<article class="nimbus-card nimbus-card--elevated">...</article>
```

### Alert

```html
<div class="nimbus-alert nimbus-alert--info" role="alert">
  <span class="material-symbols-outlined">info</span>
  <div>
    <p class="nimbus-alert__title">Title</p>
    <p class="nimbus-alert__desc">Description text</p>
  </div>
</div>
```

### Docs Layout Shell

```html
<div class="docs-layout">
  <aside class="docs-layout__sidebar"><!-- nav --></aside>
  <main class="docs-layout__main"><!-- content --></main>
  <nav class="docs-layout__toc"><!-- optional toc --></nav>
</div>
```

## Accessibility Checklist

```
- [ ] Text contrast ≥ 4.5:1 (use nimbus-text-primary on nimbus-surface ✓)
- [ ] Interactive contrast ≥ 3:1
- [ ] focus-visible ring on all interactive elements
- [ ] aria-label on icon-only buttons
- [ ] <label> or aria-label on all inputs
- [ ] role="alert" on alert components
- [ ] No motion without prefers-reduced-motion fallback for critical animations
```

## File Placement (HTML-first)

```
pages/*.html                    ← page markup
pages/assets/*.css              ← shared page styles (optional)
pages/assets/*.js               ← interaction helpers
src/styles/theme.css            ← Nimbus tokens (single source of truth)
```

## Additional Reference

For complete component specs, interaction rules, and layout patterns see [DESIGN_SYSTEM_SPEC.md](DESIGN_SYSTEM_SPEC.md).
