import React,{useState} from 'react'
import './MainHabilidade.css'
// my img
import HTML from '../../assets/img/html.svg'
import CSS from '../../assets/img/css.svg'
import JS from '../../assets/img/js.svg'
import REACT from '../../assets/img/react.svg'
import GIT from '../../assets/img/git.svg'
// my componentes
import MainPopaup from '../../Components/HabilidadePopaup/MainPopaup.js'


const MainHabilidade = () => {
	const [HTMLPopaup, setHTMLPopaup] = useState()
	const [CSSPopaup,setCSSPopaup] = useState()
	const [JSPopaup,setJSPopaup] = useState()
	const [ReactPopaup, setReactPopaup] = useState()
	const [GitPopaup, setGitPopaup] =useState()
  return (
	
    <section class="justify-content-center bg ps-4 padding-ctns conhecimentos-container" id="Habilidades">
		<p class="h1 Habilidade__titulo mb-5 text-light text-center">HABILIDADES</p>
		<div class=" text-center" id="icons">
			<button onClick={() => setHTMLPopaup(true)}><img className='conhecimento-icons' src={HTML} alt="HTML" /></button>
			<MainPopaup trigger={HTMLPopaup} setTrigger={setHTMLPopaup} className="card">
			<div classname="card-body">
				<h5 classname="card-title">HTML</h5>
				<p classname="card-text">HTML é o bloco de construção mais básico da web. Define o significado e a estrutura do conteúdo da web.</p>
			</div>
			</MainPopaup>
			<button onClick={()=>setCSSPopaup(true)}><img className='conhecimento-icons' src={CSS} alt="CSS" /></button>
			<MainPopaup trigger={CSSPopaup} setTrigger={setCSSPopaup} className="card">
			<div classname="card-body">
				<h5 classname="card-title">CSS</h5>
				<p classname="card-text">CSS é um mecanismo para adicionar estilos a uma página web, aplicado diretamente nas tags HTML.</p>
			</div>
				</MainPopaup>
			<button onClick={()=> setJSPopaup(true)}><img className='conhecimento-icons' src={JS} alt="JavaScript" /></button>
			<MainPopaup trigger={JSPopaup} setTrigger={setJSPopaup} classname="card">
			<div classname="card-body">
				<h5 classname="card-title">JavaScript</h5>
				<p classname="card-text">Linguagem de programação interpretada estruturada, de script em alto nível com tipagem dinâmica fraca e multiparadigma.</p>
			</div>
			</MainPopaup>
			<button onClick={()=>setReactPopaup(true)}><img className='conhecimento-icons habilidade__React' src={REACT} alt="React" /></button>
			<MainPopaup trigger={ReactPopaup} setTrigger={setReactPopaup} classname="card">
			<div classname="card-body">
				<h5 classname="card-title">React</h5>
				<p classname="card-text">O React é uma biblioteca front-end JavaScript de código aberto com foco em criar interfaces de usuário em páginas web.</p>
			</div>
			</MainPopaup>
			<button onClick={()=>setGitPopaup(true)}><img className='conhecimento-icons habilidade__git' src={GIT} alt="" /></button>
			<MainPopaup trigger={GitPopaup} setTrigger={setGitPopaup} classname="card">
			<div classname="card-body">
				<h5 classname="card-title">Git</h5>
				<p classname="card-text">Conhecimento em versionamento e principais comandos, copmo: git status, git commit, git push e pull, git clone, git merge e branch.</p>
			</div>
			</MainPopaup>
		</div>
	</section>
  )
}

export default MainHabilidade