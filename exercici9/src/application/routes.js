import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from '../pages/home';
import Intro from '../pages/intro';
import Error from '../pages/error404'

const Router = () => (
    <BrowserRouter>
        <Routes>   
            <Route index element={<Intro/>} />
            <Route path="/pressupost" element={<Home/>} />   
            <Route path="*" element={<Error/>} />
        </Routes>
    </BrowserRouter>
);

export default Router;