const quotes = [
  {
    quote: "Privacy seems to be the only true luxury left today.",
    author: "Hedi Slimane",
  },
  {
    quote: "Two possibilities exist: Either we are alone in the Universe or we are not. Both are equally terrifying.",
    author: "Sir Arthur Clarke",
  },
  {
    quote: "Morality is the weakness of the brain.",
    author: "Arthur Rimbaud",
  },
  {
    quote: "...of all things this was the saddest, that life goes on: if one leaves one's lover, life should stop for him.",
    author: "Truman Capote",
  },
  {
    quote: "Parting is such sweet sorrow.",
    author: "William Shakespeare",
  },
  {
    quote: "Your time is limited, don't waste it living someone else's life.",
    author: "Steve Jobs",
  },
  {
    quote: "In the depth of winter, I finally learned that within me there lay an invincible summer.",
    author: "Albert Camus",
  },
  {
    quote: "Hell is other people.",
    author: "Jean-Paul Sartre",
  },
  {
    quote: "What doesn't kill us makes us stronger.",
    author: "Friedrich Nietzsche",
  },
  {
    quote: "Life is like riding a bicycle. To keep your balance, you must keep moving.",
    author: "Albert Einstein",
  },
  {
    quote: "101010",
    author: "Deep Thought",
  },
];

const quote = document.querySelector("#quotes span:first-child");
const author = document.querySelector("#quotes span:last-child");

const todaysQuote = quotes[Math.floor(Math.random() * quotes.length)];

quote.innerText = todaysQuote.quote;
author.innerText = `- ${todaysQuote.author}`;