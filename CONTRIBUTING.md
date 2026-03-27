# Contributing to Phantom

Thanks for your interest in contributing. Here's what you need to know.

## Code of Conduct

Be direct, professional, and constructive. We don't have time for drama.

## Getting Started

1. Fork the repo
2. Clone your fork: `git clone https://github.com/YOUR_USERNAME/phantom.git`
3. Create a branch: `git checkout -b feature/your-feature-name`
4. Make your changes
5. Run tests: `npm test`
6. Run lint: `npm run lint`
7. Commit: `git commit -m "feat: your clear description"`
8. Push and open a PR

## Commit Convention

We use [Conventional Commits](https://www.conventionalcommits.org/):

- `feat:` — new feature
- `fix:` — bug fix
- `docs:` — documentation only
- `refactor:` — code change that isn't a fix or feature
- `test:` — adding or fixing tests
- `chore:` — build process, dependencies, tooling

## Pull Request Requirements

- Tests pass (`npm test`)
- Lint passes (`npm run lint`)
- TypeScript compiles with no errors (`npm run build`)
- Clear description of what changed and why
- Link to issue if applicable

## What We're Looking For

- New capability modules (agent skills)
- Integration connectors (calendar, communication platforms)
- Voice profile improvements
- Personality model refinements
- Documentation improvements

## Questions?

Open an issue or join our [Discord](https://discord.gg/thefiredev).
