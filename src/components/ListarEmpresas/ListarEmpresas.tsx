import Axios from 'axios'
import { useEffect, useState } from 'react';
import { EmpresaModel } from '../../models/EmpresaModel';
import dayjs from "dayjs";


import './ListarRspresa.css'
import { cnpjMask } from '../../utils/cnpjMask';

function ListarEmpresas() {

    const [listaEmpresas, setListaEmpresas] = useState<EmpresaModel[]>([])

    const CarregarLista = () => {
        Axios.get("http://localhost:8080/empresa")
            .then(response => { setListaEmpresas(response.data) });

    }

    useEffect(() => {
        CarregarLista()
      }, []);

    return (
        <div>
            <h2> Lista de Empresas</h2>
            {/* <button onClick={CarregarLista}>Atualizar</button> */}

            <table>
                <thead>
                    <tr>
                        <th>Nome</th>
                        <th>CNPJ</th>
                        <th>Data de abertura</th>
                        <th>Endereço</th>
                    </tr>
                </thead>
                <tbody>
                    {listaEmpresas.map((item) => (
                        <tr key={item.id}>
                            <td>{item.nome}</td>
                            <td>{cnpjMask(item.cnpj)}</td>
                            <td>{dayjs(item.dataAbertura).format("DD/MM/YYYY")}</td>
                            <td>{item.endereco}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
}
export default ListarEmpresas