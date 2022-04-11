import {Routes, Route, Outlet} from 'react-router-dom';
import Home from "../src/routes/home/home.component";
import Practice from './_Learning/practice';
import Navigation from '../src/routes/navigation/navigation.component';
import SignIn from './routes/sign-in/sign-in.component';

const Shop = () => {
  return <h1>I am shop</h1> 
}

const App = () => {
  return(
    <Routes>
      <Route path='/' element= {<Navigation />}>
        <Route index element={ <Home /> }/>
        <Route path='shop' element= {<Shop />}/>  
        <Route path='sign-in' element= {<SignIn />}/> 
      </Route>     
    </Routes>
  )

  }

export default App;