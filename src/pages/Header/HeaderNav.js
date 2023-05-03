import React from 'react'
import { useRef } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import './HeaderNav.css'

const HeaderNav = () => {
    const navRef = useRef();

	const showNavbar = () => {
		navRef.current.classList.toggle(
			"responsive_nav"
		);
	};
  return (
    <aside className="navbar navbar-expand-lg bg fixed-top my-30">
        <div className="container-fluid margem-nav" >
            <div>
                <a target="_blank" href="https://instagram.com/leonardo06_leo?igshid=ZDdkNTZiNTM=" className="btn btn-outline-light ms-1" rel="noreferrer">Leonardo</a>
            </div>
            <nav ref={navRef} className="navbar-collapse justify-content-end">
            <ul className="navbar-nav">
                <li><a href='#inicio' className="btn btn-outline-light me-4" aria-current="page">Início</a></li>
                <li><a href='#Sobre' className="btn btn-outline-light me-4">Sobre</a></li>
                <li><a href='#Habilidades' className="btn btn-outline-light me-4">Habilidades</a></li>
                <li><a href='#Projetos' className="btn btn-outline-light me-4">Projetos</a></li>
            </ul>
				<button
					className="nav-btn nav-close-btn"
					onClick={showNavbar}>
					<FaTimes />
				</button>
                
			</nav>
            <button
				    className="nav-btn"
				    onClick={showNavbar}>
				    <FaBars />
			    </button>
        </div>
		</aside>
  )
}

export default HeaderNav