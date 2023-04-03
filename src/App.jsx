import { useEffect } from 'react'
import React from 'react'
import Login from './components/login'
import { useStateProvider } from './utils/stateprovider';
import { reducerCases } from './utils/constant';
import Spotify from './pages/spotify';

function App() {
  const [{token}, dispatch] = useStateProvider();
  useEffect(() => {
    const hash = window.location.hash;
    if (hash) {
      const token = hash.substring(1).split("&")[0].split('=')[1];
      dispatch({type: reducerCases.SET_TOKEN, token});
    }

  },[token, dispatch]);
  return (
    <div>
        {
          token ? 
         <Spotify/>
              :
          <Login/>
        }
    </div>
  )
}

export default App
