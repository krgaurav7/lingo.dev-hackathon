import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'

import {
  LingoProviderWrapper,
  loadDictionary,
} from "lingo.dev/react/client";

import { BrowserRouter } from "react-router-dom";

createRoot(document.getElementById('root')!).render(
  <BrowserRouter>
    <LingoProviderWrapper loadDictionary={(locale) => loadDictionary(locale)}>
        <App />
      </LingoProviderWrapper>
  </BrowserRouter>,
)
