import React from "react";
const TabelaHead = (props) => (
    <thead> 
        <tr>
            <th colspan="4"> Tabela de Livros </th>
        </tr>
        <tr>
            <th> ISBN </th>
            <th> Titulo <div class="container-setinhas">
                <div onClick={() => props.ordemCrescente()}>&#129093;</div>
                <div onClick={() => props.ordemDecrescente()}>&#129095;</div>
                </div></th>
            <th> Autor </th>
            <th> </th>
        </tr>
    </thead>
);
export default TabelaHead;