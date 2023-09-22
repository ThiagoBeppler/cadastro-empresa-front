import React, { useState } from 'react';
import Axios from 'axios'

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
  
    Axios.post("http://localhost:8080/empresa", dadosDoFormulario)
      .then((response) => {
        console.log(response);
      });
    setDadosDoFormulario(empresaVazia)
  };

  return (

    <form onSubmit={handleSubmit}>

       <h2> Cadastro Empresa</h2>
      <div>
        <label htmlFor="nome">Nome:</label>
        <input
          type="text"
          id="nome"
          name="nome"
          value={dadosDoFormulario.nome}
          onChange={handleChange}
          required
        />
      </div>
      <div>
        <label htmlFor="cnpj">CNPJ:</label>
        <input
          type="text"
          id="cnpj"
          name="cnpj"
          value={dadosDoFormulario.cnpj}
          onChange={handleChange}
          required
        />
      </div>
      <div>
        <label htmlFor="endereco">Endereço:</label>
        <input
          type="text"
          id="endereco"
          name="endereco"
          value={dadosDoFormulario.endereco}
          onChange={handleChange}
          required
        />
      </div>
      <button type="submit">Enviar</button>
    </form>
  );
};

export default CadastarEmpresas