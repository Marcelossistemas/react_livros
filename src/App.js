import React, {Component} from "react";
import TabelaHead from "./components/tabelaHead";
import TabelaBody from "./components/tabelaBody";
import TabelaFoot from "./components/tabelaFoot";

class App extends Component{
state = {
  
  /*livros: [
    {
      id: "978-85-7522-632-2",
      titulo: "CSS Grid Layout",
      autor: "Mauricio"
    },
    {
      id: "978-85-7522-677-3",
      titulo: "Mode Essencial",
      autor: "Ricardo"
    }
  ]
  */
   livros: []
};

componentDidMount(){
  fetch("/api/livros.json")
  .then(response => response.json())
  .then(livros => this.setState({livros}))
  .catch(function(error){
    console.log("Erro na requisição")
  })
  .finally(function(){
    console.log("Sempre retorna");
  });
};

handleRemoverLinhaTabela = (id) => {
  const livros = this.state.livros.filter(l=> l.id !== id);
  this.setState({livros});
};

handleOrdemCrescente = (titulo) => {
  const livros = this.state.livros.sort((a,b)=>
    a.titulo < b.titulo ? -1 : 0 
  );
  this.setState({livros});
};

handleOrdemDecrescente = (titulo) => {
  const livros = this.state.livros.sort((a,b)=>
    a.titulo < b.titulo ? -1 : 0 
  );

  livros.reverse();
  this.setState({livros});
};

render(){
  return (
    <div>
    <h1>Tabela de Livros</h1>
      <table className="tabela">
        <TabelaHead ordemCrescente = {this.handleOrdemCrescente} ordemDecrescente = {this.handleOrdemDecrescente} />
        <TabelaBody livros={ this.state.livros } excluirLinha = {this.handleRemoverLinhaTabela} />
        <TabelaFoot qtdLivros = {this.state.livros.length }/>
      </table>
  </div>
      
    );
  }
}
export default App;
