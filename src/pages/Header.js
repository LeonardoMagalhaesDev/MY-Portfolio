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
                <a href="https://www.linkedin.com/in/leonardo-sousa-magalh%C3%A3es/" target='_blank'
                    className="btn btn-outline-primary btn-lg mt-3 me-5" rel="noreferrer">
                    <i class="bi bi-linkedin">  Linkedin</i></a>
                <a href="https://mail.google.com/mail/u/1/#inbox" target='_blank' className="btn btn-outline-primary btn-lg mt-3" rel="noreferrer">
                <i class="bi bi-github"></i>  Github</a>
            </div>
        </section>
    </header>
  )
}

export default Header