// TypeIt
import TypeIt from "typeit-react";
// MY css
import './HeaderTexto.css'

import React, {useState} from 'react'

const HeaderTexto = () => {
  const [instance, setInstance] = useState(null);
  return (
    <div className="styleTexto">
        <TypeIt
        options={{ loop: true }}
        getAfterInit={(instance) => {
            setInstance(instance);
            return instance;
        }}
        >
        Eu Sou <span className="styleTexto__cor">Desenvolvedor Front-End</span> 
        </TypeIt>
    </div>
  )
}

export default HeaderTexto