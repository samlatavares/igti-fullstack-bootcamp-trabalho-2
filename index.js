import {
  carregarDados,
  criarJsonEstados,
  countCidades,
  buscarCincoMaioresEstados,
  buscarCincoMenoresEstados,
} from './functions.js';

carregarDados()
  .then(async () => {
    await criarJsonEstados();
    console.log(await countCidades('ES'));
    buscarCincoMaioresEstados();
    console.log('-------');
    buscarCincoMenoresEstados();
  })
  .catch(console.log);
