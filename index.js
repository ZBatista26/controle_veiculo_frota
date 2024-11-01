const prompt = require("prompt-sync")();

//=============================================================

const { criarVeiculo } = require("./veiculos/criarVeiculo");
const { atualiazarVeiculo } = require("./veiculos/atualizarVeiculo")
const { deletarVeiculo } = require("./veiculos/deletarVeiculo")
const { lerVeiculo } = require("./veiculos/lerVeiculo");
//=============================================================

// criarVeiculo("0000", "honda", "civic", "26262626","Carro usado", "20000km", "Francisco Batista","26/02/2024", "")
// atualiazarVeiculo("0000","honda", "toyota", " 012345", "carro novo","31000km", "batista", "26/02/2001")
// lerVeiculo()

// criarVeiculo("0000", "honda", "civic", "26262626","Carro usado", "20000km", "Francisco Batista","26/02/2024", "")
// deletarVeiculo("0000")
// lerVeiculo()


//==============================================================================================

function exibirMenu() {
    console.log("=================================")
    console.log("1 - Criar Veículo")
    console.log("2 - Atualizar Veículo")
    console.log("3 - Deletar Veículo")
    console.log("4 - Ler Veículo")
    console.log("5 - Sair do sistema")
    console.log("=================================")
}
let opcao;
do {
    exibirMenu()
    opcao = parseInt(prompt("digite um numero: "));
    let id;

    switch (opcao) {
     case 1:
         id = prompt("Digite o id: ")
        let marca = prompt("Digite a marca: ")
        let modelo = prompt("Digite o modelo: ")
        let placa = prompt("Digite o número da placa: ")
        let status = prompt("Status do carro: ")
        let quilometragemAtual = prompt("Digite a quilometragem Atual: ")
        let motoristaDesignado = prompt("Nome do motorista designado: ")
        let dataUltimaManutencao = prompt("Data da última manutenção:")
        criarVeiculo(id, marca, modelo, placa, status, quilometragemAtual, motoristaDesignado, dataUltimaManutencao)
        lerVeiculo()
        break;
     case 2:
        id = prompt("Digite o id: ")
        let novoMarca = prompt("Digite uma nova marca: ")
        let novoModelo = prompt("Digite um novo modelo: ")
        let novoPlaca = prompt("Digite um número novo de placa: ")
        let novoStatus = prompt("Digite o status novo: ")
        let novoQuilometragemAtual = prompt("Digite a quilometragem nova: ")
        let novoMotoristaDesignado = prompt("Novo motorista designado: ")
        let novoDataUltimaManutencao = prompt("Nova data da última manutenção: ")
        atualiazarVeiculo(id, novoMarca, novoModelo, novoPlaca, novoStatus, novoQuilometragemAtual, novoMotoristaDesignado, novoDataUltimaManutencao)
        break;
     case 3:
        id = prompt("Digite o id do veículo: ")
        deletarVeiculo(id)
        break;
     case 4:
        lerVeiculo()
        break;
     case 5:
        console.log("sair do sistema...")
        break
     default:
        console.log("valor invalido...")
        break;
    }
} while(opcao !== 5);
