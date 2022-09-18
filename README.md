- npm create vite .
- package name lego-shopping
- react framework
- react ts
- npm i
- npm run dev

---

- npm i react-router-dom bootstrap react-bootstrap
- import bootstrap main.tsx
- import "bootstrap/dist/css/bootstrap.min.css";

---

- folder structure
- components and pages and data - json and stuff and context (react and redux)- hooks - utilities

- router in main.tsx
- import {Routes, Route} and {Container}

-- create public folder

- format the currentcy of money / price in utilitite => formatCurrency.ts

- in context folder => ShoppingCartContext.tsx
- useContext and createContext

4 functions

```
type ShoppingCartContext = {
  getItemQuantity: (id: number) => number;
  increaseCartQuantity: (id: number) => void;
  decreaseCartQuantity: (id: number) => void;
  removeFromCart: (id: number) => void;
};
```
