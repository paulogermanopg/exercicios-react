import React from "react"
import ReactDom from "react-dom"
import Contador from "./componentes/Contador"

const elemento = document.getElementById('root')
ReactDom.render(
    <div>
        <Contador numeroInicial={0} />
    </div>
    , elemento
)