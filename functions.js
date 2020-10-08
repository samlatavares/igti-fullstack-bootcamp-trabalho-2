import { promises as fs } from 'fs';
//fs.appendFile

let estados = [];
let cidades = [];

export async function carregarDados() {
  estados = await buscarEstados();
  cidades = await buscarCidades();
}

async function buscarEstados() {
  return JSON.parse(await fs.readFile('Estados.json', { encoding: 'utf-8' }));
}

async function buscarCidades() {
  return JSON.parse(await fs.readFile('Cidades.json', { encoding: 'utf-8' }));
}

export async function criarJsonEstados() {
  estados.forEach(async (estado) => {
    let cidadesFiltradas = cidades;
    cidadesFiltradas = cidadesFiltradas.filter((cidade) => {
      return cidade.Estado === estado.ID;
    });

    await fs.writeFile(
      'result/' + estado.Sigla + '.json',
      JSON.stringify(cidadesFiltradas, null, '\t'),
      'utf-8'
    );
  });
}

export async function countCidades(siglaEstado) {
  let arquivo = JSON.parse(
    await fs.readFile('result/' + siglaEstado + '.json', { encoding: 'utf-8' })
  );

  return arquivo.length;
}

export function buscarCincoMaioresEstados() {
  let listaEstados = [];

  estados.forEach((estado) => {
    let quantidade = cidades.filter((cidade) => {
      return cidade.Estado === estado.ID;
    }).length;
    listaEstados.push({ estado: estado.Sigla, qtdCidades: quantidade });
  });

  listaEstados.sort((a, b) => {
    return b.qtdCidades - a.qtdCidades;
  });

  let cincoPrimeiros = listaEstados.slice(0, 5);

  cincoPrimeiros.forEach((item) => {
    console.log(item.estado + ' - ' + item.qtdCidades);
  });
}

export function buscarCincoMenoresEstados() {
  let listaEstados = [];

  estados.forEach((estado) => {
    let quantidade = cidades.filter((cidade) => {
      return cidade.Estado === estado.ID;
    }).length;
    listaEstados.push({ estado: estado.Sigla, qtdCidades: quantidade });
  });

  listaEstados.sort((a, b) => {
    return a.qtdCidades - b.qtdCidades;
  });

  let cincoPrimeiros = listaEstados.slice(0, 5);

  cincoPrimeiros.sort((a, b) => {
    return b.qtdCidades - a.qtdCidades;
  });

  cincoPrimeiros.forEach((item) => {
    console.log(item.estado + ' - ' + item.qtdCidades);
  });
}

export function buscarMaiorNomeCidadePorEstado() {
  let cidadesFiltradas = [];

  estados.forEach((estado) => {
    let listaCidades = [];
    cidadesFiltradas = cidades.filter((cidade) => {
      return cidade.Estado === estado.ID;
    });
    cidadesFiltradas.forEach((cidade) => {
      listaCidades.push({
        uf: estado.Sigla,
        nomeCidade: cidade.Nome,
      });
    });

    listaCidades.sort((a, b) => {
      return b.nomeCidade.length - a.nomeCidade.length;
    });

    console.log(listaCidades[0].nomeCidade + ' - ' + listaCidades[0].uf);
  });
}

export function buscarMenorNomeCidadePorEstado() {
  let cidadesFiltradas = [];

  estados.forEach((estado) => {
    let listaCidades = [];
    cidadesFiltradas = cidades.filter((cidade) => {
      return cidade.Estado === estado.ID;
    });

    cidadesFiltradas.forEach((cidade) => {
      listaCidades.push({
        uf: estado.Sigla,
        nomeCidade: cidade.Nome,
      });
    });

    listaCidades.sort((a, b) => {
      return a.nomeCidade.length - b.nomeCidade.length;
    });

    console.log(listaCidades[0].nomeCidade + ' - ' + listaCidades[0].uf);
  });
}

export function buscarMaiorNomeCidade() {
  let listaCidades = [];
  cidades.forEach((cidade) => {
    let estado = estados.find((estado) => {
      return estado.ID === cidade.Estado;
    });

    listaCidades.push({
      uf: estado.Sigla,
      nomeCidade: cidade.Nome,
    });
  });

  listaCidades.sort((a, b) => {
    return b.nomeCidade.length - a.nomeCidade.length;
  });

  console.log(listaCidades[0].nomeCidade + ' - ' + listaCidades[0].uf);
}

export function buscarMenorNomeCidade() {
  let listaCidades = [];
  cidades.forEach((cidade) => {
    let estado = estados.find((estado) => {
      return estado.ID === cidade.Estado;
    });

    listaCidades.push({
      uf: estado.Sigla,
      nomeCidade: cidade.Nome,
    });
  });

  listaCidades.sort((a, b) => {
    return a.nomeCidade.length - b.nomeCidade.length;
  });

  console.log(listaCidades[0].nomeCidade + ' - ' + listaCidades[0].uf);
}
