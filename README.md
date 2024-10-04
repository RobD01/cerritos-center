# React + TypeScript + Vite

Note to self for dev and build:

Base url : dev vs gh pages

     File            gh pages            dev or custom domain

- // main.tsx....... | basename="/Ngon" .. | none
- vite.config.ts. | base: "/Ngon"...... | none
- constants/index | ghPages : true .... | false

- Refernce
  - 1: https://www.pluralsight.com/resources/blog/guides/add-a-base-url-to-an-app-using-redux-router--react-router?fbclid=IwZXh0bgNhZW0CMTAAAR0LQudmIybw2jrf7h1yHLf8W6KzJSILQMJIq4QrmYYiTQulrHxoArPvlxA_aem_Af7DzlJ46D1waBlsxR1a96-g0lu16s_WUEtLsTW5B2fUA5pe0Y1kudaMjg-ed9PA_KwkFX0GBdENRYzelGEVZ3gb
  - 2: https://vite-plugin-ssr.com/base-url

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type aware lint rules:

- Configure the top-level `parserOptions` property like this:

```js
export default {
  // other rules...
  parserOptions: {
    ecmaVersion: "latest",
    sourceType: "module",
    project: ["./tsconfig.json", "./tsconfig.node.json"],
    tsconfigRootDir: __dirname,
  },
};
```

- Replace `plugin:@typescript-eslint/recommended` to `plugin:@typescript-eslint/recommended-type-checked` or `plugin:@typescript-eslint/strict-type-checked`
- Optionally add `plugin:@typescript-eslint/stylistic-type-checked`
- Install [eslint-plugin-react](https://github.com/jsx-eslint/eslint-plugin-react) and add `plugin:react/recommended` & `plugin:react/jsx-runtime` to the `extends` list
  #   N g o n 
   
   
#   e d e n - p l a z a  
 #   b o l s a - c e n t e r  
 