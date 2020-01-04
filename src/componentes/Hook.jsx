import React, {useState, useEffect} from "react"

export default props =>{
    const [contador, setContador] = useState(0)
    const [status, setPauouImpar] = useState('par')

    useEffect(()=>{
        contador % 2 === 0 ? setPauouImpar('par') : setPauouImpar('impar')
    })
    return (
        <div>
            <h1>{contador}</h1>
            <h1>{status}</h1>
            <button  onClick={()=> setContador(contador+1)}>Incrementar</button>
            <button  onClick={()=> setContador(contador-1)}>Decrementar</button>
        </div>
    )
}