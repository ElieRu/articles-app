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
import { NotFound } from './pages/404';
import { Library } from "./pages/library.js";

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
        <Route path='/profile' element={<Profile />} />
        <Route path='/library' element={<Library />} />
        <Route path='*' element={<NotFound></NotFound>} />
      </Routes>

      {!auth_page ? <Footer/> : ''}
    </div>
  );
}

export default App;
