const { perfis } = require('../data/db')

module.exports = {
  salario(usuario) {
    return usuario.salario_real;
  },
  perfil(usuario) {
    const perfil_selecionando = perfis.filter(p => p.id === usuario.perfil_id);
    return perfil_selecionando ? perfil_selecionando[0] : null;
  }
};