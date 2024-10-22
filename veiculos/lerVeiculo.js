
const { veiculos } = require("./veiculos")

function lerVeiculo() {

    try {
        veiculos.forEach(veiculo =>
            console.table(veiculos)
        )
    } catch (error) {console.error("Erro ao ler veículo", error.message) }
}
module.exports = { lerVeiculo };