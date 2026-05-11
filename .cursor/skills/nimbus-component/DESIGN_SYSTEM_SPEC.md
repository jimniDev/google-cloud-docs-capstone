# Nimbus Design System (v1.0)
Google Cloud–inspired, AI-native, enterprise-grade design system
Created for Earl's Capstone Project (2026)

---

# 0. Introduction

Nimbus DS is a modern, AI-native design system inspired by Google Cloud's clarity, density, and enterprise UX patterns.
It is designed to support:

- Multi-page web applications
- Dense information layouts
- AI-assisted workflows
- Technical dashboards
- Documentation experiences
- Multi-pane interfaces
- Data-heavy screens

Nimbus DS is optimized for use with:

- Claude (Design + Code)
- Cursor
- Figma + Figma Makes
- React / Next.js
- Tailwind CSS
- Framer Motion

This file is the **single source of truth** for all visual, interaction, and component rules.

---

# 1. Design Tokens

Design tokens are the atomic values that define Nimbus DS.
They must be used everywhere — no hardcoded values.

---

## 1.1 Colors

### Core Palette
| Token | Value | Usage |
|-------|--------|--------|
| `primary` | `#1A73E8` | Primary actions, links |
| `primary-hover` | `#1666CC` | Hover states |
| `primary-active` | `#0F4FA8` | Active states |
| `secondary` | `#5F6368` | Secondary actions |
| `secondary-hover` | `#4A4D52` | Hover |
| `secondary-active` | `#3C3F43` | Active |

### Semantic Colors
| Token | Value | Usage |
|-------|--------|--------|
| `success` | `#1E8E3E` | Success states |
| `warning` | `#F9AB00` | Warnings |
| `error` | `#D93025` | Errors |
| `info` | `#0288D1` | Informational UI |

### Surface Colors
| Token | Value |
|--------|--------|
| `surface` | `#FFFFFF` |
| `surface-subtle` | `#F8F9FA` |
| `surface-elevated` | `#FFFFFF` |
| `border` | `#E0E3E7` |

### Text Colors
| Token | Value |
|--------|--------|
| `text-primary` | `#202124` |
| `text-secondary` | `#5F6368` |
| `text-disabled` | `#9AA0A6` |

---

## 1.2 Typography

Nimbus DS uses **Inter** (fallback: Google Sans Text, Noto Sans, Roboto) for clarity and modernity.

### Type Ramp
| Style | Size | Line Height | Weight |
|--------|--------|--------------|---------|
| Display L | 48px | 56px | 700 |
| Display M | 36px | 44px | 600 |
| Headline L | 28px | 36px | 600 |
| Headline M | 24px | 32px | 600 |
| Title L | 20px | 28px | 600 |
| Title M | 18px | 26px | 600 |
| Body L | 16px | 24px | 400 |
| Body M | 14px | 20px | 400 |
| Label | 12px | 16px | 500 |

---

## 1.3 Spacing Scale

Nimbus uses a hybrid 4/8 scale: `4, 8, 12, 16, 20, 24, 32, 40, 48, 64`

CSS variables: `--nimbus-space-1` through `--nimbus-space-16`
Tailwind: `p-nimbus-1` through `p-nimbus-16` (and gap-, m-, etc.)

---

## 1.4 Radii

```
--nimbus-radius-sm: 4px
--nimbus-radius-md: 6px
--nimbus-radius-lg: 8px
--nimbus-radius-xl: 12px
```

---

## 1.5 Shadows

```
--nimbus-shadow-sm: 0 1px 2px rgba(0,0,0,0.06)
--nimbus-shadow-md: 0 2px 4px rgba(0,0,0,0.08)
--nimbus-shadow-lg: 0 4px 12px rgba(0,0,0,0.10)
```

---

## 1.6 Motion Tokens

```
--nimbus-motion-fast:   120ms ease-out
--nimbus-motion-medium: 180ms ease
--nimbus-motion-slow:   240ms ease-in-out
```

---

## 1.7 Iconography

**Material Symbols (Outlined style by default)**
Source: https://fonts.google.com/icons

### Sizing
- Small: 16px
- Medium: 20px (default)
- Large: 24px
- Extra Large: 32px (hero icons)

### Color
- Default: `text-nimbus-text-secondary`
- Active: `text-nimbus-primary`
- Disabled: `text-nimbus-text-disabled`

### Placement
- Icon + Label spacing: 8px (`gap-nimbus-2`)
- Icon-only buttons: 36×36 container, center aligned

### Rules
- Do: keep icons monochrome
- Do: use consistent stroke weight
- Don't: mix icon styles (Outlined + Rounded)
- Don't: use filled icons unless explicitly needed

