import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.tsx'; // App pode ser trocado por outro nome, desde que seja maiúscula (Ex: Z, Abc...)
// Se for trocado em cima, deve ser trocado na linha 8 "App" pelo nome trocado

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
