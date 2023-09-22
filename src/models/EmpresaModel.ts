export class EmpresaModel{
    id: number
    nome: string;
    cnpj: string ;
    dataAbertura: Date;
    endereco: string;
    
    constructor(id: number, nome: string, cnpj: string, dataAbertura: Date, endereco: string){
        this.id = id;
        this.nome = nome;
        this.cnpj = cnpj;
        this.dataAbertura = dataAbertura;
        this.endereco = endereco;
    }
}

