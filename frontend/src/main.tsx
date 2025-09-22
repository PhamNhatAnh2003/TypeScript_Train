import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import GlobalStyles from './components/GlobalStyles/index.tsx'
import App from './App.tsx'

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <GlobalStyles>
      <App />
    </GlobalStyles>
  </StrictMode>
);
