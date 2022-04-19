import React from 'react';
import { Route, Routes } from 'react-router-dom';
import App from '../App';
import { Marvel } from '../Marvel';
import { Dc } from '../Dc';
import { NavBar } from '../nav/NavBar';

export const AppRouter = () => {

  return (
<div id="cont"className="container-sm shadow bg-light text-white p-3">
    <NavBar/>
<Routes>
    <Route path="/" element={App}/>
    <Route path="marvel" element={Marvel}></Route>
    <Route path="dc" element={Dc}></Route>
</Routes>
</div>
  )
}