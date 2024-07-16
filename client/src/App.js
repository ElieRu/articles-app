import "./assets/bootstrap/css/bootstrap.min.css";
import "./assets/bootstrap/js/bootstrap.min.js";
import "./assets/js/bold-and-bright.js";

import React from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import { Home } from "./pages/home";
import Header from "./components/layouts/header";
import Footer from "./components/layouts/footer";
import { ArticleDetails } from "./pages/article-details.js";
import { Profile } from "./pages/profile";
import { Articles } from "./pages/articles";
import { NotFound } from "./pages/404";
import { Library } from "./pages/library.js";
import { LibraryDetails } from "./pages/library-details.js";
import { useAuth0 } from "@auth0/auth0-react";
import { Resources } from "./pages/resources.js";
import { Followers } from "./pages/followers.js";
import { AboutLibrary, Managment } from "./pages/about-library.js";
// import { About } from "./pages/about.js";
// import { Libraries } from "./pages/libraries.js";
import { Resource } from "./pages/resource-description.js";
const About = React.lazy(() => import('./pages/about'))
const Libraries = React.lazy(() => import('./pages/libraries'))

function App() {
  const { isAuthenticate } = useAuth0();
  const location = useLocation();

  return (
    <div className="App">
      <Header />
      <section className="py-5">
        <div className="container">
          <Routes>
            <Route index element={<Home></Home>} />
            <Route path="articles" element={<Articles></Articles>} />
            <Route path="articles/:id" element={<ArticleDetails />} />
            <Route path="profile" element={<Profile />} />
            <Route path="my-libraries" element={<Library />} />
            
            <Route path="libraries" element={
              <React.Suspense fallback="Loading...">
                <Libraries />
              </React.Suspense>
            } />

            <Route path="libraries/:id" element={<LibraryDetails />}>
              <Route index element={<Resources />}></Route>
              <Route path="resources" element={<Resources />}></Route>
              <Route path="followers" element={<Followers />}></Route>
              <Route path="about" element={<AboutLibrary />}></Route>
              <Route path="description" element={<Resource/>} />
            </Route>

            <Route path="about" element={
              <React.Suspense fallback="loading...">
                <About />
              </React.Suspense>
            } />
            
            <Route path="*" element={<NotFound />} />
          </Routes>
        </div>
      </section>
      <Footer />
    </div>
  );
}

export default App;
