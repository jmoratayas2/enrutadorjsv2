# Repository Guide

## Development

- This is a dependency-free static site: there is no package manifest, build step, test runner, linter, or formatter.
- Open `index.html` directly in a browser; hash routing is intentionally compatible with `file://` URLs, so a local server is not required.
- Verify changes manually at desktop and at the `640px` mobile breakpoint. Exercise `#/inicio`, `#/acerca`, `#/servicios`, and `#/contacto`; an unknown hash must redirect to `#/inicio`.

## Structure And Routing

- `index.html` owns the persistent shell and navigation, `script.js` owns every route and renders into `#app`, and `styles.css` owns all layout and responsive behavior.
- When adding or renaming a route, update all three routing identifiers together: the link `href` (`#/ruta`), its `data-route` (`/ruta`), and the matching key in `routes` in `script.js`. A mismatch falls through to the home redirect or breaks active-link state.
- Route content is an HTML template string assigned through `innerHTML`; do not interpolate untrusted or user-provided values without sanitizing them.
- Keep user-facing copy in Spanish and preserve active-route accessibility (`aria-current`) when changing navigation behavior.
