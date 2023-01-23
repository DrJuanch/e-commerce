import React from "react";
import {Routes, Route} from 'react-router-dom'
import  {Start}  from "./Start";
import  {Products}  from "./Products/index.js"; 

export const Pages = () => {
    return(
        <section>
            <Routes>
                <Route path="/" exact element={<Start/>}/>
                <Route path="/Products" exact element={<Products/>}/>
            </Routes>
        </section>
    )
}