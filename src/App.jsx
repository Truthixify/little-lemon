import { useState } from 'react'

//rrd imports
import { createBrowserRouter, RouterProvider } from 'react-router-dom'

import './index.css'

//components

//layouts
import Main from './layout/Main'
import Homepage from './componenets/Homepage'

function App() {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <Main />,
      children: [
        {
          path: '/',
          element: <Homepage />
        }
      ]
    }
  ])

  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  )
}

export default App
