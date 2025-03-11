
import HomePage from '@components/HomePage/HomePage';
import { Suspense } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import routers from '@/routers/routers';
import { SideBarContext } from '@/contexts/SideBarProvider';
import Sidebar from '@components/Sidebar/Sidebar';
import { SideBarProvider } from '@/contexts/SideBarProvider';
import { ToastProvider } from '@/contexts/ToastProvider';
function App() {
  return (

   <ToastProvider>
    <SideBarProvider>
    <Sidebar />
    <BrowserRouter>
        <Suspense fallback={<div>loading</div>} >
          <Routes>
          {routers.map((item, index) =>{ 
            return (
              <Route
                path={item.path}
                element={<item.component/>}
                key={index}
              />
            );
          })}
          </Routes>
        </Suspense>
   
    </BrowserRouter>  
   </SideBarProvider>
   </ToastProvider>
    
  );
}

export default App
