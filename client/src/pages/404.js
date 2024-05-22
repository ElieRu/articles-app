
import React from 'react'
import { Link } from 'react-router-dom'

export const NotFound = () => {    
    return (
    <section className="py-5">
        <div className="container">
            <div>
                <h1>Page not found</h1>
                <p>Go to the <Link to='/'>home page</Link></p>
            </div>
        </div>
    </section>
  )
}
