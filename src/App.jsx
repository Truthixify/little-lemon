import { useReducer, useState } from 'react'

//rrd imports
import { createBrowserRouter, RouterProvider } from 'react-router-dom'

import '../src/assets/css/index.css'

//components

//layouts
import Main from './layout/Main'
import Homepage from './componenets/Homepage'
import BookingForm from './componenets/BookingForm'

const initializeTimes = () => {
  
}

const updateTimes = (state, action) => {
  switch(action.type) {
    case "return": {
      console.log(state, action)
      return { ...state }
    }
  }
}

function App() {
  const [availableTimes, dispatch] = useReducer(updateTimes, initializeTimes)

  

  const router = createBrowserRouter([
    {
      path: '/',
      element: <Main />,
      children: [
        {
          path: '/',
          element: <Homepage />
        },
        {
          path: '/reservations',
          element: <BookingForm availableTimes={availableTimes} dispatch={dispatch}/>
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
