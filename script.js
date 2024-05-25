document.addEventListener('DOMContentLoaded', () => {
    displayCards();
});

function loadCards() {
    const cards = localStorage.getItem('cards');
    if (cards) {
        return JSON.parse(cards);
    }
    return [];
}

function saveCards(cards) {
    localStorage.setItem('cards', JSON.stringify(cards));
}

function displayCards() {
    const cards = loadCards();
    const filterClassification = document.getElementById('filterClassification').value;
    const cardsDiv = document.getElementById('cards');
    cardsDiv.innerHTML = '';

    const filteredCards = filterClassification ? 
        cards.filter(card => card.classification === filterClassification) : 
        cards;

    filteredCards.forEach(card => {
        cardsDiv.innerHTML += `<div class="card">
            <p>Nome: ${card.name}</p>
            <p>Título: ${card.title}</p>
            <p>Página Online: <a href="${card.pagina_online}" target="_blank">${card.pagina_online}</a></p>
            <p>Instagram: <a href="https://instagram.com/${card.instagram}" target="_blank">${card.instagram}</a></p>
            <p>Telefone: ${card.phone}</p>
            <p>Classificação: ${card.classification}</p>
        </div>`;
    });
}

function addCard() {
    const name = document.getElementById('name').value;
    const title = document.getElementById('title').value;
    const pagina_online = document.getElementById('pagina_online').value;
    const instagram = document.getElementById('instagram').value;
    const phone = document.getElementById('phone').value;
    const classification = document.getElementById('classification').value;

    const cards = loadCards();
    cards.push({name, title, pagina_online, instagram, classification, phone});
    saveCards(cards);
    displayCards();
}
