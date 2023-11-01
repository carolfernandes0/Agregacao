export class Produto{

    public nome: string;
    public preco:number;

    constructor(_nome:string, _preco:number){
        this.nome = _nome;
        this.preco = _preco;
    }

    public setnome(_nome:string):void{
        this.nome = _nome;
    }

    public getnome():string{
        return this.nome;
    }

    public setperco(_preco: number):void{
        this.preco = _preco;
    }

    public getpreco(): number{
        return this.preco;
    }
}