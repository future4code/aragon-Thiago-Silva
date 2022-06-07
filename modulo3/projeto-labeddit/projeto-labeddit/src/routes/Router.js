import { BrowserRouter, Routes, Route } from 'react-router-dom';
import LoginPage from '../pages/LoginPage';
import SignUpPage from '../pages/SignUpPage';
import FeedPage from '../pages/FeedPage';
import PostDetailsPage from '../pages/PostDetailsPage';
import ErrorPage from '../pages/ErrorPage';

function Router() {
    return (
       
        <BrowserRouter>
            <Routes>
                <Route index element={<FeedPage />} />
                <Route path={"/login"} element={<LoginPage />} />
                <Route path={"/signup"} element={<SignUpPage />} />
                <Route path={"/post/:postId"} element={<PostDetailsPage />} />
                <Route path={"*"} element={<ErrorPage />} />
            </Routes>
        </BrowserRouter>
    );
};

export default Router;