import React from 'react'
import WrappledMap from '../Maps/Map'
import credentials from "../APIs/credentials"
import './Navigation.css'

function Navigation() {


return(
    <>
    <aside className="container">

       <div className="card">

       <header className="header">
            <h3>Email: {} </h3>
        </header>

        <nav className="body">
            <ul>
               <li> ADD ROUTE</li>
               <li> MAP</li>
            </ul>
        </nav>

        <section>
            <button>Log Out</button>
        </section>
        </div>
    </aside>
    </>
    )
}

export default Navigation