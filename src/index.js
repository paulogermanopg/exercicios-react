import React from "react"
import ReactDom from "react-dom"
import Contador from "./componentes/Contador"
import Hook from "./componentes/Hook"

const elemento = document.getElementById('root')
ReactDom.render(
    <div>
<       div>
           <Contador numeroInicial={0} />
        </div>
        <div>
            <Hook />
        </div>
    </div>
    
    , elemento
)