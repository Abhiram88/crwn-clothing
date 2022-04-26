import { Routes, Route, Outlet } from 'react-router-dom';
import './test.styles.scss';
import "./registration-forms/login-form.styles.scss";
import PracticeStates from '../_Learning/practice';
import Wall from './wall';
import LoginPage from './registration-forms/login-page'

const TestShop = () => {
    return <h2>This is a test page</h2>
}

const Main = () => {
    return(
        <Routes>
            <Route path='/' element={<LoginPage />} />
            <Route path='/user-page' element={<Wall />} />
            <Route path='/test' element={<TestShop />} />
            <Route path='/learning' element= {<PracticeStates />}/>  
        </Routes>
    )
}

export default Main;