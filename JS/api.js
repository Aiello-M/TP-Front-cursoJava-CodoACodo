const episodesList = document.getElementById('personajes-list');
const prevBtn = document.getElementById('prevBtn');
const nextBtn = document.getElementById('nextBtn');
const pageNumber = document.getElementById('pageNumber');
const inicioPersonajesBtn = document.getElementById('inicioPersonajesBtn');

const characterInfoCard = document.querySelector('.character-info-card');
const closeBtn = document.querySelector('.character-info-card .close-btn');
const characterImg = document.querySelector('.character-info-card .character-img');
const nameElement = document.querySelector('.character-info-card .name');
const speciesElement = document.querySelector('.character-info-card .species');
const statusElement = document.querySelector('.character-info-card .status');
const genderElement = document.querySelector('.character-info-card .gender');

const charactersPerPage = 15;
let currentPage = 1;

prevBtn.addEventListener('click', (event) => {
    event.preventDefault();
    if (currentPage > 1) {
        currentPage--;
        loadCharacters();
        updatePageNumber();
    }
});

nextBtn.addEventListener('click', (event) => {
    event.preventDefault();
    if (currentPage < 42) { //hay 42 páginas de personajes
        currentPage++;
        loadCharacters();
        updatePageNumber();
    }
});

inicioPersonajesBtn.addEventListener('click', (event) => {
    event.preventDefault();
    currentPage = 1;
    loadCharacters();
    updatePageNumber();
});

closeBtn.addEventListener('click', closeCharacterInfoCard);

document.addEventListener('DOMContentLoaded', () => {
    loadCharacters();
    updatePageNumber();
});

async function fetchCharacters(page) {
    const response = await fetch(`https://rickandmortyapi.com/api/character/?page=${page}`);
    const data = await response.json();
    return data.results;
}

async function renderCharacters(characters) {
    episodesList.innerHTML = ''; // Borrar la lista, para los nuevos personajes
    for (const character of characters) {
        const characterItem = document.createElement('li');
        characterItem.classList.add('personajes-item');

        const characterLink = document.createElement('a');
        characterLink.classList.add('personajes-img-link');

        const characterImage = document.createElement('img');
        characterImage.classList.add('personajes-img');
        characterImage.alt = 'poster de personaje';
        characterImage.loading = 'lazy';
        characterImage.src = character.image;

        // Evento click para mostrar la CARD (info personaje)
        characterLink.addEventListener('click', (event) => {
            event.preventDefault();
            openCharacterInfoCard(character);
        });

        const characterText = document.createElement('div');
        characterText.classList.add('personajes-texto');

        const characterName = document.createElement('h3');
        characterName.textContent = character.name;

        characterText.appendChild(characterName);
        characterLink.appendChild(characterImage);
        characterLink.appendChild(characterText);
        characterItem.appendChild(characterLink);
        episodesList.appendChild(characterItem);
    }
}

// FUNCIÓN: obtener info api, manejar error
async function loadCharacters() {
    try {
        const characters = await fetchCharacters(currentPage);
        renderCharacters(characters);
    } catch (error) {
        console.error('Error fetching characters:', error);
    }
}

// FUNCION: número de página
function updatePageNumber() {
    pageNumber.textContent = currentPage;
}

// FUNCIÓN: abrir y mostrar info de la CARD
function openCharacterInfoCard(character) {
    characterImg.src =  character.image; 
    nameElement.textContent = `Nombre: ${character.name}`;
    speciesElement.textContent = `Especie: ${character.species}`;
    statusElement.textContent = `Estatus: ${character.status}`;
    genderElement.textContent = `Género: ${character.gender}`;
    
    characterInfoCard.style.display = 'block'; //mostrar card
    
}

// FUNCIÓN: cerrar la CARD
function closeCharacterInfoCard() {
    characterInfoCard.style.display = 'none';
}
