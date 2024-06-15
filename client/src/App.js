import "./assets/bootstrap/css/bootstrap.min.css";
import "./assets/bootstrap/js/bootstrap.min.js";
import "./assets/js/bold-and-bright.js"

import { Routes, Route, useLocation } from 'react-router-dom'
import { Home } from './pages/home'
import Header from './components/layouts/header';
import Footer from './components/layouts/footer';
import { ArticleDetails } from './pages/article-details.js';
import { Profile } from './pages/profile';
import { Articles } from './pages/articles';
import { ForgotPassword } from './pages/forgot-password';
import { Login } from './pages/login';
import { Register } from './pages/register';
import { ResetPassword } from './pages/reset-password';
import { NotFound } from './pages/404';

import UserProfile from './components/profile/user-profile';

function App() {

  const location = useLocation();
  const currentPath = location.pathname
  const routeName = currentPath.split('/')[1];
  
  let auth_page = 
    routeName == 'forgot-password' ? true : 
    routeName == 'login' ? true : 
    routeName == 'reset-password' ? true : 
    routeName == 'register' ? true : false;

  return (
    <div className="App">
      {!auth_page ? <Header/> : ''}

      <Routes>
        <Route index element={<Home></Home>} />
        <Route path='articles' element={<Articles></Articles>} >
          <Route path=':id' element={<ArticleDetails></ArticleDetails>} />
        </Route>
        <Route path='/profile' element={<Profile></Profile>} ></Route>
        <Route path='/login' element={<Login></Login>} />
        <Route path='/register' element={<Register></Register>} />
        <Route path='/forgot-password' element={<ForgotPassword></ForgotPassword>} />
        <Route path='/reset-password' element={<ResetPassword></ResetPassword>} />
        <Route path='*' element={<NotFound></NotFound>} />
      </Routes>

      {!auth_page ? <Footer/> : ''}
    </div>
  );
}

export default App;
