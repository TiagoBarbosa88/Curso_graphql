const perfil = require('./perfil');
const usuario = require('./usario')

module.exports = {
  ...usuario,
  ...perfil,
}