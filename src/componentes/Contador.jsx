import React, {Component} from "react"

export default class Contador extends Component{
    state = {
        numero: this.props.numeroInicial
    }

    maisUm = () => {
        this.setState({ numero: this.state.numero + 1})
        //this.state.numero++
    }
    menosUm = () => {
        this.setState({ numero: this.state.numero - 1})
        //this.state.numero++
    }

    alterarNumero = (diferenca) => {
        this.setState({ numero: this.state.numero + diferenca})
    }

    render(){
        return (
            <div>
                <div>Número: {this.state.numero}</div>
                <button onClick={this.maisUm}>Incrementar</button>
                <button onClick={this.menosUm}>Decrementar</button>  
                <button onClick={() => this.alterarNumero(10)}>Incrementar 10</button>
                <button onClick={() => this.alterarNumero(-10)}>Decrementar 10</button> 
            </div>
        )
    }
}

//Primeira solução
// constructor(props){
//     super(props)
//     this.maisUm = this.maisUm.bind(this)
// }

//Segunda solução
// <div>
//     <div>Número: {this.props.numero}</div>
//     <button onClick={() => this.maisUm()}>Incrementar</button>
//     <button>Decrementar</button>  
// </div>

//Terceira solução
// maisUm = () => {
//     this.props.numero++
// }