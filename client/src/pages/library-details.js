import React from 'react'
import { Link, Outlet } from 'react-router-dom'

export const LibraryDetails = () => {
  return (<section className="py-5">
            <div className="container">
              <div>
                <ul>
                  <li><Link to={'ressources'}>Ressources</Link></li>
                  <li><Link to={'followers'} href='#'>Followers</Link></li>
                  <li><Link to={'managment'} href='#'>Managment</Link></li>
                </ul>
              </div>
              <Outlet/>
            </div>
          </section>
  )
}
