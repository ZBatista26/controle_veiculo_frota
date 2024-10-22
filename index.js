const prompt = require("prompt-sync")();

//=============================================================

const { criarVeiculo } = require("./veiculos/criarVeiculo");
const { atualiazarVeiculo } = require("./veiculos/atualizarVeiculo")
const { deletarVeiculo } = require("./veiculos/deletarVeiculo")
const { lerVeiculo } = require("./veiculos/lerVeiculo");
//=============================================================

criarVeiculo("0000", "honda", "civic", "26262626","Carro usado", "20000km", "Francisco Batista","26/02/2024", "")
atualiazarVeiculo("0000","honda", "toyota", " 012345", "carro novo","31000km", "batista", "26/02/2001")
lerVeiculo()

criarVeiculo("0000", "honda", "civic", "26262626","Carro usado", "20000km", "Francisco Batista","26/02/2024", "")
deletarVeiculo("0000")
lerVeiculo()


//==============================================================================================

