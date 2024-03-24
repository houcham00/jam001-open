const quoteContainer = document.getElementById('quote');
const newQuoteBtn = document.getElementById('new-quote-btn');
const quoteAnime = document.getElementById('quoteAnime');
const quoteCharacter = document.getElementById('quoteCharacter');

function fetchRandomQuote() {
    fetch("https://animechan.xyz/api/random")
        .then(response => response.json())
        .then(data => {
            //quoteContainer.textContent = `"${data.quote}" - ${data.character} (${data.anime})`;
            quoteContainer.textContent = `"${data.quote}"`;
            quoteAnime.textContent = `${data.anime}`;
            quoteCharacter.textContent = `${data.character}`;
        })
        .catch(error => {
            console.error('Une erreur est survenue lors de la récupération de la citation:', error);
            quoteContainer.textContent = "Impossible de récupérer la citation pour le moment.";
        });
}

fetchRandomQuote();

newQuoteBtn.addEventListener('click', fetchRandomQuote);
