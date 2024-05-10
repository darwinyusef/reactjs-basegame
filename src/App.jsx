import { BrowserRouter, Link } from 'react-router-dom';

import './App.css'
import AppRoutes from './routes/AppRoutes';
import Links from './routes/Links'


function App() {
  return (
    <BrowserRouter>
      <>
        <Links />
        <AppRoutes />
      </>
    </BrowserRouter>
  )


}

export default App
