// console.log: testar se arquivo está funcionando

// console.log('Funcionou!')

//cria-se uma constante chamada searchInput, assim será possivel fazer buscas na página
//document: pega todos os elementos
//getElementById(): vai jogar para essa constante searchInput a representação do elemento com o id search-input no html
const searchInput = document.getElementById('search-input');
const resultArtist = document.getElementById("result-artist");
const resultPlaylist = document.getElementById('result-playlists');

function requestApi(searchTerm) {
    const url = `http://localhost:3000/artists?name_like=${searchTerm}`;
    // DENTRO DE CRASES ``
    // url adquirida do arquivo json rodado apos o codigo:
    //json-server --watch api-artists/artists.json --port 3000
    // quando o backend trocar essa url, apenas troca na variavel, pois essa do json é temporaria
    //o json deu http://localhost:3000/artists, apos isso a gente adiciona informações apos um ?
    //sendo aqui: ?name_like=${searchTerm}
    fetch(url)
        .then((response) => response.json())
        //PROMISES
        //o then pega a resposta e responde no json
        .then((result) => displayResults(result, searchTerm));
}


function hidePlaylists() {
    resultPlaylist.classList.add('hidden');
}

function displayResults(result, searchTerm) { 
    hidePlaylists();
    const gridContainer = document.querySelector('.grid-container');
    gridContainer.innerHTML = ''; //limpa os resultados anteriores
    
    const filteredArtists = result.filter(artist => artist.name.toLowerCase().includes(searchTerm));


    //pra cada resultado
    filteredArtists.forEach(artist => {
        const artistCard = document.createElement('div');
        artistCard.classList.add('artist-card');

        artistCard.innerHTML = `
            <div class="card-img">
              <img class="artist-img" src="${artist.urlImg}" />
              <div class="play">
                  <span class="fa fa-solid fa-play"></span>
              </div>
          </div>
      <div class="card-text">              
              <span class="artist-name">${artist.name}</span>
              <span class="artist-categorie">Artista</span>
          </div>`;
        gridContainer.appendChild(artistCard);
    });

    resultArtist.classList.remove('hidden');  // tira o hidden e mostra o artista pesquisado
}



// manipulando eventos:

//document.addEventListener('input', () => {})
// ou
document.addEventListener('input', function () {
    const searchTerm = searchInput.value.toLowerCase().trim();
    //deixa tudo minusculo
    //o input recebe um valor, então resgata esse valor com essa constante searchTerm

    //se a pessoa nao digitar nada, ela mostra os cards da forma que é na pagina principal
    if (searchTerm === '') {
        resultPlaylist.classList.remove('hidden');
        resultArtist.classList.add('hidden');
        return;
    }

    requestApi(searchTerm);
});



