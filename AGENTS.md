# AGENTS.md

## Stack

Docusaurus 3.1.0 static site, React 18, TypeScript, Yarn v1 classic. Node >= 18.

## Commands

```bash
yarn install --frozen-lockfile   # install deps (CI uses this exact command)
yarn build                       # production build — this is the only CI check
yarn typecheck                   # tsc — exists but NOT run in CI
yarn start                       # local dev server
yarn clear                       # clear Docusaurus cache (useful when build behaves strangely)
```

No test suite, linter, or formatter is configured.

## Doc routing (non-obvious)

Docs source lives in `docs/tech/` but is served at the `/tech-notes/` route (`routeBasePath: "tech-notes"` in `docusaurus.config.js`). The sidebar is **manually** defined in `sidebar-tech.js` — new docs must be added there or they won't appear in navigation.

## Build will fail on broken links

`onBrokenLinks: "throw"` in `docusaurus.config.js`. Any internal link pointing to a non-existent doc or page will break the build. Always verify links after adding, moving, or renaming docs.

## Adding a new doc

1. Create a `.md` file under the appropriate `docs/tech/<category>/` directory.
2. Add its doc ID to `sidebar-tech.js` in the correct category.
3. If creating a new category, add a corresponding `index.md` and a new sidebar category entry.
4. Run `yarn build` to verify no broken links.

## Key files

| File | Purpose |
|---|---|
| `docusaurus.config.js` | Site config, plugins, theme, navbar, footer |
| `sidebar-tech.js` | Manual sidebar tree for all tech-notes docs |
| `src/pages/index.tsx` | Homepage (React component) |
| `src/css/custom.css` | Global CSS overrides (Infima theme variables) |
| `static/img/` | Images, organized by topic subdirectory |

## CI/CD

- **PRs to `main`**: `test-deploy.yaml` runs `yarn build` only.
- **Push to `main`**: `deploy.yaml` builds and deploys to `gh-pages` branch via `peaceiris/actions-gh-pages`.

## Gotchas

- Yarn v1 (classic), not Yarn Berry. Do not use `yarn set version` or PnP features.
- The `@docusaurus/plugin-client-redirects` plugin redirects old `/learning-notes` paths to `/tech-notes`. Preserve this if renaming routes.
- `remark-sub-super` is available in markdown for sub/superscript syntax.
- Prism syntax highlighting has `bash`, `hcl`, and `yaml` as additional languages beyond defaults.
