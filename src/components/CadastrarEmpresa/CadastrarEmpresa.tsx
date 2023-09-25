import React, { useState } from 'react';
import Axios from 'axios'
import { InputMask } from '@react-input/mask';

import './CadastrarEmpresa.css'

interface Empresa {
  nome: string;
  cnpj: string;
  endereco: string;

}

var empresaVazia: Empresa = {
  nome: '',
  cnpj: '',
  endereco: ''
}

const CadastarEmpresas: React.FC = () => {
  const [dadosDoFormulario, setDadosDoFormulario] = useState<Empresa>(empresaVazia);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setDadosDoFormulario({
      ...dadosDoFormulario,
      [name]: value,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    dadosDoFormulario.cnpj = dadosDoFormulario.cnpj.replace('.','').replace('.','').replace('/','').replace('-','');

    Axios.post("http://localhost:8080/empresa", dadosDoFormulario)
      .then((response) => {
        console.log(response);
      });
    setDadosDoFormulario(empresaVazia)
  };

  return (

    <form onSubmit={handleSubmit}>
      <h2> Cadastro Empresa</h2>
      <table className='cadastro'>
        <tr>
          <td className='cadastro'>
            <label htmlFor="nome">Nome:</label>
          </td>
          <td className='cadastro'>
            <input
              type="text"
              id="nome"
              name="nome"
              value={dadosDoFormulario.nome}
              onChange={handleChange}
              required
            />
          </td>
        </tr>
        <tr>
          <td className='cadastro'>
            <label htmlFor="cnpj">CNPJ:</label>
          </td>
          <td className='cadastro'>
            <InputMask
              mask='__.___.___/____-__'
              replacement={{ _: /\d/ }}
              showMask
              placeholder='__.___.___/____-__'
              type="text"
              id="cnpj"
              name="cnpj"
              value={dadosDoFormulario.cnpj}
              onChange={handleChange}
              required
            />
          </td>

        </tr>
        <tr>
          <td className='cadastro'>
            <label htmlFor="endereco">Endereço:</label>
          </td>
          <td className='cadastro'>
            <input
              type="text"
              id="endereco"
              name="endereco"
              value={dadosDoFormulario.endereco}
              onChange={handleChange}
              required
            />
          </td>
        </tr>
      </table>
      <br />
      <button type="submit">Enviar</button>
    </form>
  );
};

export default CadastarEmpresas