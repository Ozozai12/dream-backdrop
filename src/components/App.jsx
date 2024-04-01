import { Route, Routes } from 'react-router-dom';

import { Layout } from './Layout';
import {General} from './General/General'

import './App.css'

function App() {

  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<General />} />
          {/* <Route path='/wood' element={<Wood />} /> */}
          {/* <Route path='/concrete' element={<Concrete />} /> */}
          {/* <Route path='*' element={<NotFound/>} /> */}
          </Route>
      </Routes>
    </>
  )
}

export default App
