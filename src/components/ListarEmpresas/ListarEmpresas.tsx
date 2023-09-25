import Axios from 'axios'
import { useEffect, useState } from 'react';
import { EmpresaModel } from '../../models/EmpresaModel';
import { AiFillDelete } from 'react-icons/ai';

import dayjs from "dayjs";


import './ListarEmpresas.css'
import { cnpjMask } from '../../utils/cnpjMask';

function ListarEmpresas() {

    const [listaEmpresas, setListaEmpresas] = useState<EmpresaModel[]>([])
    
    const CarregarLista = () => {

        setTimeout(() => {
            
            Axios.get("http://localhost:8080/empresa")
            .then(response => { setListaEmpresas(response.data) });
            
        }, 300);

    }

    const ExcluirEmpresa = (id: number) => {
        Axios.delete("http://localhost:8080/empresa/" + id)
        .then(response => { console.log(response.data) });
        
    }

    setTimeout(() => {
        CarregarLista();
    }, 300);
    
    
    useEffect(() => {
        CarregarLista()
      }, []);

    return (
        <div>
            <h2> Lista de Empresas</h2>
            <table>
                <thead>
                    <tr>
                        <th>Nome</th>
                        <th>CNPJ</th>
                        <th>Data de abertura</th>
                        <th>Endereço</th>
                        <th>Excluir</th>
                    </tr>
                </thead>
                <tbody>
                    { listaEmpresas.length > 0 &&  listaEmpresas.map((item) => (
                        <tr key={item.id}>
                            <td>{item.nome}</td>
                            <td>{cnpjMask(item.cnpj)}</td>
                            <td>{dayjs(item.dataAbertura).format("DD/MM/YYYY")}</td>
                            <td>{item.endereco}</td>
                            <td className='deleteIcon'> <AiFillDelete onClick={()=>{ExcluirEmpresa(item.id)}}/></td>
                        </tr>
                    ))}
                </tbody>
            </table>
            <br />
            <br />
        </div>
    )
}
export default ListarEmpresas