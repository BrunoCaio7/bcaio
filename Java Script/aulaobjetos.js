/* Propriedades/atributos
*metodos/funcoes*/

/* let pessoa = {
    nome: 'joão', // propriedade
    idade : 28,
    cpf : '123.456.789.00',
    endereço : {
        cidade : 'Recife',
        estado : 'Pernambuco',
        cep : '123456-789'
    },
    cumprimentar:function(){
        console.log('olá,pessoinha')
    }
}
console.log(`Olá, meu nome é ${pessoa.nome} e eu tenho ${pessoa.idade} anos e eu moro em ${pessoa.endereço.cidade}.`)
//console.table(pessoa)
//pessoa.idade = 29

//pessoa.cumprimentar()
console.log(pessoa['nome'])
pessoa['cumprimentar']()
 */


 /* class Pessoa {

     construtor(){
         this.nome ='joão'
         this.idade = 28
         this.cpf ='123.456.789-00'
     }
 }
 let p = new Pessoa()
  */
 
 /* class Pessoa {

    constructor(nome, idade, cpf) {
      this.nome = nome
      this.idade = idade
      this.cpf = cpf
    }
    cumprimentar(){
        console.log(`Olá, meu nome é ${this.nome} e tenho ${this.idade} anos.`)  
    }

    static cumprimentar2() {
        console.log(`Olá`)
    }
    
  } */
  
  l/* et p = new Pessoa('Marcos', 20, '123.456.789-98')
  let p2 = new Pessoa('Dayvson', 25, '132.465.798-42')
  
  console.log(`Olá, meu nome é ${p.nome} e tenho ${p.idade} anos.`)

  p.cumprimentar()
  
  console.log(p)
  console.log(p2)

  Pessoa.cumprimentar2() */


/* let p = new Pessoa('Marcos', 20, '123.456.789-98')
let p2 = new Pessoa('Dayvson', 25, '132.465.798-42')
let p3 = new Pessoa('Amanda', 22, '951.753.862-24')

const pessoas = [p, p2, p3]

for (let pessoa of pessoas) {
  pessoa.cumprimentar()
} */