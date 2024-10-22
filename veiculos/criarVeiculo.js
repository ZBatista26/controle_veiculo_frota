const { veiculos } = require("./veiculos")

function criarVeiculo(id, marca, modelo, placa, status, quilometragemAtual, motoristaDesignado, dataUltimaManutencao) {
    const novoVeiculo = {id, marca, modelo, placa, status, quilometragemAtual, motoristaDesignado, dataUltimaManutencao }
try {
    veiculos.push(novoVeiculo)
} catch (error) { console.error("Erro ao criar novo veículo", error.message)}
}
module.exports = { criarVeiculo }