const {veiculos } = require("./veiculos")

function atualiazarVeiculo(id, novoMarca, novoModelo, novoPlaca, novoStatus, novoQuilometragemAtual, novoMotoristaDesignado, novoDataUltimaManutencao) {
    try {
        const veiculo = veiculos.find(veiculo =>
            veiculo.id === id
        )
        if (veiculo) {
            veiculo.marca = novoMarca
            veiculo.modelo = novoModelo
            veiculo.placa = novoPlaca
            veiculo.status = novoStatus
            veiculo.quilometragemAtual = novoQuilometragemAtual
            veiculo.motoristaDesignado = novoMotoristaDesignado
            veiculo.dataUltimaManutencao = novoDataUltimaManutencao
            console.log("veiculo atualizado com socesso")
        } else {
            console.log("veiculo não Atualizado")
        }
    } catch (error) {console.log("erro ao atualizar infrmações do carro.", error.message)
        
    }
}
module.exports = { atualiazarVeiculo}