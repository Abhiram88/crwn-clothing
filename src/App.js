import {Routes, Route, Outlet} from 'react-router-dom';
import Home from "../src/routes/home/home.component";
import Practice from './_Learning/practice';
import Navigation from '../src/routes/navigation/navigation.component';
import Shop from './routes/shop/shop.component';
import Authentication from './routes/authentication/authentication.component';


const App = () => {
  return(
    <Routes>
      <Route path='/' element= {<Navigation />}>
        <Route index element={ <Home /> }/>
        <Route path='shop' element= {<Shop />}/>  
        <Route path='auth' element= {<Authentication />}/> 
      </Route>     
    </Routes>
  )

  }

export default App;
