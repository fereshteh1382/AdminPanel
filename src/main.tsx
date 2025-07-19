import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route} from 'react-router-dom'
import MainLayout from './layouts/mainlayout'
import '@fortawesome/fontawesome-free/css/all.min.css';
//import pageCreate from './pages/pageCreate';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
 <BrowserRouter>
 <Routes>
    <Route path="/" element={<MainLayout />}>
      <Route path="pages/create"   />
     
    </Route>
  </Routes>
  </BrowserRouter>
    </StrictMode>,
)
