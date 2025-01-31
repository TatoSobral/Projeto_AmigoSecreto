//O principal objetivo deste desafio é fortalecer suas habilidades em lógica de programação. Aqui você deverá desenvolver a lógica para resolver o problema.

let nomes = [];

function adicionar() {
    let amigoNome = document.getElementById('amigo-nome').value.trim();

    if (nomes.includes(amigoNome)) {
        alert('Este nome já consta na lista de amigos. Digite novamente.');
    } else if (amigoNome === '') {
        alert('O campo de nome do amigo não pode estar sem preenchimento.');
    } else {
        nomes.push(amigoNome);
        console.log(nomes);
    }

    document.getElementById('amigo-nome').value = '';

    let amigosAdicionados = document.getElementById('listaAmigos');
    amigosAdicionados.innerHTML = nomes.map(nome => `<li>${nome}</li>`).join('');
}

function sortear() {
    if (nomes.length < 4) {
        alert('O número de amigos deve ser no mínimo ou igual a 4 pessoas. Adicione mais amigos, por favor.');
        return;
    }

    const indiceAleatorio = Math.floor(Math.random() * nomes.length);
    const nomeSorteado = nomes[indiceAleatorio];
    let sorteio = document.getElementById('resultado');
    sorteio.innerHTML = `O amigo secreto sorteado é: ${nomeSorteado}`;
}

function aleatoria(lista) {
    for (let indice = lista.length; indice; indice--) {
        const indiceAleatorio = Math.floor(Math.random() * indice);
        [lista[indice - 1], lista[indiceAleatorio]] = [lista[indiceAleatorio], lista[indice - 1]];
    }
}

function reiniciar() {
    nomes = [];
    document.getElementById('amigo-nome').value = '';
    document.getElementById('listaAmigos').innerHTML = '';
    document.getElementById('resultado').innerHTML = '';
}
