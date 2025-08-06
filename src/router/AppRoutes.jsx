import React from "react";
import {Routes, Route} from 'react-router-dom'
import Home from "../pages/Home";
import PostList from '../pages/PostList'
import PostDetails from '../pages/PostDetails'
import PostEdit from '../pages/PostEdit'


export default function Approutes() {
    return(
        <Routes>
            <Route path="/" element={ <Home/>} />
            <Route path="/posts" element={ <PostList/>} />
            <Route path="/posts/:id" element={ <PostDetails/>} />
            <Route path="/posts/:id/edit" element={<PostEdit/>} />
        </Routes>
    )



}