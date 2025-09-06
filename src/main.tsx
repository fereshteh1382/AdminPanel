import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import MainLayout from './layouts/mainlayout'
import '@fortawesome/fontawesome-free/css/all.min.css';
import PageCreate from './pages/pageCreate';

import NotFound from './pages/notFound'
import MultiFormHome from './pages/MultiFormHome';
import MultiFormContextCall from './features/users/components/multiFormContextCall';
import ProvinceList from './pages/provinceList'
//import Modal from './components/modal';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      <MultiFormContextCall>
        <Routes>
          <Route path="/" element={<MainLayout />}>
            <Route path="pages/create" element={<PageCreate />} />
            <Route path="pages/multiform" element={<MultiFormHome />} />
            <Route path="pages/province" element={<ProvinceList />} />
            {/* <Route path="pages/modal" element={<Modal />} />  */}
          </Route>
          <Route path="*" element={<NotFound />} />
        </Routes>
      </MultiFormContextCall>
    </BrowserRouter>
  </StrictMode>,
)
