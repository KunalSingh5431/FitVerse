import React from 'react'
import {Route,Routes}from "react-router-dom";
import {Box}from "@mui/material";
import "./App.css"
import ExerciseDetail from './pages/ExerciseDetail';
import Home from './pages/Home';
import Navbar from './components/Navbar';

const App=()=>{
    return(
       <Box width="400px" sx={{width:{x1:"1488px"}}} m="auto">
        <Navbar></Navbar>
        <Routes>
            <Route path="/" element={<Home/>}></Route>
            <Route path="/exercise/:id" element={<ExerciseDetail/>}></Route>
        </Routes>
       </Box>
    )
}

export default App;