const { ApolloServer, gql } = require('apollo-server');

const typeDefs = gql`
    scalar Date

    type Produto {
        nome: String!
        preco: Float!
        desconto: Float
        precoComDesconto: Float
    }

    type Usuario {
      id: ID
      nome: String!
      idade: Int
      salario: Float
      vip: Boolean
    }

  # Pontos de entra da sua API!
  type Query {
    ola: String!
    horaAtual: Date!
    usuarioLogado: Usuario
    produtoEmDestaque: Produto
    numerosMegaSena: [Int!]!
  }
    
`;

const resolvers = {
  Produto: {
    precoComDesconto(produto) {
      if (produto.desconto) {
        return produto.preco * (1 - produto.desconto);
      } else {
        return produto.preco;
      }
    }
  },

  Query: {
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

    }



  }
};

const server = new ApolloServer({
  typeDefs,
  resolvers
});

server.listen().then(({ url }) => {
  console.log(`Executando em ${url}`);
})

