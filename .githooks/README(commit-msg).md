# `commit-msg` Hook

This repository keeps its shared Git hooks in `.githooks/`.

## Purpose

The `commit-msg` hook validates the first line of each commit message against a Conventional Commits pattern, with optional Jira ticket support.

## Setup

Run this once in your local clone:

```powershell
git config core.hooksPath .githooks
```

## Commit Message Format

Commit messages must match:

```text
type(scope): summary
type(scope): EWR-1002 summary
```

Allowed types:

- `feat`
- `fix`
- `docs`
- `style`
- `refactor`
- `perf`
- `test`
- `chore`
- `ci`
- `build`

Examples:

```text
feat(auth): add login functionality
feat(auth): EWR-1002 add login functionality
fix(api): handle empty payload
docs(readme): clarify setup steps
```

## Reference

https://www.conventionalcommits.org/en/v1.0.0/#specification
