const quoteContainer = document.getElementById('quote-container');
const newQuoteBtn = document.getElementById('new-quote-btn');
const quoteSender = document.getElementById('quote-sender');

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

function tweet() {
    const quote = quoteContainer.textContent;
    const character = quoteCharacter.textContent;
    const anime = quoteAnime.textContent;
    const tweetContent = encodeURIComponent(`${quote}\nby ${character}\nfrom ${anime}`);
    window.open(`https://twitter.com/intent/tweet?text=${tweetContent}`, "Tweet Window", "width=600, height=300");
}

fetchRandomQuote();

newQuoteBtn.addEventListener('click', fetchRandomQuote);
quoteSender.addEventListener('click', tweet);
