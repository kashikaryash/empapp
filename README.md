# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) (or [oxc](https://oxc.rs) when used in [rolldown-vite](https://vite.dev/guide/rolldown)) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the ESLint configuration

## Troubleshooting

### 502 Bad Gateway / Network Error
If you encounter an `AxiosError: Network Error` combined with a `502 Bad Gateway` in the browser console, it indicates the backend service on Railway is currently down or failing to respond. Check the Railway dashboard for the `industrious-friendship` project logs.

### CSP Violation
If you see a Content Security Policy violation related to `content.js` or `marvelous-creation-production.up.railway.app`, it is likely caused by a browser extension (e.g., password managers, ad blockers) injecting scripts. Try running the app in an **Incognito** window to confirm.

