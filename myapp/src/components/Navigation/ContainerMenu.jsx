import React from "react";
import { Routes, Route } from "react-router-dom"

import "../../style/Menu/ContainerMenu.css"

import Navigation from "./Navigation";
import PageHome from "../Content/PageHome";
import PageTactic from "../Content/PageTactic";
import PageInformation from "../Content/PageInformation";
import PageAdd from "../Content/PageAdd";


export default function ContainerMenu() {

    return (
        <div className="containerMenu">
            <Routes>
                <Route path="/" element={<Navigation />}>
                    <Route index element={<PageHome />} />
                    <Route path="/PageTactic" element={<PageTactic />} />
                    <Route path="/PageInformation" element={<PageInformation />} />
                    <Route path="/PageAdd" element={<PageAdd />} />
                    <Route path="/toPageHome" element={<PageHome />} />
                </Route>
            </Routes>
        </div>
    )
}