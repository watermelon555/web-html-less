import React from "react"
import { Route, Routes } from "react-router-dom"
import Home from "../pages/home"
import { BasePath } from "../types/config"
import { Float } from "../pages/float"
import { Grid } from "../pages/grid"
import Flex from "../pages/flex"

export const Router = () => {
    return (
        <Routes>
            <Route path={BasePath} element={<Home />} />
            <Route path={`${BasePath}/flex`} element={<Flex />} />
            <Route path={`${BasePath}/float`} element={<Float />} />
            <Route path={`${BasePath}/grid`} element={<Grid />} />
        </Routes>
    )
}
