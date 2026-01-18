const { usuarios, perfis } = require('../data/db')

module.exports = {
     ola() {
      return 'Bom dia!';
    },

    horaAtual() {
      return new Date;
    },

    usuarioLogado(obj) {
      console.log(obj);
      return {
        id: 1,
        nome: 'Ana da Web',
        email: 'anadaweb@email.com',
        idade: 23,
        salario_real: 1234.56,
        vip: true
      };
    },

    produtoEmDestaque() {
      return {
        nome: 'Notebook Gamer',
        preco: 4890.99,
        desconto: 0.5
      };
    },

    numerosMegaSena() {
      // return [4,8,13,27,33,54]
      // const crescente = (a, b) => a - b
      // return Array(6).fill(0)
      //   .map(n => parseInt(Math.random() * 60 + 1))
      //   .sort(crescente)    

      const numeros = new Set();

      while (numeros.size < 6) {
        numeros.add(Math.floor(Math.random() * 60) + 1);
      }
      return Array.from(numeros).sort((a, b) => a - b);
    },

    // usuario (_, args){
    //   const selec = usuarios.filter(u => u.id === args.id)
    //   return selec ? selec[0] : null
    // }

    usuarios() {
      return usuarios;
    },


    usuario(_, { id }) {
      const selec = usuarios.filter(u => u.id === id);
      return selec ? selec[0] : null;
    },

    perfis() {
      return perfis;
    },

    perfil(_, { id }) {
      const perfil_selecionando = perfis.filter(p => p.id === id);
      return perfil_selecionando ? perfil_selecionando[0] : null;
    },

}