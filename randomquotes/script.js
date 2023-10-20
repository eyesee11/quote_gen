const quotes = [
    'Trust is like a glass slab, the more pieces it is broken into. The more point of views you get to, scrutinize yourself and the environment surrounding you….~Ayush Chauhan',
    'Luck comes in two forms, Good and bad, sides of a coin in my hand, Fates crossed together, gathered weathered straps like a woven band~Ayush Chauhan',
    '𝚆𝚑𝚎𝚗 𝚘𝚞𝚛 𝚜𝚘𝚞𝚕 𝚐𝚎𝚝𝚜 𝚊 𝚋𝚒𝚝 𝚊𝚠𝚎𝚊𝚛𝚢, 𝚂𝚘𝚖𝚎 𝚖𝚎𝚖𝚘𝚛𝚒𝚎𝚜 𝚊𝚛𝚎 𝚟𝚊𝚕𝚞𝚎𝚍 𝚖𝚞𝚌𝚑 𝚖𝚘𝚛𝚎, 𝚆𝚑𝚎𝚗 𝚝𝚑𝚎𝚒𝚛 𝚜𝚘𝚕𝚎 𝚎𝚡𝚒𝚜𝚝𝚎𝚗𝚌𝚎 𝚒𝚜 𝚋𝚕𝚞𝚛𝚛𝚢~Ayush Chauhan',
    "Despair in Darkness is feared,only because Hopes in Light exists,ironic isn't it. -Ayush Chauhan",
    "It's not like, you can achieve everything you dream about, but everything you achieve, was at least once envisioned by you at some point, even if subconsciously.~Ayush Chauhan",
    'Dreams come around and round, round like a globe spinning, and you living in this world of a lie.... Ironically the lie of living.~Ayush Chauhan',
    'Procrastination and assumptions are our only inborn talents…. Rest are pure hard work and luck~Ayush Chauhan',
    "The only way to do great work is to love what you do. - Steve Jobs",
    "Innovation distinguishes between a leader and a follower. - Steve Jobs",
    "The future belongs to those who believe in the beauty of their dreams. - Eleanor Roosevelt",
    "Success is not final, failure is not fatal: It is the courage to continue that counts. - Winston Churchill",
    "Don't count the days, make the days count. - Muhammad Ali",
    'Never gonna give you up, Never gonna let you down, Never gonna turn around andddd desert you... Never gonna make you cry, Never gonna sayyy goodbye... Never gonna tell a lieeee... and hurt you-Rick Astley',
    "I'm not superstitious but I am a little stitious. -Michael Scott",
    'Clothes make a man.Naked people have a little or no influence in society. -Mark Twain',
    'Do not take life too seriously. You will never get out of it alive.—Elbert Hubbard',
    'A single death is a tragedy,a million deaths is just a statistic. -Joseph Stalin',
    "The optimist proclaims that we live in the best of all possible worlds, and the pessimist fears this is true.—James Branch Cabell",
    "I think God, in creating man, somewhat overestimated his ability.-Oscar Wilde"

];


const categorizedQuotes = {
    Mine: [
        "Trust is like a glass slab, the more pieces it is broken into. The more point of views you get to, scrutinize yourself and the environment surrounding you….~Ayush Chauhan",
        'Procrastination and assumptions are our only inborn talents…. Rest are pure hard work and luck~Ayush Chauhan',
        '𝚆𝚑𝚎𝚗 𝚘𝚞𝚛 𝚜𝚘𝚞𝚕 𝚐𝚎𝚝𝚜 𝚊 𝚋𝚒𝚝 𝚊𝚠𝚎𝚊𝚛𝚢, 𝚂𝚘𝚖𝚎 𝚖𝚎𝚖𝚘𝚛𝚒𝚎𝚜 𝚊𝚛𝚎 𝚟𝚊𝚕𝚞𝚎𝚍 𝚖𝚞𝚌𝚑 𝚖𝚘𝚛𝚎, 𝚆𝚑𝚎𝚗 𝚝𝚑𝚎𝚒𝚛 𝚜𝚘𝚕𝚎 𝚎𝚡𝚒𝚜𝚝𝚎𝚗𝚌𝚎 𝚒𝚜 𝚋𝚕𝚞𝚛𝚛𝚢~Ayush Chauhan',
        "Despair in Darkness is feared,only because Hopes in Light exists,ironic isn't it. -Ayush Chauhan",
        'Luck comes in two forms, Good and bad, sides of a coin in my hand, Fates crossed together, gathered weathered straps like a woven band~Ayush Chauhan',
        'Dreams come around and round, round like a globe spinning, and you living in this world of a lie.... Ironically the lie of living.~Ayush Chauhan',
        "It's not like, you can achieve everything you dream about, but everything you achieve, was at least once envisioned by you at some point, even if subconsciously.~Ayush Chauhan"
    ],
    Motivational: [
        "The future belongs to those who believe in the beauty of their dreams. - Eleanor Roosevelt",
        "Success is not final, failure is not fatal: It is the courage to continue that counts. - Winston Churchill",
        "Don't count the days, make the days count. - Muhammad Ali",
        "The only way to do great work is to love what you do. - Steve Jobs",
        "Innovation distinguishes between a leader and a follower. - Steve Jobs"
    ],
    Humorous: [
        'Never gonna give you up, Never gonna let you down, Never gonna turn around andddd desert you... Never gonna make you cry, Never gonna sayyy goodbye... Never gonna tell a lieeee... and hurt you-Rick Astley',
        "I'm not superstitious but I am a little stitious. -Michael Scott",
        'Clothes make a man.Naked people have a little or no influence in society. -Mark Twain',
        'Do not take life too seriously. You will never get out of it alive.—Elbert Hubbard',
        'A single death is a tragedy,a million deaths is just a statistic. -Joseph Stalin',
        "The optimist proclaims that we live in the best of all possible worlds, and the pessimist fears this is true.—James Branch Cabell",
        "I think God, in creating man, somewhat overestimated his ability.-Oscar Wilde"
    ]
};
let selectedCategory = null;

function selectCategory(category) {
    selectedCategory = category;
}

function showCategories() {
    const categoryButtons = document.querySelector(".category-buttons-container");
    categoryButtons.style.display = "block";
}
function generateRandomQuote() {
    if (selectedCategory !== null) {
        const categoryQuotes = categorizedQuotes[selectedCategory];
        if (categoryQuotes.length === 0) {
            document.getElementById("quote-text").textContent = "No quotes available for this category.";
        } else {
            const randomIndex = Math.floor(Math.random() * categoryQuotes.length);
            const randomQuote = categoryQuotes[randomIndex];
            document.getElementById("quote-text").textContent = randomQuote;
        }
    } else {
        document.getElementById("quote-text").textContent = "Select a category first.";
    }
}

const userQuotes = []; 

function addUserQuote() {
    const userQuoteInput = document.getElementById("user-quote");
    const userQuote = userQuoteInput.value;
    if (userQuote.trim() !== "") {
        userQuotes.push(userQuote);
        userQuoteInput.value = "";
        displayUserQuotes(); 
    }
}


function displayUserQuotes() {
    const userQuotesList = document.getElementById("user-quotes-list");
    userQuotesList.innerHTML = "";
    userQuotes.forEach((quote, index) => {
        const listItem = document.createElement("li");
        listItem.textContent = quote;
        userQuotesList.appendChild(listItem);
    });
}


function selectCategory(category) {
    selectedCategory = category;
    if (category === 'Motivational') {
        categorizedQuotes.Motivational = categorizedQuotes.Motivational.concat(userQuotes);
        displayUserQuotes(); 
    }
}
