# Coding Guidelines

Rules for every change to this project. If a rule and the code disagree, fix the code.

## 1. Language

- JavaScript only: `.jsx` for files that contain JSX, `.js` for everything else.
- No TypeScript: no `.ts` / `.tsx` files, no `tsconfig.json`, no `@types/*` packages.
- ES modules, `const` by default, `let` only when reassigned, never `var`.
- No semicolons, single quotes, 2-space indentation, trailing commas in multi-line literals.

## 2. Folder structure

```
src/
  assets/       images only (no code)
  components/   one folder per component: Name/Name.jsx + Name.css
  data/         site content as plain JS (projects, services, skills, profile)
  hooks/        reusable hooks, one per file, named useSomething.js
  utils/        shared helpers and constants (e.g. motion.js)
  App.jsx       page composition only
  index.css     design tokens and shared classes
```

- Content lives in `src/data`, not inside components. Adding a project means editing
  `src/data/projects.js` and nothing else.
- Import paths must match the file name's case exactly. Windows ignores case; the
  Netlify (Linux) build does not.

## 3. Naming

| Thing                  | Style              | Example                    |
| ---------------------- | ------------------ | -------------------------- |
| Component, its folder  | PascalCase         | `Projects/Projects.jsx`    |
| Hook                   | camelCase, `use`   | `useActiveSection`         |
| Variable, function     | camelCase          | `activeId`, `handleSubmit` |
| Module-level constant  | UPPER_SNAKE_CASE   | `NAV_LINKS`                |
| Boolean                | `is` / `has`       | `isMenuOpen`               |
| Event handler          | `handle` + event   | `handleSubmit`             |
| CSS class              | BEM, kebab-case    | `project-card__title`      |
| Section id             | lowercase          | `id="projects"`            |

## 4. Components

- Function declarations with a default export, one component per file.
- Do not `import React`; import only the hooks you use.
- Keep components presentational: data comes from `src/data` or props.
- List keys are stable ids from the data, never the array index.
- No unused imports, variables, commented-out code or `console.log`.
- Side effects go in `useEffect` and always clean up after themselves.

## 5. Styling

- One CSS file per component, imported by that component only.
- Class names are prefixed with the component's block name (`hero__title`), so no
  file styles bare tags or another component's classes.
- Colours, radii and shadows come from the CSS variables in `index.css`. No hex
  values in component CSS; both themes must keep working.
- Shared patterns (`.section`, `.btn`, `.card`, `.gradient-text`) are defined once in
  `index.css` and reused.
- No inline `style` props, except for values computed at runtime.
- Every layout must work from 320px wide. Breakpoints: `900px` and `600px`.

## 6. Animations

- Use `framer-motion`. Reuse the variants in `src/utils/motion.js`; add a new variant
  there only when two or more components need it.
- Animate `opacity`, `transform` and `filter` only, never layout properties (`width`, `top`, `margin`).
- Scroll reveals run once: `viewport={VIEWPORT}`.
- Entrances take 0.4-0.7s; hover and tap feedback 0.2-0.3s.
- Respect reduced motion: the app is wrapped in `<MotionConfig reducedMotion="user">`
  and CSS animations are disabled under `prefers-reduced-motion: reduce`.

## 7. Accessibility

- Every image has meaningful `alt` text; decorative elements get `aria-hidden="true"`.
- Icon-only buttons and links have an `aria-label`.
- External links use `target="_blank"` with `rel="noopener noreferrer"`.
- Form fields have a `<label>`; status messages use `role="status"`.
- Use semantic elements (`header`, `nav`, `main`, `section`, `footer`) and one `h1` per page.

## 8. Dependencies

- Add a package only when it is used; remove it when its last import goes away.
- Never commit `node_modules` or `dist`.

## 9. Before every commit

- [ ] `npm run lint` passes with no errors or warnings
- [ ] `npm run build` succeeds
- [ ] Checked in light and dark theme
- [ ] Checked at mobile width (around 375px) and desktop
- [ ] New content added through `src/data`, not hard-coded in a component
- [ ] No `.ts` / `.tsx` files or `@types/*` packages added
