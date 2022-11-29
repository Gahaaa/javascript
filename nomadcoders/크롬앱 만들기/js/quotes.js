const quotest = [
    {
    quote: "There is nothing in the world so irresistibly contagious as laughter and good humor.",
    author: "Charles Dickens",
    },
    {
        quote: "Love all, trust a few. Do wrong to none.",
        author: "William Shakespeare",
    },
    {
        quote: "The nice thing about egotists is that they don't talk about other people.",
        author: "Lucille S. Harper",
    },
    {
        quote: "A man's character may be learned from the adjectives which he habitually uses in conversation.",
        author: "Mark Twain",
    },
    {
        quote: "He has all the virtues I dislike and none of the vices I admire.",
        author: "Winston Churchill",
    },
    {
        quote: "Our remedies oft in ourselves do lie.",
        author: "Shakespeare",
    },
    {
        quote: "It is not God’s will merely that we should be happy, but that we should make ourselves happy.",
        author: "Kant",
    },
    {
        quote: "Marriage is the only adventure open to the cowardly.",
        author: "Aristotle",
    },
    {
        quote: "Be slow to fall into friendship; but when thou art in, continue firm & constant.",
        author: "Socrates",
    },
    {
        quote: "The keenest sorrow is to recognize ourselves as the sole cause of all our adversities.",
        author: "Sophocles",
    }
]

const quotes = document.querySelector("#quote span:first-of-type");
const author = document.querySelector("#quote span:last-of-type");

const todayQuotes =quotest[Math.floor(Math.random()*quotest.length)];

quotes.innerText= todayQuotes.quote;
author.innerText= todayQuotes.quote;
