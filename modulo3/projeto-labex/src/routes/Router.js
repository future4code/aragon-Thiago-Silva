import { BrowserRouter, Routes, Route } from "react-router-dom";
import AdminPage from "../pages/AdminPage";
import ErrorPage from "../pages/ErrorPage";
import HomePage from "../pages/HomePage";
import TripDetailsPage from "../pages/TripDetailsPage"

function Router() {

    return (
        <BrowserRouter>
            <Routes>
                <Route path={"/"} element={<HomePage />} />
                <Route path={"/admin"} element={<AdminPage />} />
                <Route path={"*"} element={<ErrorPage />} />
                <Route path={"/:tripId/details"} element={<TripDetailsPage />} />
            </Routes>
        </BrowserRouter>
    )
}

export default Router