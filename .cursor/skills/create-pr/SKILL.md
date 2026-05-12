---
name: create-pr
description: Create a new git branch and open a pull request for the current changes. Use when the user types /create-pr, asks to open a PR, wants to create a branch and pull request, or says "PR 만들어줘", "브랜치 만들어서 PR", or any variation of creating a pull request instead of pushing to main.
---

# Create Pull Request

Branches off main, commits current changes, and opens a GitHub PR — never pushes directly to main.

## Workflow

Run these steps sequentially. Stop and report errors if any step fails.

### Step 1 — Read current state

```bash
git status
git diff --stat
git log main..HEAD --oneline   # see if commits already exist on this branch
```

### Step 2 — Determine branch name

Derive a short, descriptive branch name from the changes:
- Format: `{type}/{short-description}` — e.g. `feat/nimbus-token-wiring`, `fix/header-layout`, `chore/cursor-rules`
- Types: `feat` · `fix` · `chore` · `docs` · `refactor` · `style`
- Max 50 chars, lowercase, hyphens only, no spaces

Ask the user to confirm or suggest a name if the changes are ambiguous.

### Step 3 — Create and switch to branch

```bash
git checkout -b {branch-name}
```

If already on a non-main branch with uncommitted changes, skip this step and use the current branch.

### Step 4 — Stage and commit

Stage all relevant changes:

```bash
git add -A
```

Write a commit message following this format:
```
{type}({scope}): {what changed and why in one line}

{optional body: bullet points for each significant change}
```

Example:
```
chore(cursor): add Nimbus DS rules and skill

- Add nimbus-tokens.mdc (alwaysApply) for token enforcement
- Add nimbus-components.mdc for component patterns
- Add nimbus-component skill with Button/Card/Alert templates
- Wire --nimbus-* tokens into Tailwind v4 @theme inline
```

Commit:
```bash
git commit -m "$(cat <<'EOF'
{message}
EOF
)"
```

### Step 5 — Push branch

```bash
git push -u origin HEAD
```

### Step 6 — Create pull request

```bash
gh pr create \
  --title "{concise title}" \
  --body "$(cat <<'EOF'
## Summary
- {bullet 1}
- {bullet 2}
- {bullet 3}

## Changes
{list key files changed and what they do}

## Test plan
- [ ] {what to verify}
- [ ] {what to verify}
EOF
)"
```

Return the PR URL to the user.

## Branch Naming Examples

| Change type | Branch name |
|---|---|
| New feature or component | `feat/skill-library-page` |
| Bug fix | `fix/sidebar-scroll-overflow` |
| Cursor rules / config | `chore/nimbus-cursor-setup` |
| CSS / styling only | `style/nimbus-token-tailwind-wiring` |
| Documentation | `docs/readme-update` |
| Refactor | `refactor/app-shell-layout` |

## Safety Rules

- **Never** force-push to main or use `--force` on main
- **Never** use `git commit --amend` if the commit has been pushed
- **Never** skip the `git status` check — confirm what's being committed
- If `gh` CLI is not authenticated, run `gh auth login` first and pause for the user

## Quick Reference

```bash
# Check gh auth status
gh auth status

# List open PRs
gh pr list

# View a PR
gh pr view {number}

# Check out an existing PR branch locally
gh pr checkout {number}
```
