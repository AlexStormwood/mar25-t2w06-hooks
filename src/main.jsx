import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { PokeApiContextProvider } from './contexts/PokeApiContextProvider.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* If the context provider has some logic within it,
    we should wrap it as a custom component and use that */}
    <PokeApiContextProvider>
      <App />
    </PokeApiContextProvider>

{/* If the context is basic and has no logic,
you could use the provider directly */}
    {/* <PokeApiContext.Provider>
     <App />
    </PokeApiContext.Provider> */}
    
  </StrictMode>,
)
