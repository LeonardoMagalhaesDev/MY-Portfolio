import React from 'react'

import './MainSobre.css'
// My img
import MyPerfil from '../../assets/img/myPerfil.jpg'

const MainSobre = () => {
  return (
    <main id="Sobre" className="row bg2 justify-content-center">
            <p className="h1 mb-5 text-center">SOBRE MIM</p>

            <figure className="col-11 col-sm-11 col-md-5 text-center mb-foto-mobile">
                <img className='Sobre__myPerfil' src={MyPerfil} alt="Olá essa é minha foto de perfil Leonardo" />
            </figure>
            <article className=" Sobre__myTexto col-11 col-sm-11 col-md-5  fs-5">
                <p className="me-3">Olá, eu sou Leonardo Sousa Magalhães, tenho 26 anos, moro em Fortaleza - CE e estou buscando minha primeira experiência profissional no mercado de T.I.</p>
                <p className="me-3">Sou um jovem sonhador apaixonado por programação e que ama
                 novos desafios, estou no meu inicio de carreira e tenho planos
                 ambiciosos para o meu futuro. Busco novos desafios que possam
                 me proporcionar um crescimento como humano e como profissional.</p>
                <p className=" Sobre__terceiroParagrafo me-3">Atualmente estou cursando WorkShop Drupal, Git
                GitHub e Front-end | HTML | CSS | JavaScript | React na Amontada
                Valley, por fome de conhecimento e para ampliar meus horizontes de
                oportunidades.</p>

                <a href="https://drive.google.com/drive/u/0/computers" target='_blank'
                    className="btn btn-outline-primary btn-lg mt-3 me-5" rel="noreferrer">
                    <i class="bi bi-cloud-download Sobre__icon">  Curriculo</i></a>
                <a href="https://mail.google.com/mail/u/1/#inbox" target='_blank' className="btn btn-outline-primary btn-lg mt-3" rel="noreferrer">
                <i className="bi bi-envelope-at Sobre__icon">  E-mail</i></a>
                
            </article>
    </main>
  )
}

export default MainSobre