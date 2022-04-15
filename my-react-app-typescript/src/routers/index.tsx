import React from "react"
import { Route, Routes } from "react-router-dom"
import { Home } from "../pages/home"
// import { About } from '../pages/about';
// import { Grid } from '../pages/grid';

export const Router: React.FC = () => {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            {/*    <Route path='/about' element={<About />} />
      <Route path='/grid' element={<Grid />} /> */}
        </Routes>
    )
}
