import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route} from 'react-router-dom'
import MainLayout from './layouts/mainlayout'
import '@fortawesome/fontawesome-free/css/all.min.css';
import PageCreate from './pages/pageCreate';
import PageEdit from './pages/pageEdit';
import NotFound from './pages/notFound'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
 <BrowserRouter>
 <Routes>
    <Route path="/" element={<MainLayout />}>
      <Route path="pages/create"  element={<PageCreate />} />
      <Route path="pages/Edit"  element={<PageEdit />} />
     
    </Route>
    <Route path="*" element={<NotFound />} />
  </Routes>
  </BrowserRouter>
    </StrictMode>,
)
