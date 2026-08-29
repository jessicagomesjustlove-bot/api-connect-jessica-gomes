const usuarios = [];

let proximoId = 1;

function gerarId() {
  return proximoId++;
}

module.exports = {
  usuarios,
  gerarId
};