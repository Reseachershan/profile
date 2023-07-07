import React, { FC, Suspense } from 'react';
import { Routes, Route } from "react-router-dom";
import IndustriesDetail from '../pages/IndustriesDetail';

import Main from "../pages/Main";
import Meeting from "../pages/Meeting";
import Testing from '../pages/Testing';

type Props = {
  handleBackClick(className: string): void
}

const Routing: FC<Props> = ({handleBackClick}) => {

  return (
    <Routes>
      <Route index path='/' element={<Main handleBackClick={handleBackClick}/>}></Route>
      <Route index path='/testing' element={<Testing />}></Route>
      <Route path='/meeting' element={<Meeting />}></Route>
      <Route path='/industries/:name' element={<IndustriesDetail />}></Route>
    </Routes>
  )
}

export default Routing