import React from 'react'
// MY BOOTSTRAP
import 'bootstrap/dist/css/bootstrap.min.css'
// my css
import './Header.css'
// my componets
import HeaderTexto from '../Components/HeaderTexto'
import HeaderNav from './Header/HeaderNav'

const Header = () => {
  
  return (
    <header>
        <HeaderNav />
        <section className='banner' id='inicio'>
            <div className='banner__texto'>
                    <span className="banner__hello">Olá, meu nome é</span>
                <h1>
                    <spam className="banner__name"> Leonardo Sousa </spam>
                </h1>
                <HeaderTexto/>
            </div>
        </section>
    </header>
  )
}

export default Header