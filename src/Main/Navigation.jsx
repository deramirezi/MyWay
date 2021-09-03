import React from 'react'
import WrappledMap from '../Maps/Map'
import credentials from "../APIs/credentials"
import './Navigation.css'
import {useAuth} from '../Context/AuthContext'


function Navigation() {

const{handlelogout,user} = useAuth()

return(
    <>
    <div className="Logo"></div>
    <aside className="container">

       <div className="card">

       <header className="header">
            <h3>{user.email}</h3>
        </header>


        <section>
            <button  className="Boton" onClick={handlelogout}>Log Out</button>
        </section>
        </div>
    </aside>
    </>
    )
}

export default Navigation