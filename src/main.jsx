import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { RouterProvider } from 'react-router/dom'
import { router } from './routes/Routes'
import PlantProvider from './context/PlantProvider'
import { ToastContainer } from 'react-toastify'


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <PlantProvider>

      <RouterProvider router={router}></RouterProvider>
      <ToastContainer></ToastContainer>
    </PlantProvider>

  </StrictMode>,
)
