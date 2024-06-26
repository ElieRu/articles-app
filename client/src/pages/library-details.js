import React from 'react'
import { NavLink, Outlet } from 'react-router-dom'

export const LibraryDetails = () => {
  return (<section className="py-5">
            <div className="container">
              <nav>
                <ul>
                  <li className="nav-link"><NavLink className="nav-link" to={'ressources'}>Ressources</NavLink></li>
                  <li className="nav-link"><NavLink className="nav-link" to={'followers'}>Followers</NavLink></li>
                  <li className="nav-link"><NavLink className="nav-link" to={'managment'}>Managment</NavLink></li>
                </ul>
              </nav>
              <Outlet/>
            </div>
          </section>
  )
}
