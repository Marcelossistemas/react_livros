import React from "react";
const TabelaFoot = (props) => (
    <tfoot> 
        <tr>
            <th colspan="4"> Tabela de Livros </th>
        </tr>
        <tr>
            <td colspan="4"> {props.qtdLivros} </td>
        </tr>
    </tfoot>
);
export default TabelaFoot;