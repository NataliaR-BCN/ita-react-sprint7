import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from '../pages/Home';
import Intro from '../pages/Intro';
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