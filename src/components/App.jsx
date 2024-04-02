import { Route, Routes } from 'react-router-dom';

import { Layout } from './Layout';
import { GeneralPage } from '../../pages/GeneralPage';
import { WoodPage } from '../../pages/WoodPage';
import { ConcretePage } from '../../pages/ConcretePage';

import './App.css'

function App() {

  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<GeneralPage />} />
          <Route path='/wood' element={<WoodPage />} />
          <Route path='/concrete' element={<ConcretePage />} />
          {/* <Route path='*' element={<NotFound/>} /> */}
        </Route>
      </Routes>
    </>
  )
}

export default App
