# `branch-naming` Hook

This repository keeps its shared Git hooks in `.githooks/`.

## Purpose

The `branch-naming` hook script validates the current branch name before allowing a commit.

Git does not run a hook named `branch-naming` directly, so `.githooks/pre-commit` calls this script.

## Setup

Run this once in your local clone:

```powershell
git config core.hooksPath .githooks
```

## Branch Name Format

Branch names must match:

```text
main
develop
feature/EWR-123-short-description
bugfix/EWR-456-short-description
hotfix/EWR-789-short-description
release/EWR-101-short-description
```

Rules:

- `main` and `develop` are allowed as-is.
- Other branches must start with `feature/`, `bugfix/`, `hotfix/`, or `release/`.
- The ticket key must use `EWR-` followed by a positive integer.
- The description must be lowercase words separated by hyphens.
