import { Route, Routes } from "react-router";
import App from "./App";
import Home from "./pages/home";

function MainRoutes() {
    
    return (
        <Routes>
            <Route path="" element={<Home/>}/>
        </Routes>
    )
}

export default MainRoutes;