import React, { useContext } from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import { StateContext, StateProvider } from './utils/stateprovider'
import reducer, { initialState } from './utils/reducer'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <StateProvider initialState={initialState} reducer={reducer}>
   <App/>
    </StateProvider>
  </React.StrictMode>
);

export const useStateProvider = () => useContext(StateContext);