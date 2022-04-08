import { Routes, Route, Outlet } from 'react-router-dom';
import './test.styles.scss';
import "./login-form.styles.scss";
import Wall from './wall';
import LoginPage from './login-page';

const Main = () => {
    return(
        <Routes>
            <Route path='/' element={<LoginPage />} />
            <Route path='/user-page' element={<Wall />} />
        </Routes>
    )
}

export default Main;