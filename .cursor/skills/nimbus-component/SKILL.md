---
name: nimbus-component
description: Create Nimbus Design System compliant React components for the google-cloud-docs-capstone project. Use when creating, refactoring, or reviewing UI components; when asked to build buttons, cards, inputs, alerts, layout shells, or any UI element; when the user mentions Nimbus DS, design system, or Google Cloud UI patterns.
---

# Nimbus Component Creation

Creates WCAG 2.2 AA compliant React components following Nimbus Design System v1.0.

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
- [ ] Export as named export (not default)
- [ ] Place in src/app/components/ui/ (atoms) or layout/ (layout shells)
```

## Token Reference (quick)

```tsx
// Colors → bg-nimbus-primary, text-nimbus-text-primary, border-nimbus-border, ...
// Spacing → p-nimbus-4 (16px), gap-nimbus-2 (8px), px-nimbus-8 (32px), ...
// Radius → rounded-nimbus-sm (4px), rounded-nimbus-md (6px), rounded-nimbus-lg (8px)
// Shadow → shadow-nimbus-sm, shadow-nimbus-md, shadow-nimbus-lg
// Motion → duration-[120ms] (fast), duration-[180ms] (medium), duration-[240ms] (slow)
```

## Component Templates

### Button

```tsx
type ButtonVariant = 'primary' | 'secondary' | 'ghost' | 'destructive';

const variantStyles: Record<ButtonVariant, string> = {
  primary:     'bg-nimbus-primary text-white hover:bg-nimbus-primary-hover active:bg-nimbus-primary-active',
  secondary:   'border border-nimbus-border text-nimbus-text-primary hover:bg-nimbus-surface-subtle',
  ghost:       'text-nimbus-primary hover:bg-nimbus-surface-subtle',
  destructive: 'bg-nimbus-error text-white hover:opacity-90',
};

export function Button({ variant = 'primary', disabled, children, ...props }: ButtonProps) {
  return (
    <button
      className={[
        'min-w-[96px] h-[36px] px-nimbus-4 rounded-nimbus-md font-medium text-[14px]',
        'inline-flex items-center justify-center gap-nimbus-2',
        'transition-[background-color,box-shadow] duration-[120ms] ease-out',
        'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-nimbus-primary focus-visible:ring-offset-2',
        'disabled:opacity-40 disabled:pointer-events-none',
        variantStyles[variant],
      ].join(' ')}
      disabled={disabled}
      {...props}
    >
      {children}
    </button>
  );
}
```

### Card

```tsx
type CardVariant = 'default' | 'elevated';

export function Card({ variant = 'default', children, className }: CardProps) {
  const base = 'rounded-nimbus-lg bg-nimbus-surface';
  const styles = {
    default:  'border border-nimbus-border shadow-nimbus-sm p-nimbus-4',
    elevated: 'shadow-nimbus-md p-nimbus-6',
  };
  return <div className={`${base} ${styles[variant]} ${className ?? ''}`}>{children}</div>;
}
```

### Alert

```tsx
const alertConfig = {
  success: { bg: 'bg-[#E6F4EA]', border: 'border-nimbus-success', text: 'text-nimbus-success', icon: 'check_circle' },
  warning: { bg: 'bg-[#FEF7E0]', border: 'border-nimbus-warning', text: 'text-[#B06000]',      icon: 'warning' },
  error:   { bg: 'bg-[#FCE8E6]', border: 'border-nimbus-error',   text: 'text-nimbus-error',   icon: 'error' },
  info:    { bg: 'bg-[#E3F2FD]', border: 'border-nimbus-info',    text: 'text-nimbus-info',    icon: 'info' },
};

export function Alert({ variant, title, description }: AlertProps) {
  const { bg, border, text, icon } = alertConfig[variant];
  return (
    <div className={`flex gap-nimbus-2 rounded-nimbus-md border p-nimbus-3 ${bg} ${border}`} role="alert">
      <span className={`material-symbols-outlined text-[20px] ${text}`}>{icon}</span>
      <div>
        <p className={`font-medium text-[14px] ${text}`}>{title}</p>
        {description && <p className="text-nimbus-text-secondary text-[14px] mt-nimbus-1">{description}</p>}
      </div>
    </div>
  );
}
```

### Docs Layout Shell

```tsx
export function DocsLayout({ sidebar, toc, children }: DocsLayoutProps) {
  return (
    <div className="flex min-h-screen bg-nimbus-surface">
      <aside className="w-[240px] shrink-0 sticky top-0 h-screen overflow-y-auto border-r border-nimbus-border bg-nimbus-surface-subtle">
        {sidebar}
      </aside>
      <main className="flex-1 min-w-0 max-w-[760px] px-nimbus-8 py-nimbus-6">
        {children}
      </main>
      {toc && (
        <nav className="w-[200px] shrink-0 sticky top-0 h-screen overflow-y-auto px-nimbus-4 py-nimbus-6">
          {toc}
        </nav>
      )}
    </div>
  );
}
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

## File Placement

```
src/app/components/
  ui/           ← atomic components (Button, Card, Input, Alert, Chip)
  layout/       ← layout shells (DocsLayout, AppShell, Sidebar, Topbar)
```

## Additional Reference

For complete component specs, interaction rules, and layout patterns see [DESIGN_SYSTEM_SPEC.md](DESIGN_SYSTEM_SPEC.md).
