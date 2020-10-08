import {
  carregarDados,
  criarJsonEstados,
  countCidades,
  buscarCincoMaioresEstados,
  buscarCincoMenoresEstados,
  buscarMaiorNomeCidadePorEstado,
  buscarMenorNomeCidadePorEstado,
  buscarMaiorNomeCidade,
  buscarMenorNomeCidade,
} from './functions.js';

carregarDados()
  .then(async () => {
    console.log('1. Criando arquivos com cidades por estado...');
    await criarJsonEstados();

    console.log('2. Quantidade de cidades para o estado informado:');
    console.log(await countCidades('ES'));

    console.log('3. Buscando 5 maiores estados:');
    buscarCincoMaioresEstados();

    console.log('4. Buscando 5 menores estados:');
    buscarCincoMenoresEstados();

    console.log('5. Buscando maior nome de cidade por estado:');
    buscarMaiorNomeCidadePorEstado();

    console.log('6. Buscando menor nome de cidade por estado:');
    buscarMenorNomeCidadePorEstado();

    console.log('7. Buscando cidade com maior nome de todos os estados:');
    buscarMaiorNomeCidade();

    console.log('7. Buscando cidade com menor nome de todos os estados:');
    buscarMenorNomeCidade();
  })
  .catch(console.log);
