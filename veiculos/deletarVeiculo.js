
const { veiculos } = require("./veiculos")

function deletarVeiculo(id) {
    try {
        const indice = veiculos.findIndex(veiculo =>
            veiculo.id === id
        )
        if (indice === -1 ){
            console.log("veiculo não encontrado");
        } else {
            veiculos.splice(indice, 1);
            console.log("Veiculo deletado com socesso");
        }
    } catch (error) {console.error("Erro ao deletar veiculo", error.message)}
}

module.exports = {deletarVeiculo}