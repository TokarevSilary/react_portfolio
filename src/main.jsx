import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { Portfolio } from './Portfolio.jsx'
import data from './OurInformation.jsx'
import './index.css'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Portfolio data={data} />
  </StrictMode>,
)
