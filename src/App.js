import { useContext } from 'react';
import { Toaster } from 'react-hot-toast';
import { RouterProvider } from 'react-router-dom';
import './App.css';
import { DarkModeContext } from './contexts/DarkModeProvider/DarkModeProvider';
import { router } from './Routes/Routes/routes';

function App() {
  const { dark } = useContext(DarkModeContext);

  return (
    <div className={`${dark ? 'bg-slate-800 text-gray-500 md:pb-28 pb-80' : ''}`}>
      <RouterProvider router={router}></RouterProvider>
      <Toaster />
    </div>
  );
}

export default App;