---

# 2. Components

## 2.1 Buttons

### Variants
- Primary: `bg-nimbus-primary text-white`
- Secondary: `border border-nimbus-border text-nimbus-text-primary`
- Ghost: `text-nimbus-primary hover:bg-nimbus-surface-subtle`
- Destructive: `bg-nimbus-error text-white`
- Icon: `w-[36px] h-[36px]` square

### States
- Default → Hover → Active → Focus → Disabled → Loading
- Minimum width: 96px, height: 36px
- Focus ring: `ring-2 ring-nimbus-primary ring-offset-2`

## 2.2 Inputs

### Types: TextField, TextArea, Select, Checkbox, Radio, Switch

### Rules
- Border: `1px border-nimbus-border`
- Radius: `rounded-nimbus-md` (6px)
- Focus ring: `ring-2 ring-nimbus-primary`
- Label: above input, `mb-nimbus-1`

## 2.3 Cards

### Variants
- Default: `border border-nimbus-border shadow-nimbus-sm p-nimbus-4`
- Elevated: `shadow-nimbus-md p-nimbus-6`
- Section: full-width with header separator

### Rules
- Padding: 16–24px
- Title spacing: `mb-nimbus-3`

## 2.4 Navigation

### Components
- Top App Bar: `h-[56px]`, sticky
- Sidebar: `w-[240px]`, sticky, left
- Breadcrumbs: `gap-nimbus-2`, secondary text
- Page Header

## 2.5 Tables

### Features: Dense mode, sortable columns, sticky header, optional row selection

### Rules
- Row height: 40px
- Header height: 48px
- Border: `1px border-nimbus-border`

## 2.6 Alerts

### Variants: success, warning, error, info
### Anatomy: Icon + Title + Description + Optional actions

## 2.7 Chips

### Variants: Filled, Outlined, Filter, Input
### Press state: `scale-[0.98]` transition

## 2.8 Code Blocks

### Features: Syntax highlighting, Copy button, Line numbers (optional)

---

# 3. Layout Patterns

## 3.1 Docs Layout (primary for this project)

```
Left sidebar (sticky, 240px) | Main content (max-w: 760px) | Optional right TOC (200px)
```

- Content padding: `px-nimbus-8`
- TOC links: Body M, `text-nimbus-text-secondary`

## 3.2 Console Layout

- Top bar + Left nav + Content area with cards/tables
- Dense spacing, high information density, minimal elevation

## 3.3 AI-Native Layout

- Assistant panel + Context panel + Multi-pane workspace
- Panels resizable, persistent context, smooth transitions

---

# 4. Interaction Rules

## 4.1 Hover
- Increase background by 4–6%
- Cursor: pointer
- No color shifts for destructive actions

## 4.2 Focus
- Always show 2px focus ring
- Color: `--nimbus-primary`
- Offset: 2px

## 4.3 Active
- Darken background by 8–10%
- Compress shadow

## 4.4 Disabled
- Reduce opacity to 40%
- Remove shadows
- Remove pointer events

---

# 5. Motion Rules

## 5.1 Page Transitions
- Fade + slide 8px
- Duration: `motion-medium` (180ms)

## 5.2 Component Transitions
- Cards: shadow transition
- Buttons: background + shadow
- Inputs: focus ring expansion

## 5.3 Microinteractions
- Chips: `scale-[0.98]` on press
- Toggles: 120ms slide
- Dropdowns: 8px slide + fade

---

# 6. Accessibility (WCAG 2.2 AA)

## 6.1 Contrast
- Text: 4.5:1 minimum
- Icons: 3:1 minimum
- Buttons: 3:1 minimum

## 6.2 Focus Rings
- Always visible, 2px, high contrast

## 6.3 Keyboard Navigation
- Full tab order
- Escape closes modals
- Arrow keys for menus

---

# 7. Component Library Structure

```
src/app/components/
  ui/
    Button.tsx
    Input.tsx
    Card.tsx
    Table.tsx
    Alert.tsx
    Chip.tsx
    CodeBlock.tsx
  layout/
    AppShell.tsx
    Sidebar.tsx
    Topbar.tsx
    PageHeader.tsx
    DocsLayout.tsx
```

---

# 8. Usage Guidelines

- Never hardcode colors
- Always use Nimbus components
- Keep spacing consistent with the 4/8 scale
- Use motion sparingly
- Maintain density for enterprise screens

---

# 9. Versioning

Nimbus DS v1.0
Updated: May 2026
Maintainer: Earl
