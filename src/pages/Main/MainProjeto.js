import React from 'react'
import Myprojeto from '../../assets/img/tela.png'
import './MainProjeto.css'

const MainProjeto = () => {
  return (
    <main className="row justify-content-center" id="Projetos">
            <p className="h1  mb-5 Projetos__titulo text-light text-center">PROJETOS</p>
            <article className="card text-light m-bottom-card hover-projetos">
                <img src={Myprojeto} alt="Portifolio" className="card-img-top img-card mt-3" />
                <div className="card-body txt-estilo">
                    <h5 className="card-title">MY Portifolio</h5>
                    <p className="card-text">Site criado ultilizando biblioteca React. </p>
                    <a href="#123" target="_blank" className="btn btn-primary">Ver
                        projeto</a>
                </div>
            </article>
    </main>
  )
}

export default MainProjeto